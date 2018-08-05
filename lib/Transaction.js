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
    key: 'whcBurnBCHGetWHC',
    value: function whcBurnBCHGetWHC(amount) {
      return _axios2.default.get(this.restURL + 'transaction/whcBurnBCHGetWHC/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcPartiCrowSale',
    value: function whcPartiCrowSale(fromAddress, toAddress, amount) {
      return _axios2.default.get(this.restURL + 'transaction/whcPartiCrowSale/' + fromAddress + '/' + toAddress + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcSend',
    value: function whcSend(fromAddress, toAddress, propertyId, amount) {
      return _axios2.default.get(this.restURL + 'transaction/whcSend/' + fromAddress + '/' + toAddress + '/' + propertyId + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcSendAll',
    value: function whcSendAll(fromAddress, toAddress, ecosystem) {
      return _axios2.default.get(this.restURL + 'transaction/whcSendAll/' + fromAddress + '/' + toAddress + '/' + ecosystem).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcSendChangeIssuer',
    value: function whcSendChangeIssuer(fromAddress, toAddress, propertyId) {
      return _axios2.default.get(this.restURL + 'transaction/whcSendChangeIssuer/' + fromAddress + '/' + toAddress + '/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcSendCloseCrowdSale',
    value: function whcSendCloseCrowdSale(fromAddress, propertyId) {
      return _axios2.default.get(this.restURL + 'transaction/whcSendCloseCrowdSale/' + fromAddress + '/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcSendGrant',
    value: function whcSendGrant(fromAddress, toAddress, propertyId, amount) {
      return _axios2.default.get(this.restURL + 'transaction/whcSendGrant/' + fromAddress + '/' + toAddress + '/' + propertyId + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcSendIssuanceCrowdSale',
    value: function whcSendIssuanceCrowdSale(fromAddress, ecosystem, propertyPricision, previousId, category, subcategory, name, url, data, propertyIdDesired, tokensPerUnit, deadline, earlyBonus, undefine, totalNumber) {
      return _axios2.default.get(this.restURL + 'transaction/whcSendIssuanceCrowdSale/' + fromAddress + '/' + ecosystem + '/' + propertyPricision + '/' + previousId + '/' + category + '/' + subcategory + '/' + name + '/' + url + '/' + data + '/' + propertyIdDesired + '/' + tokensPerUnit + '/' + deadline + '/' + earlyBonus + '/' + undefine + '/' + totalNumber).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcSendIssuanceFixed',
    value: function whcSendIssuanceFixed(fromAddress, ecosystem, propertyPricision, previousId, category, subcategory, name, url, data, totalNumber) {
      return _axios2.default.get(this.restURL + 'transaction/whcSendIssuanceCrowdSale/' + fromAddress + '/' + ecosystem + '/' + propertyPricision + '/' + previousId + '/' + category + '/' + subcategory + '/' + name + '/' + url + '/' + data + '/' + totalNumber).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcSendIssuanceManaged',
    value: function whcSendIssuanceManaged(fromAddress, ecosystem, propertyPricision, previousId, category, subcategory, name, url, data) {
      return _axios2.default.get(this.restURL + 'transaction/whcSendIssuanceManaged/' + fromAddress + '/' + ecosystem + '/' + propertyPricision + '/' + previousId + '/' + category + '/' + subcategory + '/' + name + '/' + url + '/' + data).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcSendRawTx',
    value: function whcSendRawTx(fromAddress, rawTransaction) {
      return _axios2.default.get(this.restURL + 'transaction/whcSendRawTx/' + fromAddress + '/' + rawTransaction).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcSendRevoke',
    value: function whcSendRevoke(fromAddress, propertyId, amount) {
      return _axios2.default.get(this.restURL + 'transaction/whcSendRawTx/' + fromAddress + '/' + propertyId + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcSendSTO',
    value: function whcSendSTO(fromAddress, propertyId, amount) {
      return _axios2.default.get(this.restURL + 'transaction/whcSendSTO/' + fromAddress + '/' + propertyId + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }]);

  return Transaction;
}();

exports.default = Transaction;