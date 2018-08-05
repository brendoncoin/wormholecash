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
    key: 'getAllBalancesForAddress',
    value: function getAllBalancesForAddress(address) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/getAllBalancesForAddress/' + address).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'getAllBalancesForId',
    value: function getAllBalancesForId(propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/getAllBalancesForId/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'getBalance',
    value: function getBalance(address, propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/getBalance/' + address + '/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'getBalancesHash',
    value: function getBalancesHash(propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/getBalancesHash/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'getCrowdSale',
    value: function getCrowdSale(propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/getCrowdSale/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'getCurrentConsensusHash',
    value: function getCurrentConsensusHash() {
      return _axios2.default.get(this.restURL + 'dataRetrieval/getCurrentConsensusHash').then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'getFeeShare',
    value: function getFeeShare() {
      return _axios2.default.get(this.restURL + 'dataRetrieval/getFeeShare').then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'getGrants',
    value: function getGrants(propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/getGrants/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'getInfo',
    value: function getInfo() {
      return _axios2.default.get(this.restURL + 'dataRetrieval/getInfo').then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'getPayload',
    value: function getPayload(txid) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/getPayload/' + txid).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'getProperty',
    value: function getProperty(propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/getProperty/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'getSeedBlocks',
    value: function getSeedBlocks(startBlock, endBlock) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/getSeedBlocks/' + startBlock + '/' + endBlock).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'getSTO',
    value: function getSTO(txid, recipientFilter) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/getSTO/' + txid + '/' + recipientFilter).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'getTransaction',
    value: function getTransaction(txid) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/getTransaction/' + txid).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'listBlockTransactions',
    value: function listBlockTransactions(index) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/listBlockTransactions/' + index).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'listPendingTransactions',
    value: function listPendingTransactions(address) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/listPendingTransactions/' + address).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'listProperties',
    value: function listProperties() {
      return _axios2.default.get(this.restURL + 'dataRetrieval/listPendingTransactions').then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'listTransactions',
    value: function listTransactions() {
      return _axios2.default.get(this.restURL + 'dataRetrieval/listTransactions').then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }]);

  return DataRetrieval;
}();

exports.default = DataRetrieval;