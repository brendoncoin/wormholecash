let BITBOXCli = require('bitbox-cli/lib/bitbox-cli').default;

module.exports = class WormholeCash {
  constructor(mnemonic, hdpath = "m/44'/145'/0'/0/0", network = 'mainnet') {
    this.mnemonic = mnemonic;
    this.hdpath = hdpath;
    if(network === 'mainnet') {
      this.net = 'bitcoincash';
      this.restURL = "https://rest.bitcoin.com/v1/";
    } else {
      this.net = 'testnet';
      this.restURL = "https://trest.bitcoin.com/v1/";
    }

    this.BITBOX = new BITBOXCli({
      restURL: this.restURL
    });
    let rootSeed = this.BITBOX.Mnemonic.toSeed(mnemonic);
    let masterHDNode = this.BITBOX.HDNode.fromSeed(rootSeed, this.net);
    this.change = this.BITBOX.HDNode.derivePath(masterHDNode, "m/44'/145'/0'/0/0");
    this.cashAddress = this.BITBOX.HDNode.toCashAddress(this.change);
  }

  burn(satoshis) {
    this.BITBOX.Address.utxo(this.cashAddress).then((result) => {
      if(!result[0]) {
        return;
      }

      // instance of transaction builder
      let transactionBuilder = new this.BITBOX.TransactionBuilder(this.net);
      // original amount of satoshis in vin
      let originalAmount = result[0].satoshis;

      // index of vout
      let vout = result[0].vout;

      // txid of vout
      let txid = result[0].txid;

      // add input with txid and index of vout
      transactionBuilder.addInput(txid, vout);

      // amount to send to receiver. It's the original amount - 1 sat/byte for tx size
      let sendAmount = originalAmount - 211;

      // add Wormhole burner address and amount to send
      let out;
      if(this.net === 'bitcoincash') {
        out = 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqu08dsyxz98whc';
      } else {
        out = 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqdmwgvnjkt8whc';
      }
      transactionBuilder.addOutput(out, sendAmount);
      // let data = Buffer.from("0877686300000044");
      let data = "0877686300000044";
      let buf = this.BITBOX.Script.nullData.output.encode(Buffer.from(data, 'hex'));
      transactionBuilder.addOutput(buf, 0);

      // keypair
      let keyPair = this.BITBOX.HDNode.toKeyPair(this.change);

      // sign w/ HDNode
      let redeemScript;
      transactionBuilder.sign(0, keyPair, redeemScript, transactionBuilder.hashTypes.SIGHASH_ALL, originalAmount);

      // build tx
      let tx = transactionBuilder.build();
      // output rawhex
      let hex = tx.toHex();
      console.log(hex);

      // sendRawTransaction to running BCH node
      this.BITBOX.RawTransactions.sendRawTransaction(hex).then((result) => {
        console.log(result);
      }, (err) => {
        console.log(err);
      });
    }, (err) => {
      console.log(err);
    });
  }
}
