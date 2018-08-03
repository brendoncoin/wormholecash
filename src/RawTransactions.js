import axios from 'axios';
class RawTransactions {
  constructor(restURL) {
    this.restURL = restURL;
  }

  whcCreateRawTxChange(rawtx, prevTxs, destination, fee) {
    return axios.get(`${this.restURL}rawTransactions/whcCreateRawTxChange/${rawtx}/${prevTxs}/${destination}/${fee}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcCreateRawTxInput(rawtx, txid, n) {
    return axios.get(`${this.restURL}rawTransactions/whcCreateRawTxInput/${rawtx}/${txid}/${n}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcCreateRawTxOpReturn(rawtx, payload) {
    return axios.get(`${this.restURL}rawTransactions/whcCreateRawTxOpReturn/${rawtx}/${payload}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcCreateRawTxReference(rawtx, destination, amount) {
    return axios.get(`${this.restURL}rawTransactions/whcCreateRawTxReference/${rawtx}/${destination}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcDecodeTransaction(rawtx) {
    return axios.get(`${this.restURL}rawTransactions/whcDecodeTransaction/${rawtx}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcDecodeTransaction(rawtx) {
    return axios.get(`${this.restURL}rawTransactions/whcDecodeTransaction/${rawtx}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }
}

export default RawTransactions;
