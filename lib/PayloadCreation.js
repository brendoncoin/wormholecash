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
    key: 'createPayloadBurnBCH',
    value: function createPayloadBurnBCH() {
      return _axios2.default.get(this.restURL + 'dataRetrieval/createPayloadBurnBCH').then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'createPayloadChangeIssuer',
    value: function createPayloadChangeIssuer(propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/createPayloadChangeIssuer/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'createPayloadCloseCrowdSale',
    value: function createPayloadCloseCrowdSale(propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/createPayloadCloseCrowdSale/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'createPayloadGrant',
    value: function createPayloadGrant(propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/createPayloadGrant/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'createPayloadIssuanceCrowdsale',
    value: function createPayloadIssuanceCrowdsale(ecosystem, propertyPricision, previousId, category, subcategory, name, url, data, propertyIdDesired, tokensPerUnit, deadline, earlyBonus, undefine, totalNumber) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/createPayloadIssuanceCrowdsale/' + ecosystem + '/' + propertyPricision + '/' + previousId + '/' + category + '/' + subcategory + '/' + name + '/' + url + '/' + data + '/' + propertyIdDesired + '/' + tokensPerUnit + '/' + deadline + '/' + earlyBonus + '/' + undefine + '/' + totalNumber).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'createPayloadIssuanceFixed',
    value: function createPayloadIssuanceFixed(ecosystem, propertyPricision, previousId, category, subcategory, name, amount) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/createPayloadIssuanceFixed/' + ecosystem + '/' + propertyPricision + '/' + previousId + '/' + category + '/' + subcategory + '/' + name + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'createPayloadIssuanceManaged',
    value: function createPayloadIssuanceManaged(ecosystem, propertyPricision, previousId, category, subcategory, name, data) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/createPayloadIssuanceManaged/' + ecosystem + '/' + propertyPricision + '/' + previousId + '/' + category + '/' + subcategory + '/' + name + '/' + data).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'createPayloadParticrwoSale',
    value: function createPayloadParticrwoSale(amount) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/createPayloadParticrwoSale/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'createPayloadRevoke',
    value: function createPayloadRevoke(propertyId, amount) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/createPayloadRevoke/' + propertyId + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'createPayloadSendAll',
    value: function createPayloadSendAll(ecosystem) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/createPayloadSendAll/' + ecosystem).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'createPayloadSimpleSend',
    value: function createPayloadSimpleSend(propertyId, amount) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/createPayloadSimpleSend/' + propertyId + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'createPayloadSTO',
    value: function createPayloadSTO(propertyId, amount) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/createPayloadSTO/' + propertyId + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }]);

  return PayloadCreation;
}();

exports.default = PayloadCreation;