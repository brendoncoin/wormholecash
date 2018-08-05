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
      return _axios2.default.get(this.restURL + 'transaction/burnBCHGetWHC/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'partiCrowSale',
    value: function partiCrowSale(fromAddress, toAddress, amount) {
      return _axios2.default.get(this.restURL + 'transaction/partiCrowSale/' + fromAddress + '/' + toAddress + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'send',
    value: function send(fromAddress, toAddress, propertyId, amount) {
      return _axios2.default.get(this.restURL + 'transaction/send/' + fromAddress + '/' + toAddress + '/' + propertyId + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'sendAll',
    value: function sendAll(fromAddress, toAddress, ecosystem) {
      return _axios2.default.get(this.restURL + 'transaction/sendAll/' + fromAddress + '/' + toAddress + '/' + ecosystem).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'sendChangeIssuer',
    value: function sendChangeIssuer(fromAddress, toAddress, propertyId) {
      return _axios2.default.get(this.restURL + 'transaction/sendChangeIssuer/' + fromAddress + '/' + toAddress + '/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'sendCloseCrowdSale',
    value: function sendCloseCrowdSale(fromAddress, propertyId) {
      return _axios2.default.get(this.restURL + 'transaction/sendCloseCrowdSale/' + fromAddress + '/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'sendGrant',
    value: function sendGrant(fromAddress, toAddress, propertyId, amount) {
      return _axios2.default.get(this.restURL + 'transaction/sendGrant/' + fromAddress + '/' + toAddress + '/' + propertyId + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'sendIssuanceCrowdSale',
    value: function sendIssuanceCrowdSale(fromAddress, ecosystem, propertyPricision, previousId, category, subcategory, name, url, data, propertyIdDesired, tokensPerUnit, deadline, earlyBonus, undefine, totalNumber) {
      return _axios2.default.get(this.restURL + 'transaction/sendIssuanceCrowdSale/' + fromAddress + '/' + ecosystem + '/' + propertyPricision + '/' + previousId + '/' + category + '/' + subcategory + '/' + name + '/' + url + '/' + data + '/' + propertyIdDesired + '/' + tokensPerUnit + '/' + deadline + '/' + earlyBonus + '/' + undefine + '/' + totalNumber).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'sendIssuanceFixed',
    value: function sendIssuanceFixed(fromAddress, ecosystem, propertyPricision, previousId, category, subcategory, name, url, data, totalNumber) {
      return _axios2.default.get(this.restURL + 'transaction/sendIssuanceCrowdSale/' + fromAddress + '/' + ecosystem + '/' + propertyPricision + '/' + previousId + '/' + category + '/' + subcategory + '/' + name + '/' + url + '/' + data + '/' + totalNumber).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'sendIssuanceManaged',
    value: function sendIssuanceManaged(fromAddress, ecosystem, propertyPricision, previousId, category, subcategory, name, url, data) {
      return _axios2.default.get(this.restURL + 'transaction/sendIssuanceManaged/' + fromAddress + '/' + ecosystem + '/' + propertyPricision + '/' + previousId + '/' + category + '/' + subcategory + '/' + name + '/' + url + '/' + data).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'sendRawTx',
    value: function sendRawTx(fromAddress, rawTransaction) {
      return _axios2.default.get(this.restURL + 'transaction/sendRawTx/' + fromAddress + '/' + rawTransaction).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'sendRevoke',
    value: function sendRevoke(fromAddress, propertyId, amount) {
      return _axios2.default.get(this.restURL + 'transaction/sendRawTx/' + fromAddress + '/' + propertyId + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'sendSTO',
    value: function sendSTO(fromAddress, propertyId, amount) {
      return _axios2.default.get(this.restURL + 'transaction/sendSTO/' + fromAddress + '/' + propertyId + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }]);

  return Transaction;
}();

exports.default = Transaction;