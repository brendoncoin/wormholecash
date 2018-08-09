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
    return axios.post(`${this.restURL}payloadCreation/changeIssuer/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  closeCrowdSale(propertyId) {
    return axios.post(`${this.restURL}payloadCreation/closeCrowdSale/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  grant(propertyId, amount, memo = '') {
    let path;
    if(memo !== '') {
      path = `${this.restURL}payloadCreation/grant/${propertyId}/${amount}?memo=${memo}`;
    } else {
      path = `${this.restURL}payloadCreation/grant/${propertyId}/${amount}`;
    }
    return axios.post(path)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  crowdsale(ecosystem, propertyPricision, previousId, category, subcategory, name, url, data, propertyIdDesired, tokensPerUnit, deadline, earlyBonus, undefine, totalNumber) {
    return axios.post(`${this.restURL}payloadCreation/crowdsale/${ecosystem}/${propertyPricision}/${previousId}/${category}/${subcategory}/${name}/${url}/${data}/${propertyIdDesired}/${tokensPerUnit}/${deadline}/${earlyBonus}/${undefine}/${totalNumber}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  fixed(ecosystem, propertyPricision, previousId, category, subcategory, name, url, data, amount) {
    return axios.post(`${this.restURL}payloadCreation/fixed/${ecosystem}/${propertyPricision}/${previousId}/${category}/${subcategory}/${name}/${url}/${data}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  managed(ecosystem, propertyPricision, previousId, category, subcategory, name, url, data) {
    return axios.post(`${this.restURL}payloadCreation/managed/${ecosystem}/${propertyPricision}/${previousId}/${category}/${subcategory}/${name}/${url}/${data}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  partiCrwoSale(amount) {
    return axios.post(`${this.restURL}payloadCreation/partiCrwoSale/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  revoke(propertyId, amount) {
    return axios.post(`${this.restURL}payloadCreation/revoke/${propertyId}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  sendAll(ecosystem) {
    return axios.post(`${this.restURL}payloadCreation/sendAll/${ecosystem}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  simpleSend(propertyId, amount) {
    return axios.post(`${this.restURL}payloadCreation/simpleSend/${propertyId}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  STO(propertyId, amount, distributionProperty = undefined) {
    let path;
    if(distributionProperty !== undefined) {
      path = `${this.restURL}payloadCreation/STO/${propertyId}/${amount}?distributionProperty=${distributionProperty}`;
    } else {
      path = `${this.restURL}payloadCreation/STO/${propertyId}/${amount}`;
    }
    return axios.post(path)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }
}

export default PayloadCreation;
