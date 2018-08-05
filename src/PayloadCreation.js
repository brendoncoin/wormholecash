import axios from 'axios';
class PayloadCreation {
  constructor(restURL) {
    this.restURL = restURL;
  }

  burnBCH() {
    return axios.get(`${this.restURL}payloadCreation/burnBCH`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  changeIssuer(propertyId) {
    return axios.get(`${this.restURL}payloadCreation/changeIssuer/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  closeCrowdSale(propertyId) {
    return axios.get(`${this.restURL}payloadCreation/closeCrowdSale/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  grant(propertyId) {
    return axios.get(`${this.restURL}payloadCreation/grant/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  issuanceCrowdsale(ecosystem, propertyPricision, previousId, category, subcategory, name, url, data, propertyIdDesired, tokensPerUnit, deadline, earlyBonus, undefine, totalNumber) {
    return axios.get(`${this.restURL}payloadCreation/issuanceCrowdsale/${ecosystem}/${propertyPricision}/${previousId}/${category}/${subcategory}/${name}/${url}/${data}/${propertyIdDesired}/${tokensPerUnit}/${deadline}/${earlyBonus}/${undefine}/${totalNumber}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  issuanceFixed(ecosystem, propertyPricision, previousId, category, subcategory, name, amount) {
    return axios.get(`${this.restURL}payloadCreation/issuanceFixed/${ecosystem}/${propertyPricision}/${previousId}/${category}/${subcategory}/${name}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  managed(ecosystem, propertyPricision, previousId, category, subcategory, name, data) {
    return axios.get(`${this.restURL}payloadCreation/managed/${ecosystem}/${propertyPricision}/${previousId}/${category}/${subcategory}/${name}/${data}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  partiCrwoSale(amount) {
    return axios.get(`${this.restURL}payloadCreation/partiCrwoSale/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  revoke(propertyId, amount) {
    return axios.get(`${this.restURL}payloadCreation/revoke/${propertyId}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  sendAll(ecosystem) {
    return axios.get(`${this.restURL}payloadCreation/sendAll/${ecosystem}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  simpleSend(propertyId, amount) {
    return axios.get(`${this.restURL}payloadCreation/simpleSend/${propertyId}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  STO(propertyId, amount) {
    return axios.get(`${this.restURL}payloadCreation/STO/${propertyId}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }
}

export default PayloadCreation;
