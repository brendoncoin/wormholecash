'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transaction = function () {
  function Transaction(restURL) {
    _classCallCheck(this, Transaction);

    this.restURL = restURL;
  }

  _createClass(Transaction, [{
    key: 'burnBCHGetWHC',
    value: function burnBCHGetWHC(amount) {
      var redeemAddress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      var path = void 0;
      if (redeemAddress) {
        path = this.restURL + 'transaction/burnBCHGetWHC/' + amount + '?redeemAddress=' + redeemAddress;
      } else {
        path = this.restURL + 'transaction/burnBCHGetWHC/' + amount;
      }
      return _axios2.default.post(path).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'partiCrowSale',
    value: function partiCrowSale(fromAddress, toAddress, amount) {
      var redeemAddress = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
      var referenceAmount = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

      var path = void 0;
      if (redeemAddress) {
        path = this.restURL + 'transaction/partiCrowSale/' + fromAddress + '/' + toAddress + '/' + amount + '?redeemAddress=' + redeemAddress;
      } else if (redeemAddress && referenceAmount) {
        path = this.restURL + 'transaction/partiCrowSale/' + fromAddress + '/' + toAddress + '/' + amount + '?redeemAddress=' + redeemAddress + '&referenceAmount=' + referenceAmount;
      } else if (referenceAmount) {
        path = this.restURL + 'transaction/partiCrowSale/' + fromAddress + '/' + toAddress + '/' + amount + '?referenceAmount=' + referenceAmount;
      } else {
        path = this.restURL + 'transaction/partiCrowSale/' + fromAddress + '/' + toAddress + '/' + amount;
      }
      return _axios2.default.post(path).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'send',
    value: function send(fromAddress, toAddress, propertyId, amount) {
      var redeemAddress = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;
      var referenceAmount = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : undefined;

      var path = void 0;
      if (redeemAddress) {
        path = this.restURL + 'transaction/send/' + fromAddress + '/' + toAddress + '/' + propertyId + '/' + amount + '?redeemAddress=' + redeemAddress;
      } else if (redeemAddress && referenceAmount) {
        path = this.restURL + 'transaction/send/' + fromAddress + '/' + toAddress + '/' + propertyId + '/' + amount + '?redeemAddress=' + redeemAddress + '&referenceAmount=' + referenceAmount;
      } else if (referenceAmount) {
        path = this.restURL + 'transaction/send/' + fromAddress + '/' + toAddress + '/' + propertyId + '/' + amount + '?referenceAmount=' + referenceAmount;
      } else {
        path = this.restURL + 'transaction/send/' + fromAddress + '/' + toAddress + '/' + propertyId + '/' + amount;
      }
      return _axios2.default.post(path).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'all',
    value: function all(fromAddress, toAddress, ecosystem) {
      var redeemAddress = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
      var referenceAmount = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

      var path = void 0;
      if (redeemAddress) {
        path = this.restURL + 'transaction/all/' + fromAddress + '/' + toAddress + '/' + ecosystem + '?redeemAddress=' + redeemAddress;
      } else if (redeemAddress && referenceAmount) {
        path = this.restURL + 'transaction/all/' + fromAddress + '/' + toAddress + '/' + ecosystem + '?redeemAddress=' + redeemAddress + '&referenceAmount=' + referenceAmount;
      } else if (referenceAmount) {
        path = this.restURL + 'transaction/all/' + fromAddress + '/' + toAddress + '/' + ecosystem + '?referenceAmount=' + referenceAmount;
      } else {
        path = this.restURL + 'transaction/all/' + fromAddress + '/' + toAddress + '/' + ecosystem;
      }
      return _axios2.default.post(path).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'changeIssuer',
    value: function changeIssuer(fromAddress, toAddress, propertyId) {
      return _axios2.default.post(this.restURL + 'transaction/changeIssuer/' + fromAddress + '/' + toAddress + '/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'closeCrowdSale',
    value: function closeCrowdSale(fromAddress, propertyId) {
      return _axios2.default.post(this.restURL + 'transaction/closeCrowdSale/' + fromAddress + '/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'grant',
    value: function grant(fromAddress, toAddress, propertyId, amount) {
      var memo = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

      var path = void 0;
      if (memo) {
        path = this.restURL + 'transaction/grant/' + fromAddress + '/' + toAddress + '/' + propertyId + '/' + amount + '?memo=' + memo;
      } else {
        path = this.restURL + 'transaction/grant/' + fromAddress + '/' + toAddress + '/' + propertyId + '/' + amount;
      }
      return _axios2.default.post(path).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'crowdSale',
    value: function crowdSale(fromAddress, ecosystem, propertyPricision, previousId, category, subcategory, name, url, data, propertyIdDesired, tokensPerUnit, deadline, earlyBonus, undefine, totalNumber) {
      return _axios2.default.post(this.restURL + 'transaction/crowdSale/' + fromAddress + '/' + ecosystem + '/' + propertyPricision + '/' + previousId + '/' + category + '/' + subcategory + '/' + name + '/' + url + '/' + data + '/' + propertyIdDesired + '/' + tokensPerUnit + '/' + deadline + '/' + earlyBonus + '/' + undefine + '/' + totalNumber).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'fixed',
    value: function fixed(fromAddress, ecosystem, propertyPricision, previousId, category, subcategory, name, url, data, totalNumber) {
      return _axios2.default.post(this.restURL + 'transaction/fixed/' + fromAddress + '/' + ecosystem + '/' + propertyPricision + '/' + previousId + '/' + category + '/' + subcategory + '/' + name + '/' + url + '/' + data + '/' + totalNumber).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'managed',
    value: function managed(fromAddress, ecosystem, propertyPricision, previousId, category, subcategory, name, url, data) {
      return _axios2.default.post(this.restURL + 'transaction/managed/' + fromAddress + '/' + ecosystem + '/' + propertyPricision + '/' + previousId + '/' + category + '/' + subcategory + '/' + name + '/' + url + '/' + data).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'rawTx',
    value: function rawTx(fromAddress, rawTransaction) {
      return _axios2.default.post(this.restURL + 'transaction/rawTx/' + fromAddress + '/' + rawTransaction).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'revoke',
    value: function revoke(fromAddress, propertyId, amount) {
      return _axios2.default.post(this.restURL + 'transaction/revoke/' + fromAddress + '/' + propertyId + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'STO',
    value: function STO(fromAddress, propertyId, amount) {
      return _axios2.default.post(this.restURL + 'transaction/STO/' + fromAddress + '/' + propertyId + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }]);

  return Transaction;
}();

exports.default = Transaction;