import axios from 'axios';
class Transaction {
  constructor(restURL) {
    this.restURL = restURL;
  }

  burnBCHGetWHC(amount, redeemAddress = undefined) {
    let path;
    if(redeemAddress) {
      path = `${this.restURL}transaction/burnBCHGetWHC/${amount}?redeemAddress=${redeemAddress}`;
    } else {
      path = `${this.restURL}transaction/burnBCHGetWHC/${amount}`;
    }
    return axios.post(path)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  partiCrowSale(fromAddress, toAddress, amount, redeemAddress = undefined, referenceAmount = undefined) {
    let path;
    if(redeemAddress) {
      path = `${this.restURL}transaction/partiCrowSale/${fromAddress}/${toAddress}/${amount}?redeemAddress=${redeemAddress}`;
    } else if(redeemAddress && referenceAmount) {
      path = `${this.restURL}transaction/partiCrowSale/${fromAddress}/${toAddress}/${amount}?redeemAddress=${redeemAddress}&referenceAmount=${referenceAmount}`;
    } else if(referenceAmount) {
      path = `${this.restURL}transaction/partiCrowSale/${fromAddress}/${toAddress}/${amount}?referenceAmount=${referenceAmount}`;
    } else {
      path = `${this.restURL}transaction/partiCrowSale/${fromAddress}/${toAddress}/${amount}`;
    }
    return axios.post(path)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  send(fromAddress, toAddress, propertyId, amount, redeemAddress = undefined, referenceAmount = undefined) {
    let path;
    if(redeemAddress) {
      path = `${this.restURL}transaction/send/${fromAddress}/${toAddress}/${propertyId}/${amount}?redeemAddress=${redeemAddress}`;
    } else if(redeemAddress && referenceAmount) {
      path = `${this.restURL}transaction/send/${fromAddress}/${toAddress}/${propertyId}/${amount}?redeemAddress=${redeemAddress}&referenceAmount=${referenceAmount}`;
    } else if(referenceAmount) {
      path = `${this.restURL}transaction/send/${fromAddress}/${toAddress}/${propertyId}/${amount}?referenceAmount=${referenceAmount}`;
    } else {
      path = `${this.restURL}transaction/send/${fromAddress}/${toAddress}/${propertyId}/${amount}`;
    }
    return axios.post(path)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  all(fromAddress, toAddress, ecosystem, redeemAddress = undefined, referenceAmount = undefined) {
    let path;
    if(redeemAddress) {
      path = `${this.restURL}transaction/all/${fromAddress}/${toAddress}/${ecosystem}?redeemAddress=${redeemAddress}`;
    } else if(redeemAddress && referenceAmount) {
      path = `${this.restURL}transaction/all/${fromAddress}/${toAddress}/${ecosystem}?redeemAddress=${redeemAddress}&referenceAmount=${referenceAmount}`;
    } else if(referenceAmount) {
      path = `${this.restURL}transaction/all/${fromAddress}/${toAddress}/${ecosystem}?referenceAmount=${referenceAmount}`;
    } else {
      path = `${this.restURL}transaction/all/${fromAddress}/${toAddress}/${ecosystem}`;
    }
    return axios.post(path)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  changeIssuer(fromAddress, toAddress, propertyId) {
    return axios.post(`${this.restURL}transaction/changeIssuer/${fromAddress}/${toAddress}/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  closeCrowdSale(fromAddress, propertyId) {
    return axios.post(`${this.restURL}transaction/closeCrowdSale/${fromAddress}/${propertyId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  grant(fromAddress, toAddress, propertyId, amount, memo = undefined) {
    let path;
    if(memo) {
      path = `${this.restURL}transaction/grant/${fromAddress}/${toAddress}/${propertyId}/${amount}?memo=${memo}`;
    } else {
      path = `${this.restURL}transaction/grant/${fromAddress}/${toAddress}/${propertyId}/${amount}`;
    }
    return axios.post(path)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  crowdSale(fromAddress, ecosystem, propertyPricision, previousId, category, subcategory, name, url, data, propertyIdDesired, tokensPerUnit, deadline, earlyBonus, undefine, totalNumber) {
    return axios.post(`${this.restURL}transaction/crowdSale/${fromAddress}/${ecosystem}/${propertyPricision}/${previousId}/${category}/${subcategory}/${name}/${url}/${data}/${propertyIdDesired}/${tokensPerUnit}/${deadline}/${earlyBonus}/${undefine}/${totalNumber}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  fixed(fromAddress, ecosystem, propertyPricision, previousId, category, subcategory, name, url, data, totalNumber) {
    return axios.post(`${this.restURL}transaction/fixed/${fromAddress}/${ecosystem}/${propertyPricision}/${previousId}/${category}/${subcategory}/${name}/${url}/${data}/${totalNumber}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  managed(fromAddress, ecosystem, propertyPricision, previousId, category, subcategory, name, url, data) {
    return axios.post(`${this.restURL}transaction/managed/${fromAddress}/${ecosystem}/${propertyPricision}/${previousId}/${category}/${subcategory}/${name}/${url}/${data}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  rawTx(fromAddress, rawTransaction) {
    return axios.post(`${this.restURL}transaction/rawTx/${fromAddress}/${rawTransaction}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  revoke(fromAddress, propertyId, amount) {
    return axios.post(`${this.restURL}transaction/revoke/${fromAddress}/${propertyId}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }

  STO(fromAddress, propertyId, amount) {
    return axios.post(`${this.restURL}transaction/STO/${fromAddress}/${propertyId}/${amount}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return JSON.stringify(error.response.data.error.message);
    });
  }
}

export default Transaction;
