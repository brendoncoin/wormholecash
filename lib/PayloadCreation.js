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
    key: 'whcCreatePayloadBurnBCH',
    value: function whcCreatePayloadBurnBCH() {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcCreatePayloadBurnBCH').then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcCreatePayloadChangeIssuer',
    value: function whcCreatePayloadChangeIssuer(propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcCreatePayloadChangeIssuer/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcCreatePayloadCloseCrowdSale',
    value: function whcCreatePayloadCloseCrowdSale(propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcCreatePayloadCloseCrowdSale/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcCreatePayloadGrant',
    value: function whcCreatePayloadGrant(propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcCreatePayloadGrant/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcCreatePayloadIssuanceCrowdsale',
    value: function whcCreatePayloadIssuanceCrowdsale(ecosystem, propertyPricision, previousId, category, subcategory, name, url, data, propertyIdDesired, tokensPerUnit, deadline, earlyBonus, undefine, totalNumber) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcCreatePayloadIssuanceCrowdsale/' + ecosystem + '/' + propertyPricision + '/' + previousId + '/' + category + '/' + subcategory + '/' + name + '/' + url + '/' + data + '/' + propertyIdDesired + '/' + tokensPerUnit + '/' + deadline + '/' + earlyBonus + '/' + undefine + '/' + totalNumber).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcCreatePayloadIssuanceFixed',
    value: function whcCreatePayloadIssuanceFixed(ecosystem, propertyPricision, previousId, category, subcategory, name, amount) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcCreatePayloadIssuanceFixed/' + ecosystem + '/' + propertyPricision + '/' + previousId + '/' + category + '/' + subcategory + '/' + name + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcCreatePayloadIssuanceManaged',
    value: function whcCreatePayloadIssuanceManaged(ecosystem, propertyPricision, previousId, category, subcategory, name, data) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcCreatePayloadIssuanceManaged/' + ecosystem + '/' + propertyPricision + '/' + previousId + '/' + category + '/' + subcategory + '/' + name + '/' + data).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcCreatePayloadParticrwoSale',
    value: function whcCreatePayloadParticrwoSale(amount) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcCreatePayloadParticrwoSale/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcCreatePayloadRevoke',
    value: function whcCreatePayloadRevoke(propertyId, amount) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcCreatePayloadRevoke/' + propertyId + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcCreatePayloadSendAll',
    value: function whcCreatePayloadSendAll(ecosystem) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcCreatePayloadSendAll/' + ecosystem).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcCreatePayloadSimpleSend',
    value: function whcCreatePayloadSimpleSend(propertyId, amount) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcCreatePayloadSimpleSend/' + propertyId + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcCreatePayloadSTO',
    value: function whcCreatePayloadSTO(propertyId, amount) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcCreatePayloadSTO/' + propertyId + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }]);

  return PayloadCreation;
}();

exports.default = PayloadCreation;