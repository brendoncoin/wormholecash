let BITBOXCli = require('bitbox-cli/lib/bitbox-cli').default;
let BITBOX = new BITBOXCli();

module.exports = class WormholeCash {
  constructor(mnemonic, hdpath = "m/44'/145'/0'/0/0") {
    this.mnemonic = mnemonic;
    this.hdpath = hdpath;
    let rootSeed = BITBOX.Mnemonic.toSeed(mnemonic);

    // master HDNode
    let masterHDNode = BITBOX.HDNode.fromSeed(rootSeed, 'bitcoincash');

    // HDNode of BIP44 account
    let account = BITBOX.HDNode.derivePath(masterHDNode, "m/44'/145'/0'");

    // derive the first external change address HDNode which is going to spend utxo
    this.change = BITBOX.HDNode.derivePath(account, "0/0");
    this.cashAddress = BITBOX.HDNode.toCashAddress(this.change);
  }

  burn(satoshis) {
    BITBOX.Address.utxo('bitcoincash:qzs02v05l7qs5s24srqju498qu55dwuj0cx5ehjm2c').then((result) => {
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

      // get byte count to calculate fee. paying 1 sat/byte
      let byteCount = BITBOX.BitcoinCash.getByteCount({ P2PKH: 1 }, { P2PKH: 1 });
      // 192
      // amount to send to receiver. It's the original amount - 1 sat/byte for tx size
      let sendAmount = originalAmount - byteCount;

      // add output w/ address and amount to send
      transactionBuilder.addOutput('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqu08dsyxz98whc', satoshis);
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
      // BITBOX.RawTransactions.sendRawTransaction(hex).then((result) => {
      //   this.setState({
      //     txid: result
      //   });
      // }, (err) => {
      //   console.log(err);
      // });
    }, (err) => {
      console.log(err);
    });
  }
}
