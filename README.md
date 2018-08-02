# WormholeCash

[BITBOX](https://developer.bitcoin.com/bitbox.html) lib for [Wormhole Cash](http://wormhole.cash)

## Usage

First install the lib.

```js
npm install wormholecash --save
```

### Require the lib

```js
let WormholeCash = require('wormholecash');
```

### Create an instance of the class

The `constructor` takes 3 arguments. The first is the required argument `mnemonic`. The second is the optional argument `hdpath`. If you don't pass in a `hdpath` the standard BIP44 hdpath `m/44'/145'/0'/0/0` is used. The third is the optional argument `network` which defaults to `mainnet`.

```js
let mnemonic = "credit control lesson surface clerk shiver mother jacket myth drum hair inquiry phrase base valid empower jungle advance naive height express aisle arrive family";
let wormholecash = new WormholeCash(mnemonic);
```

### Burn some BCH for WHC

The `burn` method takes 1 required argument `satoshis` which is the number of satoshis you wish to burn.

```js
wormholecash.burn(20000000);
```

This will create a 1-to-2 P2PKH tx where `satoshis` are sent to the WormholeCash burner address [qqqqqqqqqqqqqqqqqqqqqqqqqqqqqu08dsyxz98whc](https://explorer.bitcoin.com/bch/address/qqqqqqqqqqqqqqqqqqqqqqqqqqqqqu08dsyxz98whc) w/ a null data output which has the `OP_RETURN` `0877686300000044`
