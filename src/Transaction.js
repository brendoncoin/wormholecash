import axios from 'axios';
class Transaction {
  constructor(restURL) {
    this.restURL = restURL;
  }

  whcBurnBCHGetWHC(amount) {
    return axios.get(`${this.restURL}transaction/whcBurnBCHGetWHC/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcPartiCrowSale(fromAddress, toAddress, amount) {
    return axios.get(`${this.restURL}transaction/whcPartiCrowSale/${fromAddress}/${toAddress}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcSend(fromAddress, toAddress, propertyId, amount) {
    return axios.get(`${this.restURL}transaction/whcSend/${fromAddress}/${toAddress}/${propertyId}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcSendAll(fromAddress, toAddress, ecosystem) {
    return axios.get(`${this.restURL}transaction/whcSendAll/${fromAddress}/${toAddress}/${ecosystem}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcSendChangeIssuer(fromAddress, toAddress, propertyId) {
    return axios.get(`${this.restURL}transaction/whcSendChangeIssuer/${fromAddress}/${toAddress}/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcSendCloseCrowdSale(fromAddress, propertyId) {
    return axios.get(`${this.restURL}transaction/whcSendCloseCrowdSale/${fromAddress}/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcSendGrant(fromAddress, toAddress, propertyId, amount) {
    return axios.get(`${this.restURL}transaction/whcSendGrant/${fromAddress}/${toAddress}/${propertyId}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcSendIssuanceCrowdSale(fromAddress, ecosystem, propertyPricision, previousId, category, subcategory, name, url, data, propertyIdDesired, tokensPerUnit, deadline, earlyBonus, undefine, totalNumber) {
    return axios.get(`${this.restURL}transaction/whcSendIssuanceCrowdSale/${fromAddress}/${ecosystem}/${propertyPricision}/${previousId}/${category}/${subcategory}/${name}/${url}/${data}/${propertyIdDesired}/${tokensPerUnit}/${deadline}/${earlyBonus}/${undefine}/${totalNumber}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcSendIssuanceFixed(fromAddress, ecosystem, propertyPricision, previousId, category, subcategory, name, url, data, totalNumber) {
    return axios.get(`${this.restURL}transaction/whcSendIssuanceCrowdSale/${fromAddress}/${ecosystem}/${propertyPricision}/${previousId}/${category}/${subcategory}/${name}/${url}/${data}/${totalNumber}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcSendIssuanceManaged(fromAddress, ecosystem, propertyPricision, previousId, category, subcategory, name, url, data) {
    return axios.get(`${this.restURL}transaction/whcSendIssuanceManaged/${fromAddress}/${ecosystem}/${propertyPricision}/${previousId}/${category}/${subcategory}/${name}/${url}/${data}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcSendRawTx(fromAddress, rawTransaction) {
    return axios.get(`${this.restURL}transaction/whcSendRawTx/${fromAddress}/${rawTransaction}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcSendRevoke(fromAddress, propertyId, amount) {
    return axios.get(`${this.restURL}transaction/whcSendRawTx/${fromAddress}/${propertyId}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcSendSTO(fromAddress, propertyId, amount) {
    return axios.get(`${this.restURL}transaction/whcSendSTO/${fromAddress}/${propertyId}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }
}

export default Transaction;
