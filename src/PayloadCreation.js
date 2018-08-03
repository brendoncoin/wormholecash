import axios from 'axios';
class PayloadCreation {
  constructor(restURL) {
    this.restURL = restURL;
  }

  whcCreatePayloadBurnBCH() {
    return axios.get(`${this.restURL}dataRetrieval/whcCreatePayloadBurnBCH`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcCreatePayloadChangeIssuer(propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/whcCreatePayloadChangeIssuer/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcCreatePayloadCloseCrowdSale(propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/whcCreatePayloadCloseCrowdSale/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcCreatePayloadGrant(propertyId) {
    return axios.get(`${this.restURL}dataRetrieval/whcCreatePayloadGrant/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcCreatePayloadIssuanceCrowdsale(ecosystem, propertyPricision, previousId, category, subcategory, name, url, data, propertyIdDesired, tokensPerUnit, deadline, earlyBonus, undefine, totalNumber) {
    return axios.get(`${this.restURL}dataRetrieval/whcCreatePayloadIssuanceCrowdsale/${ecosystem}/${propertyPricision}/${previousId}/${category}/${subcategory}/${name}/${url}/${data}/${propertyIdDesired}/${tokensPerUnit}/${deadline}/${earlyBonus}/${undefine}/${totalNumber}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcCreatePayloadIssuanceFixed(ecosystem, propertyPricision, previousId, category, subcategory, name, amount) {
    return axios.get(`${this.restURL}dataRetrieval/whcCreatePayloadIssuanceFixed/${ecosystem}/${propertyPricision}/${previousId}/${category}/${subcategory}/${name}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcCreatePayloadIssuanceManaged(ecosystem, propertyPricision, previousId, category, subcategory, name, data) {
    return axios.get(`${this.restURL}dataRetrieval/whcCreatePayloadIssuanceManaged/${ecosystem}/${propertyPricision}/${previousId}/${category}/${subcategory}/${name}/${data}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcCreatePayloadParticrwoSale(amount) {
    return axios.get(`${this.restURL}dataRetrieval/whcCreatePayloadParticrwoSale/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcCreatePayloadRevoke(propertyId, amount) {
    return axios.get(`${this.restURL}dataRetrieval/whcCreatePayloadRevoke/${propertyId}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcCreatePayloadSendAll(ecosystem) {
    return axios.get(`${this.restURL}dataRetrieval/whcCreatePayloadSendAll/${ecosystem}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcCreatePayloadSimpleSend(propertyId, amount) {
    return axios.get(`${this.restURL}dataRetrieval/whcCreatePayloadSimpleSend/${propertyId}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  whcCreatePayloadSTO(propertyId, amount) {
    return axios.get(`${this.restURL}dataRetrieval/whcCreatePayloadSTO/${propertyId}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }
}

export default PayloadCreation;
