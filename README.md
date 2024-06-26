<h3 align="center">
  <img height="35%" width="35%" src="https://github.com/vondas-network/viewfinder/assets/7625379/db8a63b6-4df4-4898-912d-3ff6f17690d0"/>
</h3>

<p align="center"><em>A single API for most EVM blockchains</em></p> 


# What?
_Viewfinder_ is a single API for most EVM blockchains. The project extends [sebs-etherscan](https://github.com/sebs/etherscan-api) API to more EVM blockchains. New methods are added by scanning each blockchain for their available methods. Each blockchain requires an API key that can be found for free (with restrictions) on Etherscan and Etherscan-clones (ex. Snowtrace, BSCscan, etc.). API keys are loaded using an _.env_ file, more information below.

# Requirements
- [Node.js](https://nodejs.org/en/download/)
- API key for supported blockchains

# Installation
``` npm i -g viewfinder ``` 

# Docs

## Request
```
curl --location --request GET 'http://localhost:3000/util/txbyhash?blockchain=ethereum&contract=0xe6236684face5ca33c531a011071236d24460fb8&hash=0x6e471b46c6ddfc5164beb5f5ff2581acac826462b33e98471cbafc94f391765e&key=YOUR_API_KEY'
```

## Usage
```javascript
function testTxByHash(obj){
    var api = require("@vondas/viewfinder").init(obj.blockchain, obj.key);
    var output = new Promise(async(resolve, reject) => {
        try {
            response = api.proxy.eth_getTransactionByHash(obj.hash);
        } catch (ex) {
            response = null;
            reject(ex);
        }
        if (response) {
            response.then(function(txs) {
                var exportOBJ = {
                    blockchain: obj.blockchain,
                    contract: obj.contract,
                    hash: obj.hash,
                    tx: txs.result
                }
                resolve(exportOBJ);
            })
        }
    });
    return output;
}
```

## Response
``` json
{
    "blockchain": "ethereum",
    "contract": "0xe6236684face5ca33c531a011071236d24460fb8",
    "hash": "0x6e471b46c6ddfc5164beb5f5ff2581acac826462b33e98471cbafc94f391765e",
    "tx": {
        "blockHash": "0x3c0fbfbfeb94ae16a513abbc1a668e1d1baefcbab7e53808949ddb68887f3304",
        "blockNumber": "0xd79449",
        "from": "0x3fe8c83615f7f32d11c65eb8a0a04675d8c4402b",
        "gas": "0x8774",
        "gasPrice": "0x2e5b48e700",
        "hash": "0x6e471b46c6ddfc5164beb5f5ff2581acac826462b33e98471cbafc94f391765e",
        "input": "0x095ea7b300000000000000000000000068b3465833fb72a70ecdf485e0e4c7bd8665fc45ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        "nonce": "0x24",
        "to": "0xe6236684face5ca33c531a011071236d24460fb8",
        "transactionIndex": "0x6d",
        "value": "0x0",
        "type": "0x0",
        "chainId": "0x1",
        "v": "0x25",
        "r": "0xb45ff9d9f38c028cd27b71e3ad5bc0466268bbdaf8565e7f448ec01cec7b2a73",
        "s": "0x24487a69f87408d11a80fd6da708e08241819695f5748f37d28a15527412648b"
    }
}
```

# Supported Blockchains

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

# Methods & Functions by Blockchain

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
