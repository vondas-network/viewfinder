# viewfinder

Multi-chain EVM data for Etherscane & Etherscan-clones

<h3 align="center">
  <img height="255" width="253" src="https://github.com/vondas-network/viewfinder/blob/main/img/247082.png"/>
</h3>

# Requirements

- [Node.js](https://nodejs.org/en/download/)

- [dotenv](https://www.npmjs.com/package/dotenv) 

- API key (*listed below*)

  

# Support Blockchains

## Testnet

| Testnet | Blockchain | Endpoint                         |
| ------- | ---------- | -------------------------------- |
| Ropsten | Ethereum   | https://api-ropsten.etherscan.io |
| Kovan   | Ethereum   | https://api-kovan.etherscan.io   |
| Rinkeby | Ethereum   | https://api-rinkeby.etherscan.io |

## Mainnet

| Mainnet   | Endpoint                            | Docs                                         |
| --------- | ----------------------------------- | -------------------------------------------- |
| Ethereum  | https://api.etherscan.io            | https://docs.etherscan.io/                   |
| Avalanche | https://api.snowtrace.io            | https://snowtrace.io/apis                    |
| Binance   | https://api.bscscan.com             | https://docs.bscscan.com/                    |
| Heco      | https://api.hecoinfo.com            | https://hecoinfo.com/apis                    |
| Cronos    | https://api.cronoscan.com           | https://cronoscan.com/apis                   |
| Moonriver | https://api-moonriver.moonscan.io   | https://moonriver.moonscan.io/apis           |
| Moonbeam  | https://blockscout.moonbeam.network | https://blockscout.moonbeam.network/api-docs |
| Arbitrum  | https://api.arbiscan.io             | https://arbiscan.io/apis                     |
| Fantom    | https://api.ftmscan.com             | https://ftmscan.com/apis                     |
| Hooscan   | https://api.hooscan.com             | https://hooscan.com/apis                     |
| Optimism  | https://api-optimistic.etherscan.io | https://optimistic.etherscan.io/apis         |



# Installation

## Production

``` npm i -g viewfinder ``` 

**in-progress*

# Environmental Variables

````bash
# ADD API KEYS HERE
ETHEREUM_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
AVALANCHE_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
BINANCE_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
HECO_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CRONOS_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
MOONRIVER_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
MOONBEAM_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
ARBITRUM_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
FANTOM_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
HOOSCAN_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
OPTIMISM_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
````



# Usage

```javascript
// Ethereum
var eth = require('./viewfinder').init('ethereum');
console.log(eth);

// Avalanche
var avax = require('./viewfinder').init('avalanche');
console.log(avax);

// Binance
var binance = require('./viewfinder').init('binance');
console.log(binance);

// Heco
var heco = require('./viewfinder').init('heco');
console.log(heco);

// Cronos
var cronos = require('./viewfinder').init('cronos');
console.log(cronos);

// Moonriver
var moonriver = require('./viewfinder').init('moonriver');
console.log(moonriver);

// Moonbeam
var moonbeam = require('./viewfinder').init('moonbeam');
console.log(moonbeam);

// Arbitrum
var arbitrum = require('./viewfinder').init('arbitrum');
console.log(arbitrum);

// Fantom
var fantom = require('./viewfinder').init('fantom');
console.log(fantom);

// Hooscan
var hooscan = require('./viewfinder').init('hooscan');
console.log(hooscan);

// Optimism
var optimism = require('./viewfinder').init('optimism');
console.log(optimism);
```

**tested within local viewfinder*



# Available Methods & Functions

| Type        | Method                                  | URL                                                          | Ethereum | Polygon | Avalanche | BSC  | Heco | Cronos | Moonriver | Moonbeam | Arbitrum | Fantom | Hooscan |
| ----------- | --------------------------------------- | ------------------------------------------------------------ | -------- | ------- | --------- | ---- | ---- | ------ | --------- | -------- | -------- | ------ | ------- |
| Logs        | getLogs                                 | api?module=logs&action=getLogs                               | x        | x       | x         | x    | x    | x      | x         | x        | x        | -      | -       |
| Proxy       | eth_blockNumber                         | api?module=proxy&action=eth_blockNumber                      | x        | x       | x         | x    | x    | x      | x         | x        | -        | -      | -       |
| Proxy       | eth_getBlockByNumber                    | api?module=proxy&action=eth_getBlockByNumber                 | x        | x       | x         | x    | x    | x      | x         | x        | -        | -      | -       |
| Proxy       | eth_getBlockTransactionCountByNumber    | api?module=proxy&action=eth_getBlockTransactionCountByNumber | x        | x       | x         | x    | x    | x      | x         | x        | -        | -      | -       |
| Proxy       | eth_getTransactionByHash                | api?module=proxy&action=eth_getTransactionByHash             | x        | x       | x         | x    | x    | x      | x         | x        | -        | -      | -       |
| Proxy       | eth_getTransactionByBlockNumberAndIndex | api?module=proxy&action=eth_getTransactionByBlockNumberAndIndex | x        | x       | x         | x    | x    | x      | x         | x        | -        | -      | -       |
| Proxy       | eth_getTransactionCount                 | api?module=proxy&action=eth_getTransactionCount              | x        | x       | x         | x    | x    | x      | x         | x        | -        | -      | -       |
| Proxy       | eth_sendRawTransaction                  | api?module=proxy&action=eth_sendRawTransaction               | x        | x       | x         | x    | x    | x      | x         | x        | -        | -      | -       |
| Proxy       | eth_getTransactionReceipt               | api?module=proxy&action=eth_getTransactionReceipt            | x        | x       | x         | x    | x    | x      | x         | x        | -        | -      | -       |
| Proxy       | eth_call                                | api?module=proxy&action=eth_call                             | x        | x       | x         | x    | x    | x      | x         | x        | -        | -      | -       |
| Proxy       | eth_getCode                             | api?module=proxy&action=eth_getCode                          | x        | x       | x         | x    | x    | x      | x         | x        | -        | -      | -       |
| Proxy       | eth_getStorageAt                        | api?module=proxy&action=eth_getStorageAt                     | x        | x       | x         | x    | x    | x      | x         | x        | -        | -      | -       |
| Proxy       | eth_gasPrice                            | api?module=proxy&action=eth_gasPrice                         | x        | x       | x         | x    | x    | x      | x         | x        | -        | -      | -       |
| Proxy       | eth_estimateGas                         | api?module=proxy&action=eth_estimateGas                      | x        | x       | x         | x    | x    | x      | x         | x        | -        | -      | -       |
| Stats       | tokensupply                             | api?module=stats&action=tokensupply                          | x        | x       | x         | x    | x    | x      | x         | x        | -        | x      | x       |
| Stats       | ethsupply                               | api?module=stats&action=ethsupply                            | x        | x       | x         | x    | x    | x      | x         | x        | -        | x      | x       |
| Stats       | ethprice                                | api?module=stats&action=ethprice                             | x        | x       | x         | x    | x    | x      | x         | x        | -        | x      | x       |
| Block       | block                                   | api?module=block&action=gtblockreward                        | x        | x       | x         | x    | x    | x      | x         | x        | x        | -      | -       |
| Transaction | getstatus                               | api?module=transaction&action=gettxreceiptstatus             | x        | x       | x         | x    | x    | x      | x         | x        | x        | -      | -       |
| Contract    | getabi                                  | api?module=contract&action=getabi                            | x        | x       | x         | x    | x    | x      | x         | x        | x        | x      | x       |
| Contract    | getsourcecode                           | api?module=contract&action=getsourcecode                     | x        | x       | x         | x    | x    | x      | x         | x        | x        | x      | x       |
| Account     | tokenbalance                            | api?module=account&action=tokenbalance                       | x        | x       | x         | x    | x    | x      | x         | x        | x        | x      | x       |
| Account     | balance                                 | api?module=account&action=balance                            | x        | x       | x         | x    | x    | x      | x         | x        | x        | x      | x       |
| Account     | txlistinternal                          | api?module=account&action=txlistinternal                     | x        | x       | x         | x    | x    | x      | x         | x        | x        | x      | x       |
| Account     | txlist                                  | api?module=account&action=txlist                             | x        | x       | x         | x    | x    | x      | x         | x        | x        | x      | x       |
| Account     | getminedblocks                          | api?module=account&action=getminedblocks                     | x        | x       | x         | x    | x    | x      | x         | x        | x        | x      | x       |
| Account     | tokentx                                 | api?module=account&action=tokentx                            | x        | x       | x         | x    | x    | x      | x         | x        | x        | x      | x       |
| Token       | tokensupply                             | api?module=tokens&action=tokensupply                         | -        | x       | -         | -    | -    | -      | -         | -        | -        | -      | -       |
| Token       | tokenbalance                            | api?module=tokens&action=tokenbalance                        | -        | x       | -         | -    | -    | -      | -         | -        | -        | -      | -       |

**subject to change*
