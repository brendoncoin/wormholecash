import axios from 'axios';
class RawTransactions {
  constructor(restURL) {
    this.restURL = restURL;
  }

  createRawTxChange(rawtx, prevTxs, destination, fee) {
    return axios.get(`${this.restURL}rawTransactions/createRawTxChange/${rawtx}/${prevTxs}/${destination}/${fee}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  createRawTxInput(rawtx, txid, n) {
    return axios.get(`${this.restURL}rawTransactions/createRawTxInput/${rawtx}/${txid}/${n}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  createRawTxOpReturn(rawtx, payload) {
    return axios.get(`${this.restURL}rawTransactions/createRawTxOpReturn/${rawtx}/${payload}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  createRawTxReference(rawtx, destination, amount) {
    return axios.get(`${this.restURL}rawTransactions/createRawTxReference/${rawtx}/${destination}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  decodeTransaction(rawtx) {
    return axios.get(`${this.restURL}rawTransactions/decodeTransaction/${rawtx}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  decodeTransaction(rawtx) {
    return axios.get(`${this.restURL}rawTransactions/decodeTransaction/${rawtx}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }
}

export default RawTransactions;
