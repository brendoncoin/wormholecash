import axios from 'axios';
class RawTransactions {
  constructor(restURL) {
    this.restURL = restURL;
  }

  change(rawtx, prevTxs, destination, fee, position = undefined) {
    let path;
    if(position) {
      path = `${this.restURL}rawTransactions/change/${rawtx}/${JSON.stringify(prevTxs)}/${destination}/${fee}?position=${position}`;
    } else {
      path = `${this.restURL}rawTransactions/change/${rawtx}/${JSON.stringify(prevTxs)}/${destination}/${fee}`;
    }
    return axios.post(path)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  input(rawtx, txid, n) {
    return axios.post(`${this.restURL}rawTransactions/input/${rawtx}/${txid}/${n}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  opReturn(rawtx, payload) {
    return axios.post(`${this.restURL}rawTransactions/opReturn/${rawtx}/${payload}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  reference(rawtx, destination, amount) {
    let path;
    if(amount) {
      path = `${this.restURL}rawTransactions/reference/${rawtx}/${destination}?amount=${amount}`;
    } else {
      path = `${this.restURL}rawTransactions/reference/${rawtx}/${destination}`;
    }
    return axios.post(path)
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
