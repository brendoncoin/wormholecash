import axios from 'axios';
class RawTransactions {
  constructor(restURL) {
    this.restURL = restURL;
  }

  change(rawtx, prevTxs, destination, fee) {
    return axios.get(`${this.restURL}rawTransactions/change/${rawtx}/${prevTxs}/${destination}/${fee}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  input(rawtx, txid, n) {
    return axios.get(`${this.restURL}rawTransactions/input/${rawtx}/${txid}/${n}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  opReturn(rawtx, payload) {
    return axios.get(`${this.restURL}rawTransactions/opReturn/${rawtx}/${payload}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  reference(rawtx, destination, amount) {
    return axios.get(`${this.restURL}rawTransactions/reference/${rawtx}/${destination}/${amount}`)
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
