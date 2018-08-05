import axios from 'axios';
class Transaction {
  constructor(restURL) {
    this.restURL = restURL;
  }

  burnBCHGetWHC(amount) {
    return axios.get(`${this.restURL}transaction/burnBCHGetWHC/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  partiCrowSale(fromAddress, toAddress, amount) {
    return axios.get(`${this.restURL}transaction/partiCrowSale/${fromAddress}/${toAddress}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  send(fromAddress, toAddress, propertyId, amount) {
    return axios.get(`${this.restURL}transaction/send/${fromAddress}/${toAddress}/${propertyId}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  sendAll(fromAddress, toAddress, ecosystem) {
    return axios.get(`${this.restURL}transaction/sendAll/${fromAddress}/${toAddress}/${ecosystem}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  sendChangeIssuer(fromAddress, toAddress, propertyId) {
    return axios.get(`${this.restURL}transaction/sendChangeIssuer/${fromAddress}/${toAddress}/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  sendCloseCrowdSale(fromAddress, propertyId) {
    return axios.get(`${this.restURL}transaction/sendCloseCrowdSale/${fromAddress}/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  sendGrant(fromAddress, toAddress, propertyId, amount) {
    return axios.get(`${this.restURL}transaction/sendGrant/${fromAddress}/${toAddress}/${propertyId}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  sendIssuanceCrowdSale(fromAddress, ecosystem, propertyPricision, previousId, category, subcategory, name, url, data, propertyIdDesired, tokensPerUnit, deadline, earlyBonus, undefine, totalNumber) {
    return axios.get(`${this.restURL}transaction/sendIssuanceCrowdSale/${fromAddress}/${ecosystem}/${propertyPricision}/${previousId}/${category}/${subcategory}/${name}/${url}/${data}/${propertyIdDesired}/${tokensPerUnit}/${deadline}/${earlyBonus}/${undefine}/${totalNumber}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  sendIssuanceFixed(fromAddress, ecosystem, propertyPricision, previousId, category, subcategory, name, url, data, totalNumber) {
    return axios.get(`${this.restURL}transaction/sendIssuanceCrowdSale/${fromAddress}/${ecosystem}/${propertyPricision}/${previousId}/${category}/${subcategory}/${name}/${url}/${data}/${totalNumber}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  sendIssuanceManaged(fromAddress, ecosystem, propertyPricision, previousId, category, subcategory, name, url, data) {
    return axios.get(`${this.restURL}transaction/sendIssuanceManaged/${fromAddress}/${ecosystem}/${propertyPricision}/${previousId}/${category}/${subcategory}/${name}/${url}/${data}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  sendRawTx(fromAddress, rawTransaction) {
    return axios.get(`${this.restURL}transaction/sendRawTx/${fromAddress}/${rawTransaction}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  sendRevoke(fromAddress, propertyId, amount) {
    return axios.get(`${this.restURL}transaction/sendRawTx/${fromAddress}/${propertyId}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  sendSTO(fromAddress, propertyId, amount) {
    return axios.get(`${this.restURL}transaction/sendSTO/${fromAddress}/${propertyId}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }
}

export default Transaction;
