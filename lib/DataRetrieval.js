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
    key: 'balancesForAddress',
    value: function balancesForAddress(address) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/balancesForAddress/' + address).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'balancesForId',
    value: function balancesForId(propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/balancesForId/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'balance',
    value: function balance(address, propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/balance/' + address + '/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'balancesHash',
    value: function balancesHash(propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/balancesHash/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'crowdSale',
    value: function crowdSale(propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/crowdSale/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'currentConsensusHash',
    value: function currentConsensusHash() {
      return _axios2.default.get(this.restURL + 'dataRetrieval/currentConsensusHash').then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'feeShare',
    value: function feeShare() {
      return _axios2.default.get(this.restURL + 'dataRetrieval/feeShare').then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'grants',
    value: function grants(propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/grants/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'info',
    value: function info() {
      return _axios2.default.get(this.restURL + 'dataRetrieval/info').then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'payload',
    value: function payload(txid) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/payload/' + txid).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'property',
    value: function property(propertyId) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/property/' + propertyId).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'seedBlocks',
    value: function seedBlocks(startBlock, endBlock) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/seedBlocks/' + startBlock + '/' + endBlock).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'STO',
    value: function STO(txid, recipientFilter) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/STO/' + txid + '/' + recipientFilter).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'transaction',
    value: function transaction(txid) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/transaction/' + txid).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'blockTransactions',
    value: function blockTransactions(index) {
      return _axios2.default.get(this.restURL + 'dataRetrieval/blockTransactions/' + index).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'pendingTransactions',
    value: function pendingTransactions(address) {
      var path = this.restURL + 'dataRetrieval/pendingTransactions';
      if (address) {
        path = this.restURL + 'dataRetrieval/pendingTransactions?address=' + address;
      }
      return _axios2.default.get(path).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'properties',
    value: function properties() {
      return _axios2.default.get(this.restURL + 'dataRetrieval/properties').then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'transactions',
    value: function transactions() {
      return _axios2.default.get(this.restURL + 'dataRetrieval/transactions').then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }]);

  return DataRetrieval;
}();

exports.default = DataRetrieval;