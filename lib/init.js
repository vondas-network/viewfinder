/**
 * @name init.js
 * @description Initializes API routes, loads API key environmental variables into memory
 */

/**
 * @global
 */
"use strict";
const log = require('./log.js');
const proxy = require('./proxy');
const stats = require('./stats');
const block = require('./block');
const transaction = require('./transaction');
const contract = require('./contract');
const account = require('./account');
const tokens = require('./tokens');

/**
 * @name chainKey
 * @description Object of API keys
 * @constant
 * @type {object}
 */

/**
 * @description Make GET request using blockchain API key as base method
 * @param {string} chain - (optional) Testnet chain chainKey 
 * @param {number} timeout - (optional) Timeout in milliseconds for requests, default 10000
 */
module.exports = function(chain, key, timeout) {

    if (!timeout) {
        timeout = 10000;
    }

    var getRequest = require('./get-request')(chain, key, timeout);
    switch (chain) {
        case 'ethereum':
            return {
                log: log(getRequest, key),
                proxy: proxy(getRequest, key),
                stats: stats(getRequest, key),
                block: block(getRequest, key),
                transaction: transaction(getRequest, key),
                contract: contract(getRequest, key),
                account: account(getRequest, key)
            };
        case 'avalanche':
            return {
                log: log(getRequest, key),
                proxy: proxy(getRequest, key),
                stats: stats(getRequest, key),
                block: block(getRequest, key),
                transaction: transaction(getRequest, key),
                contract: contract(getRequest, key),
                account: account(getRequest, key),
                tokens: tokens(getRequest, key)
            };
        case 'binance':
            return {
                log: log(getRequest, key),
                proxy: proxy(getRequest, key),
                stats: stats(getRequest, key),
                block: block(getRequest, key),
                transaction: transaction(getRequest, key),
                contract: contract(getRequest, key),
                account: account(getRequest, key)
            };
        case 'arbitrum':
            return {
                log: log(getRequest, key),
                block: block(getRequest, key),
                transaction: transaction(getRequest, key),
                contract: contract(getRequest, key),
                account: account(getRequest, key)
            };
        case 'fantom':
            return {
                stats: stats(getRequest, key),
                contract: contract(getRequest, key),
                account: account(getRequest, key)
            };
        default:
            console.log('DEFAULTED');
    }
};