'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PayloadCreation = function () {
  function PayloadCreation(restURL) {
    _classCallCheck(this, PayloadCreation);

    this.restURL = restURL;
  }

  _createClass(PayloadCreation, [{
    key: 'burnBCH',
    value: function burnBCH() {
      return _axios2.default.get(this.restURL + 'payloadCreation/burnBCH').then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'changeIssuer',
    value: function changeIssuer(propertyId) {
      return _axios2.default.post(this.restURL + 'payloadCreation/changeIssuer/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'closeCrowdSale',
    value: function closeCrowdSale(propertyId) {
      return _axios2.default.post(this.restURL + 'payloadCreation/closeCrowdSale/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'grant',
    value: function grant(propertyId, amount) {
      var memo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      var path = void 0;
      if (memo !== '') {
        path = this.restURL + 'payloadCreation/grant/' + propertyId + '/' + amount + '?memo=' + memo;
      } else {
        path = this.restURL + 'payloadCreation/grant/' + propertyId + '/' + amount;
      }
      return _axios2.default.post(path).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'issuanceCrowdsale',
    value: function issuanceCrowdsale(ecosystem, propertyPricision, previousId, category, subcategory, name, url, data, propertyIdDesired, tokensPerUnit, deadline, earlyBonus, undefine, totalNumber) {
      return _axios2.default.post(this.restURL + 'payloadCreation/issuanceCrowdsale/' + ecosystem + '/' + propertyPricision + '/' + previousId + '/' + category + '/' + subcategory + '/' + name + '/' + url + '/' + data + '/' + propertyIdDesired + '/' + tokensPerUnit + '/' + deadline + '/' + earlyBonus + '/' + undefine + '/' + totalNumber).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'issuanceFixed',
    value: function issuanceFixed(ecosystem, propertyPricision, previousId, category, subcategory, name, amount) {
      return _axios2.default.post(this.restURL + 'payloadCreation/issuanceFixed/' + ecosystem + '/' + propertyPricision + '/' + previousId + '/' + category + '/' + subcategory + '/' + name + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'managed',
    value: function managed(ecosystem, propertyPricision, previousId, category, subcategory, name, data) {
      return _axios2.default.post(this.restURL + 'payloadCreation/managed/' + ecosystem + '/' + propertyPricision + '/' + previousId + '/' + category + '/' + subcategory + '/' + name + '/' + data).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'partiCrwoSale',
    value: function partiCrwoSale(amount) {
      return _axios2.default.post(this.restURL + 'payloadCreation/partiCrwoSale/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'revoke',
    value: function revoke(propertyId, amount) {
      return _axios2.default.post(this.restURL + 'payloadCreation/revoke/' + propertyId + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'sendAll',
    value: function sendAll(ecosystem) {
      return _axios2.default.post(this.restURL + 'payloadCreation/sendAll/' + ecosystem).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'simpleSend',
    value: function simpleSend(propertyId, amount) {
      return _axios2.default.post(this.restURL + 'payloadCreation/simpleSend/' + propertyId + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'STO',
    value: function STO(propertyId, amount) {
      return _axios2.default.post(this.restURL + 'payloadCreation/STO/' + propertyId + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }]);

  return PayloadCreation;
}();

exports.default = PayloadCreation;