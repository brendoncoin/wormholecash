import axios from 'axios';
class PayloadCreation {
  constructor(restURL) {
    this.restURL = restURL;
  }

  createPayloadBurnBCH() {
    return axios.get(`${this.restURL}dataRetrieval/createPayloadBurnBCH`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  createPayloadChangeIssuer(propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/createPayloadChangeIssuer/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  createPayloadCloseCrowdSale(propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/createPayloadCloseCrowdSale/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  createPayloadGrant(propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/createPayloadGrant/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  createPayloadIssuanceCrowdsale(ecosystem, propertyPricision, previousId, category, subcategory, name, url, data, propertyIdDesired, tokensPerUnit, deadline, earlyBonus, undefine, totalNumber) {
    return axios.get(`${this.restURL}dataRetrieval/createPayloadIssuanceCrowdsale/${ecosystem}/${propertyPricision}/${previousId}/${category}/${subcategory}/${name}/${url}/${data}/${propertyIdDesired}/${tokensPerUnit}/${deadline}/${earlyBonus}/${undefine}/${totalNumber}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  createPayloadIssuanceFixed(ecosystem, propertyPricision, previousId, category, subcategory, name, amount) {
    return axios.get(`${this.restURL}dataRetrieval/createPayloadIssuanceFixed/${ecosystem}/${propertyPricision}/${previousId}/${category}/${subcategory}/${name}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  createPayloadIssuanceManaged(ecosystem, propertyPricision, previousId, category, subcategory, name, data) {
    return axios.get(`${this.restURL}dataRetrieval/createPayloadIssuanceManaged/${ecosystem}/${propertyPricision}/${previousId}/${category}/${subcategory}/${name}/${data}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  createPayloadParticrwoSale(amount) {
    return axios.get(`${this.restURL}dataRetrieval/createPayloadParticrwoSale/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  createPayloadRevoke(propertyId, amount) {
    return axios.get(`${this.restURL}dataRetrieval/createPayloadRevoke/${propertyId}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  createPayloadSendAll(ecosystem) {
    return axios.get(`${this.restURL}dataRetrieval/createPayloadSendAll/${ecosystem}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  createPayloadSimpleSend(propertyId, amount) {
    return axios.get(`${this.restURL}dataRetrieval/createPayloadSimpleSend/${propertyId}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  createPayloadSTO(propertyId, amount) {
    return axios.get(`${this.restURL}dataRetrieval/createPayloadSTO/${propertyId}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }
}

export default PayloadCreation;
