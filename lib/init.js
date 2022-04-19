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

/**
 * @description Make GET request using blockchain API key as base method
 * @param {string} chain - (optional) Testnet chain chainKey 
 * @param {number} timeout - (optional) Timeout in milliseconds for requests, default 10000
 */
module.exports = function(chain, timeout) {

    if (!timeout) {
        timeout = 10000;
    }

    var getRequest = require('./get-request')(chain, timeout);

    switch (chain) {
        case 'ethereum':
            // case 'eth':
            return {
                log: log(getRequest, chainKey["keyEthereum"]),
                proxy: proxy(getRequest, chainKey["keyEthereum"]),
                stats: stats(getRequest, chainKey["keyEthereum"]),
                block: block(getRequest, chainKey["keyEthereum"]),
                transaction: transaction(getRequest, chainKey["keyEthereum"]),
                contract: contract(getRequest, chainKey["keyEthereum"]),
                account: account(getRequest, chainKey["keyEthereum"])
            };
        case 'avalanche':
            // case 'avax':
            return {
                log: log(getRequest, chainKey["keyAvalanche"]),
                proxy: proxy(getRequest, chainKey["keyAvalanche"]),
                stats: stats(getRequest, chainKey["keyAvalanche"]),
                block: block(getRequest, chainKey["keyAvalanche"]),
                transaction: transaction(getRequest, chainKey["keyAvalanche"]),
                contract: contract(getRequest, chainKey["keyAvalanche"]),
                account: account(getRequest, chainKey["keyAvalanche"]),
                tokens: tokens(getRequest, chainKey["keyAvalanche"])
            };
        case 'binance':
            // case 'bsc':
            return {
                log: log(getRequest, chainKey["keyBinance"]),
                proxy: proxy(getRequest, chainKey["keyBinance"]),
                stats: stats(getRequest, chainKey["keyBinance"]),
                block: block(getRequest, chainKey["keyBinance"]),
                transaction: transaction(getRequest, chainKey["keyBinance"]),
                contract: contract(getRequest, chainKey["keyBinance"]),
                account: account(getRequest, chainKey["keyBinance"])
            };
        case 'heco':
            return {
                log: log(getRequest, chainKey["keyHeco"]),
                proxy: proxy(getRequest, chainKey["keyHeco"]),
                stats: stats(getRequest, chainKey["keyHeco"]),
                block: block(getRequest, chainKey["keyHeco"]),
                transaction: transaction(getRequest, chainKey["keyHeco"]),
                contract: contract(getRequest, chainKey["keyHeco"]),
                account: account(getRequest, chainKey["keyHeco"])

            };
        case 'cronos':
            // case 'cro':
            return {
                log: log(getRequest, chainKey["keyCronos"]),
                proxy: proxy(getRequest, chainKey["keyCronos"]),
                stats: stats(getRequest, chainKey["keyCronos"]),
                block: block(getRequest, chainKey["keyCronos"]),
                transaction: transaction(getRequest, chainKey["keyCronos"]),
                contract: contract(getRequest, chainKey["keyCronos"]),
                account: account(getRequest, chainKey["keyCronos"])

            };
        case 'moonriver':
            // case 'mr':
            return {
                log: log(getRequest, chainKey["keyMoonriver"]),
                proxy: proxy(getRequest, chainKey["keyMoonriver"]),
                stats: stats(getRequest, chainKey["keyMoonriver"]),
                block: block(getRequest, chainKey["keyMoonriver"]),
                transaction: transaction(getRequest, chainKey["keyMoonriver"]),
                contract: contract(getRequest, chainKey["keyMoonriver"]),
                account: account(getRequest, chainKey["keyMoonriver"])

            };
        case 'moonbeam':
            // case 'mb':
            return {
                log: log(getRequest, chainKey["keyMoonbeam"]),
                proxy: proxy(getRequest, chainKey["keyMoonbeam"]),
                stats: stats(getRequest, chainKey["keyMoonbeam"]),
                block: block(getRequest, chainKey["keyMoonbeam"]),
                transaction: transaction(getRequest, chainKey["keyMoonbeam"]),
                contract: contract(getRequest, chainKey["keyMoonbeam"]),
                account: account(getRequest, chainKey["keyMoonbeam"])

            };
        case 'arbitrum':
            // case 'arb':
            return {
                log: log(getRequest, chainKey["keyArbitrum"]),
                block: block(getRequest, chainKey["keyArbitrum"]),
                transaction: transaction(getRequest, chainKey["keyArbitrum"]),
                contract: contract(getRequest, chainKey["keyArbitrum"]),
                account: account(getRequest, chainKey["keyArbitrum"])

            };
        case 'fantom':
            // case 'ftm':
            return {
                stats: stats(getRequest, chainKey["keyFantom"]),
                contract: contract(getRequest, chainKey["keyFantom"]),
                account: account(getRequest, chainKey["keyFantom"])

            };
        case 'hooscan':
            // case 'hoo':
            return {
                stats: stats(getRequest, chainKey["keyHooscan"]),
                contract: contract(getRequest, chainKey["keyHooscan"]),
                account: account(getRequest, chainKey["keyHooscan"])

            };
        case 'optimism':
            // case 'opt':
            return {
                stats: stats(getRequest, chainKey["keyOptimism"]),
                contract: contract(getRequest, chainKey["keyOptimism"]),
                account: account(getRequest, chainKey["keyOptimism"])

            };
        default:
            console.log('DEFAULTED');
    }
};