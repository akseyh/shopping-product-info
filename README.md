# shopping-product-info

[![npm version](https://badge.fury.io/js/shopping-product-info.svg)](https://badge.fury.io/js/shopping-product-info)

## Supporting Sites
<p float="left">
  <a href="https://www.gittigidiyor.com" target="_blank"> <img src="img/gittigidiyor-logo.jpg" width="100"> <a/>
  <a href="https://www.hepsiburada.com" target="_blank"> <img src="img/hepsiburada-logo.png" width="100"> <a/>
  <a href="https://www.trendyol.com" target="_blank"> <img src="img/trendyol-logo.jpg" width="100"> <a/>
</p>

## Installing
```bash
$ npm install shopping-product-info
```

## Usage
```
const getProductInfo = require('shopping-product-info');
```

## Example
### ASYNC/AWAİT
```
async function ...() {
  let product = await getProductInfo(url);
  console.log(product);
}
```
### OR CHAIN METHOD
```
getProductInfo(url)
.then(res => console.log(res));
```
