'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataRetrieval = function () {
  function DataRetrieval(restURL) {
    _classCallCheck(this, DataRetrieval);

    this.restURL = restURL;
  }

  _createClass(DataRetrieval, [{
    key: 'whcGetAllBalancesForAddress',
    value: function whcGetAllBalancesForAddress(address) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcGetAllBalancesForAddress/' + address).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcGetAllBalancesForId',
    value: function whcGetAllBalancesForId(propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcGetAllBalancesForId/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcGetBalance',
    value: function whcGetBalance(address, propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcGetBalance/' + address + '/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcGetBalancesHash',
    value: function whcGetBalancesHash(propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcGetBalancesHash/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcGetCrowdSale',
    value: function whcGetCrowdSale(propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcGetCrowdSale/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcGetCurrentConsensusHash',
    value: function whcGetCurrentConsensusHash() {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcGetCurrentConsensusHash').then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcGetFeeShare',
    value: function whcGetFeeShare() {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcGetFeeShare').then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcGetGrants',
    value: function whcGetGrants(propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcGetGrants/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcGetInfo',
    value: function whcGetInfo() {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcGetInfo').then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcGetPayload',
    value: function whcGetPayload(txid) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcGetPayload/' + txid).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcGetProperty',
    value: function whcGetProperty(propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcGetProperty/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcGetSeedBlocks',
    value: function whcGetSeedBlocks(startBlock, endBlock) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcGetSeedBlocks/' + startBlock + '/' + endBlock).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcGetSTO',
    value: function whcGetSTO(txid, recipientFilter) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcGetSTO/' + txid + '/' + recipientFilter).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcGetTransaction',
    value: function whcGetTransaction(txid) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcGetTransaction/' + txid).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcListBlockTransactions',
    value: function whcListBlockTransactions(index) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcListBlockTransactions/' + index).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcListPendingTransactions',
    value: function whcListPendingTransactions(address) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcListPendingTransactions/' + address).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcListProperties',
    value: function whcListProperties() {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcListPendingTransactions').then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcListTransactions',
    value: function whcListTransactions() {
      return _axios2.default.get(this.restURL + 'dataRetrieval/whcListTransactions').then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }]);

  return DataRetrieval;
}();

exports.default = DataRetrieval;