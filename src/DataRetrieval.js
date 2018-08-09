import axios from 'axios';
class DataRetrieval {
  constructor(restURL) {
    this.restURL = restURL;
  }

  balancesForAddress(address) {
    return axios.get(`${this.restURL}dataRetrieval/balancesForAddress/${address}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  balancesForId(propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/balancesForId/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  balance(address, propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/balance/${address}/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  balancesHash(propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/balancesHash/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  crowdSale(propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/crowdSale/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  currentConsensusHash() {
    return axios.get(`${this.restURL}dataRetrieval/currentConsensusHash`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  feeShare() {
    return axios.get(`${this.restURL}dataRetrieval/feeShare`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  grants(propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/grants/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  info() {
    return axios.get(`${this.restURL}dataRetrieval/info`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  payload(txid) {
    return axios.get(`${this.restURL}dataRetrieval/payload/${txid}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  property(propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/property/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  seedBlocks(startBlock, endBlock) {
    return axios.get(`${this.restURL}dataRetrieval/seedBlocks/${startBlock}/${endBlock}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  STO(txid, recipientFilter) {
    return axios.get(`${this.restURL}dataRetrieval/STO/${txid}/${recipientFilter}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  transaction(txid) {
    return axios.get(`${this.restURL}dataRetrieval/transaction/${txid}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  blockTransactions(index) {
    return axios.get(`${this.restURL}dataRetrieval/blockTransactions/${index}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  pendingTransactions(address) {
    let path = `${this.restURL}dataRetrieval/pendingTransactions`;
    if(address) {
      path = `${this.restURL}dataRetrieval/pendingTransactions?address=${address}`
    }
    return axios.get(path)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  properties() {
    return axios.get(`${this.restURL}dataRetrieval/properties`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  transactions() {
    return axios.get(`${this.restURL}transactions/listTransactions`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }
}

export default DataRetrieval;
