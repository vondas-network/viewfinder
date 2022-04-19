/**
 * tokens.js
 * Manages Tokens methods from Etherscan & Etherscan clones
 */

const querystring = require('querystring');
module.exports = function(getRequest, apiKey) {
    return {
        /**
         * Returns the supply of Tokens
         * @param {string} contractaddress - Address from token contract
         * @example
         * var supply = api.tokens.tokensupply('0x57d90b64a1a57749b0f932f1a3395792e12e7055');
         * @returns {Promise.<object>}
         */
        tokensupply(contractaddress) {
            const module = 'stats';
            const action = 'tokensupply';

            let params = {
                module,
                action,
                apiKey
            };

            if (contractaddress) {
                params.contractaddress = contractaddress;
            }

            var query = querystring.stringify(params);
            return getRequest(query);
        },

        /**
         * Returns the supply of Tokens
         * @param {string} contractaddress - Contract address of the ERC-20 token
         * @param {string} address - The address to check for token balance
         * @param {string} tag - Address from token contract
         * @example
         * var supply = api.tokens.tokenbalance(0xe9e7cea3dedca5984780bafc599bd69add087d56, '0x57d90b64a1a57749b0f932f1a3395792e12e7055', latest);
         * @returns {Promise.<object>}
         */
        tokenbalance(contractaddress,
            address,
            tag) {

            const module = 'stats';
            const action = 'tokensupply';

            let params = {
                module,
                action,
                apiKey
            };

            if (contractaddress) {
                params.contractaddress = contractaddress;
            }

            if (address) {
                params.address = address;
            }

            if (tag) {
                params.tag = tag;
            }

            var query = querystring.stringify(params);
            return getRequest(query);
        }
    };
};