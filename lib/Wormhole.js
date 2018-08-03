'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Configuration = require('./Configuration');

var _Configuration2 = _interopRequireDefault(_Configuration);

var _DataRetrieval = require('./DataRetrieval');

var _DataRetrieval2 = _interopRequireDefault(_DataRetrieval);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BITBOXCli = require('bitbox-cli/lib/bitbox-cli').default;

var Wormhole = function Wormhole(config) {
  _classCallCheck(this, Wormhole);

  if (config && config.restURL && config.restURL !== '') {
    this.restURL = config.restURL;
  } else {
    this.restURL = 'https://wormholerest.bitcoin.com/v1/';
  }

  this.Configuration = new _Configuration2.default(this.restURL);
  this.DataRetrieval = new _DataRetrieval2.default(this.restURL);

  this.BITBOX = new BITBOXCli();
};

exports.default = Wormhole;