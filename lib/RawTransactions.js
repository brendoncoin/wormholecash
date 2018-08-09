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
    key: 'change',
    value: function change(rawtx, prevTxs, destination, fee) {
      var position = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : undefined;

      var path = void 0;
      if (position) {
        path = this.restURL + 'rawTransactions/change/' + rawtx + '/' + prevTxs + '/' + destination + '/' + fee + '?position=' + position;
      } else {
        path = this.restURL + 'rawTransactions/change/' + rawtx + '/' + prevTxs + '/' + destination + '/' + fee;
      }
      return _axios2.default.post(path).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'input',
    value: function input(rawtx, txid, n) {
      return _axios2.default.post(this.restURL + 'rawTransactions/input/' + rawtx + '/' + txid + '/' + n).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'opReturn',
    value: function opReturn(rawtx, payload) {
      return _axios2.default.post(this.restURL + 'rawTransactions/opReturn/' + rawtx + '/' + payload).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'reference',
    value: function reference(rawtx, destination, amount) {
      var path = void 0;
      if (amount) {
        path = this.restURL + 'rawTransactions/reference/' + rawtx + '/' + destination + '?amount=' + amount;
      } else {
        path = this.restURL + 'rawTransactions/reference/' + rawtx + '/' + destination;
      }
      return _axios2.default.post(path).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }, {
    key: 'decodeTransaction',
    value: function decodeTransaction(rawtx) {
      return _axios2.default.get(this.restURL + 'rawTransactions/decodeTransaction/' + rawtx).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return JSON.stringify(error.response.data.error.message);
      });
    }
  }]);

  return RawTransactions;
}();

exports.default = RawTransactions;