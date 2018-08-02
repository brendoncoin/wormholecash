let BITBOXCli = require('bitbox-cli/lib/bitbox-cli').default;
let BITBOX = new BITBOXCli();

module.exports = class WormholeCash {
  constructor(mnemonic, hdpath = "m/44'/145'/0'/0/0") {
    this.mnemonic = mnemonic;
    this.hdpath = hdpath;
    let rootSeed = BITBOX.Mnemonic.toSeed(mnemonic);
    let masterHDNode = BITBOX.HDNode.fromSeed(rootSeed, 'bitcoincash');
    this.change = BITBOX.HDNode.derivePath(masterHDNode, "m/44'/145'/0'/0/0");
    this.cashAddress = BITBOX.HDNode.toCashAddress(this.change);
  }

  burn(satoshis) {
    BITBOX.Address.utxo(this.cashAddress).then((result) => {
      if(!result[0]) {
        return;
      }

      // instance of transaction builder
      let transactionBuilder = new BITBOX.TransactionBuilder();
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

      // add output w/ address and amount to send
      transactionBuilder.addOutput('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqu08dsyxz98whc', sendAmount);
      // let data = Buffer.from("0877686300000044");
      let data = "0877686300000044";
      let buf = BITBOX.Script.nullData.output.encode(Buffer.from(data, 'hex'));
      transactionBuilder.addOutput(buf, 0);

      // keypair
      let keyPair = BITBOX.HDNode.toKeyPair(this.change);

      // sign w/ HDNode
      let redeemScript;
      transactionBuilder.sign(0, keyPair, redeemScript, transactionBuilder.hashTypes.SIGHASH_ALL, originalAmount);

      // build tx
      let tx = transactionBuilder.build();
      // output rawhex
      let hex = tx.toHex();
      console.log(hex);

      // sendRawTransaction to running BCH node
      BITBOX.RawTransactions.sendRawTransaction(hex).then((result) => {
        console.log(result);
      }, (err) => {
        console.log(err);
      });
    }, (err) => {
      console.log(err);
    });
  }
}
