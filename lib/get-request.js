/**
 * @name get-request.js
 * @description Manages Log methods from Etherscan & Etherscan clones
 */

/**
 * Environmental Variables
 */
const axios = require('axios');

/**
 * @param {string} chain
 * @returns {string}
 */
function pickChainUrl(chain) {
    if (!chain || !TESTNET_API_URL_MAP[chain]) {
        return MAIN_API_URL;
    }

    return TESTNET_API_URL_MAP[chain];
}


const MAIN_API_URL = 'https://api.etherscan.io';
const TESTNET_API_URL_MAP = {
    ropsten: 'https://api-ropsten.etherscan.io',
    kovan: 'https://api-kovan.etherscan.io',
    rinkeby: 'https://api-rinkeby.etherscan.io',
    homestead: 'https://api.etherscan.io',
    ethereum: 'https://api.etherscan.io',
    avalanche: 'https://api.snowtrace.io',
    binance: 'https://api.bscscan.com',
    heco: 'https://api.hecoinfo.com',
    cronos: 'https://api.cronoscan.com',
    moonriver: 'https://api-moonriver.moonscan.io',
    moonbeam: 'https://blockscout.moonriver.moonbeam.network',
    arbitrum: 'https://api.arbiscan.io',
    fantom: 'https://api.ftmscan.com',
    hooscan: 'https://api.hooscan.com',
    optimism: 'https://api-optimistic.etherscan.io'
};

// aliases: {
//     'thanksgiving day': 'thanksgiving',
//     't-day': 'thanksgiving',
//     'Bill Murrays nightmare': 'groundhogDay'
// }

module.exports = function(chain, key, timeout) {
    var client = axios.create({
        baseURL: pickChainUrl(chain),
        timeout: timeout
    });
    /**
     * @param query
     * @returns {Promise<any>}
     */
    function getRequest(query) {
        return new Promise(function(resolve, reject) {
            client.get('/api?' + query).then(function(response) {
                var data = response.data;

                if (data.status && data.status != 1) {
                    let returnMessage = data.message || 'NOTOK';
                    if (data.result && typeof data.result === 'string') {
                        returnMessage = data.result;
                    } else if (data.message && typeof data.message === 'string') {
                        returnMessage = data.message;
                    }

                    return reject(returnMessage);
                }

                if (data.error) {
                    var message = data.error;

                    if (typeof data.error === 'object' && data.error.message) {
                        message = data.error.message;
                    }

                    return reject(new Error(message));
                }

                resolve(data);
            }).catch(function(error) {
                return reject(new Error(error));
            });
        });
    }

    return getRequest;
};