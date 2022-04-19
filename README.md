# viewfinder

<h3 align="center">
  <img height="255" width="253" src="https://github.com/vondas-network/viewfinder/blob/main/img/247082.png"/>
</h3>

# What?
_Viewfinder_ is a single API for most EVM blockchain. The project extends [sebs-etherscan](https://github.com/sebs/etherscan-api) API to more EVM blockchains. New methods are added by scanning each blockchain for their available methods. Each blockchain requires an API key that can be found for free (with restrictions) on Etherscan and Etherscan-clones (ex. Snowtrace, BSCscan, etc.). API keys are loaded using an _.env_ file, more information below.

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
## Installing from npm
``` npm i -g viewfinder ``` 
## Installing from source
- Clone the git repository
- Install dependencies
  `npm i`
- Run the project
  `node index.js`

# Usage

## Create .env file for Environmental Variables 

- In a new project filder, create a new file for the environmental variables called `.env`
- Copy/paste the text below into the `.env` file
- Remove `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` and add the associated *API Key* 
- Save `.env`

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
- The *API keys* above are associated with an array located in `init.js`
```
var chainKey = {
    "keyEthereum": process.env.ETHEREUM_API_KEY,
    "keyAvalanche": process.env.AVALANCHE_API_KEY,
    "keyBinance": process.env.BINANCE_API_KEY,
    "keyHeco": process.env.HECO_API_KEY,
    "keyCronos": process.env.CRONOS_API_KEY,
    "keyMoonriver": process.env.MOONRIVER_API_KEY,
    "keyMoonbeam": process.env.MOONBEAM_API_KEY,
    "keyArbitrum": process.env.ARBITRUM_API_KEY,
    "keyFantom": process.env.FANTOM_API_KEY,
    "keyHooscan": process.env.HOOSCAN_API_KEY,
    "keyOptimism": process.env.OPTIMISM_API_KEY
}
``` 
- The environmental varible method is g

## Check available API methods of a specific blockchain
```javascript
const blockchains = ['ethereum', 'avalanche', 'binance', 'heco', 'cronos', 'moonriver', 'moonbeam', 'arbitrum', 'fantom', 'hooscan', 'optimism']

var api = require('@vondas/viewfinder').init(blockchains[0]);
console.log(api);
```

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
