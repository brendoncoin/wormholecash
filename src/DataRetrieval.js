import axios from 'axios';
class DataRetrieval {
  constructor(restURL) {
    this.restURL = restURL;
  }

  whcGetAllBalancesForAddress(address) {
    return axios.get(`${this.restURL}dataRetrieval/whcGetAllBalancesForAddress/${address}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcGetAllBalancesForId(propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/whcGetAllBalancesForId/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcGetBalance(address, propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/whcGetBalance/${address}/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcGetBalancesHash(propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/whcGetBalancesHash/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcGetCrowdSale(propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/whcGetCrowdSale/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcGetCurrentConsensusHash() {
    return axios.get(`${this.restURL}dataRetrieval/whcGetCurrentConsensusHash`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcGetFeeShare() {
    return axios.get(`${this.restURL}dataRetrieval/whcGetFeeShare`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcGetGrants(propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/whcGetGrants/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcGetInfo() {
    return axios.get(`${this.restURL}dataRetrieval/whcGetInfo`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcGetPayload(txid) {
    return axios.get(`${this.restURL}dataRetrieval/whcGetPayload/${txid}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcGetProperty(propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/whcGetProperty/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcGetSeedBlocks(startBlock, endBlock) {
    return axios.get(`${this.restURL}dataRetrieval/whcGetSeedBlocks/${startBlock}/${endBlock}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcGetSto(txid, recipientFilter) {
    return axios.get(`${this.restURL}dataRetrieval/whcGetSto/${txid}/${recipientFilter}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcGetTransaction(txid) {
    return axios.get(`${this.restURL}dataRetrieval/whcGetTransaction/${txid}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcListBlockTransactions(index) {
    return axios.get(`${this.restURL}dataRetrieval/whcListBlockTransactions/${index}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcListPendingTransactions(address) {
    return axios.get(`${this.restURL}dataRetrieval/whcListPendingTransactions/${address}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcListProperties() {
    return axios.get(`${this.restURL}dataRetrieval/whcListPendingTransactions`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcListTransactions() {
    return axios.get(`${this.restURL}dataRetrieval/whcListTransactions`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }
}

export default DataRetrieval;
