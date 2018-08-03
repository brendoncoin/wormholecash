'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RawTransactions = function () {
  function RawTransactions(restURL) {
    _classCallCheck(this, RawTransactions);

    this.restURL = restURL;
  }

  _createClass(RawTransactions, [{
    key: 'whcCreateRawTxChange',
    value: function whcCreateRawTxChange(rawtx, prevTxs, destination, fee) {
      return _axios2.default.get(this.restURL + 'rawTransactions/whcCreateRawTxChange/' + rawtx + '/' + prevTxs + '/' + destination + '/' + fee).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcCreateRawTxInput',
    value: function whcCreateRawTxInput(rawtx, txid, n) {
      return _axios2.default.get(this.restURL + 'rawTransactions/whcCreateRawTxInput/' + rawtx + '/' + txid + '/' + n).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcCreateRawTxOpReturn',
    value: function whcCreateRawTxOpReturn(rawtx, payload) {
      return _axios2.default.get(this.restURL + 'rawTransactions/whcCreateRawTxOpReturn/' + rawtx + '/' + payload).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcCreateRawTxReference',
    value: function whcCreateRawTxReference(rawtx, destination, amount) {
      return _axios2.default.get(this.restURL + 'rawTransactions/whcCreateRawTxReference/' + rawtx + '/' + destination + '/' + amount).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcDecodeTransaction',
    value: function whcDecodeTransaction(rawtx) {
      return _axios2.default.get(this.restURL + 'rawTransactions/whcDecodeTransaction/' + rawtx).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'whcDecodeTransaction',
    value: function whcDecodeTransaction(rawtx) {
      return _axios2.default.get(this.restURL + 'rawTransactions/whcDecodeTransaction/' + rawtx).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }]);

  return RawTransactions;
}();

exports.default = RawTransactions;