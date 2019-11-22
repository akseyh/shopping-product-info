# shopping-product-info

[![npm version](https://badge.fury.io/js/shopping-product-info.svg)](https://badge.fury.io/js/shopping-product-info)

## Installing
```bash
$ npm install shopping-product-info
```

## Usage
```
const getProductInfo = require('shopping-product-info');
```

## Example
It's working with trendyol.com, hepsiburada.com, gittigidiyor.com yet.

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
