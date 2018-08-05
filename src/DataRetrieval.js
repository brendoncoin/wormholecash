import axios from 'axios';
class DataRetrieval {
  constructor(restURL) {
    this.restURL = restURL;
  }

  getAllBalancesForAddress(address) {
    return axios.get(`${this.restURL}dataRetrieval/getAllBalancesForAddress/${address}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  getAllBalancesForId(propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/getAllBalancesForId/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  getBalance(address, propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/getBalance/${address}/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  getBalancesHash(propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/getBalancesHash/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  getCrowdSale(propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/getCrowdSale/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  getCurrentConsensusHash() {
    return axios.get(`${this.restURL}dataRetrieval/getCurrentConsensusHash`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  getFeeShare() {
    return axios.get(`${this.restURL}dataRetrieval/getFeeShare`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  getGrants(propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/getGrants/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  getInfo() {
    return axios.get(`${this.restURL}dataRetrieval/getInfo`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  getPayload(txid) {
    return axios.get(`${this.restURL}dataRetrieval/getPayload/${txid}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  getProperty(propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/getProperty/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  getSeedBlocks(startBlock, endBlock) {
    return axios.get(`${this.restURL}dataRetrieval/getSeedBlocks/${startBlock}/${endBlock}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  getSTO(txid, recipientFilter) {
    return axios.get(`${this.restURL}dataRetrieval/getSTO/${txid}/${recipientFilter}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  getTransaction(txid) {
    return axios.get(`${this.restURL}dataRetrieval/getTransaction/${txid}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  listBlockTransactions(index) {
    return axios.get(`${this.restURL}dataRetrieval/listBlockTransactions/${index}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  listPendingTransactions(address) {
    return axios.get(`${this.restURL}dataRetrieval/listPendingTransactions/${address}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  listProperties() {
    return axios.get(`${this.restURL}dataRetrieval/listPendingTransactions`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  listTransactions() {
    return axios.get(`${this.restURL}dataRetrieval/listTransactions`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }
}

export default DataRetrieval;
