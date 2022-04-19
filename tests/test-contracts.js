/**
 * Environmental Variables
 */
var dotenv_module;
dotenv_module = require("dotenv");
dotenv_module.config();

/**
 * testUnits
 * Iterate over blockchain contracts, get api details & contract abi
 */
function testUnits() {
    async function asyncEthereum() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("asyncEthereum is done!"), 1000);
        });
    }
    async function asyncAvalanche() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("asyncAvalanche is done!"), 5000);
        });
    }

    async function asyncBinance() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("asyncBinance is done!"), 10000);
        });
    }

    async function asyncHeco() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("asyncHeco is done!"), 15000);
        });
    }

    async function asyncCronos() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("asyncCronos is done!"), 20000);
        });
    }

    async function asyncMoonriver() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("asyncMoonriver is done!"), 25000);
        });
    }

    async function asyncMoonbeam() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("asyncMoonbeam is done!"), 30000);
        });
    }

    async function asyncArbitrum() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("asyncArbitrum is done!"), 35000);
        });
    }

    async function asyncFantom() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("asyncFantom is done!"), 40000);
        });
    }

    async function asyncHooscan() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("asyncHooscan is done!"), 45000);
        });
    }

    async function asyncOptimism() {
        return new Promise((resolve) => {
            setTimeout(() => resolve("asyncOptimism is done!"), 50000);
        });
    }
    for (let gg = 0; gg < 1; gg++) {
        (async function(gg) {
            setTimeout(function() {
                asyncEthereum().then((thing) => {
                    console.log('ETHEREUM');
                    var eth = require('../viewfinder').init('ethereum');
                    console.log(eth);
                    var contracts = eth.contract.getabi('0xA7c1cB3F71Ee21709De9F1ac4cbf93465aC9316b'); // 
                    contracts.then(function(data) {
                        console.log(data);
                    }).then(function() {
                        console.log(thing);
                    }).catch((err) => console.log(err));
                }).catch((err) => console.log(err));
                asyncAvalanche().then((thing) => {
                    console.log('AVALANCHE');
                    var avax = require('../viewfinder').init('avalanche');
                    console.log(avax);
                    var contracts = avax.contract.getabi('0x418d541b05d932371ec148852448f7445b2b73df'); // Illuminati Owls
                    contracts.then(function(data) {
                        console.log(data);
                    }).then(function() {
                        console.log(thing);
                    }).catch((err) => console.log(err));
                }).catch((err) => console.log(err));
                asyncBinance().then((thing) => {
                    console.log('BINANCE');
                    var binance = require('../viewfinder').init('binance');
                    console.log(binance);
                    var contracts = binance.contract.getabi('0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'); // CAKE
                    contracts.then(function(data) {
                        console.log(data);
                    }).then(function() {
                        console.log(thing);
                    }).catch((err) => console.log(err));
                }).catch((err) => console.log(err));
                asyncHeco().then((thing) => {
                    console.log('HECO');
                    var heco = require('../viewfinder').init('heco');
                    console.log(heco);
                    var contracts = heco.contract.getabi('0x09006b66d89e5213fc173403aacba30620a91f4e'); // UNISWAP
                    contracts.then(function(data) {
                        console.log(data);
                    }).then(function() {
                        console.log(thing);
                    }).catch((err) => console.log(err));
                }).catch((err) => console.log(err));
                asyncCronos().then((thing) => {
                    console.log('CRONOS');
                    var cronos = require('../viewfinder').init('cronos');
                    console.log(cronos);
                    var contracts = cronos.contract.getabi('0xf2001b145b43032aaf5ee2884e456ccd805f677d'); // DAI
                    contracts.then(function(data) {
                        console.log(data);
                    }).then(function() {
                        console.log(thing);
                    }).catch((err) => console.log(err));
                }).catch((err) => console.log(err));
                asyncMoonriver().then((thing) => {
                    console.log('MOONRIVER');
                    var moonriver = require('../viewfinder').init('moonriver');
                    console.log(moonriver);
                    var contracts = moonriver.contract.getabi('0x1a93b23281cc1cde4c4741353f3064709a16197d'); // FRAX
                    contracts.then(function(data) {
                        console.log(data);
                    }).then(function() {
                        console.log(thing);
                    }).catch((err) => console.log(err));
                }).catch((err) => console.log(err));
                asyncMoonbeam().then((thing) => {
                    console.log('MOONBEAM');
                    var moonbeam = require('../viewfinder').init('moonbeam');
                    console.log(moonbeam);
                    var contracts = moonbeam.contract.getabi('0x98878B06940aE243284CA214f92Bb71a2b032B8A'); // WMOVR
                    contracts.then(function(data) {
                        console.log(data);
                    }).then(function() {
                        console.log(thing);
                    }).catch((err) => console.log(err));
                }).catch((err) => console.log(err));
                asyncArbitrum().then((thing) => {
                    console.log('ARBITRUM');
                    var arbitrum = require('../viewfinder').init('arbitrum');
                    console.log(arbitrum);
                    var contracts = arbitrum.contract.getabi('0xfea7a6a0b346362bf88a9e4a88416b77a57d6c2a'); // MIM
                    contracts.then(function(data) {
                        console.log(data);
                    }).then(function() {
                        console.log(thing);
                    }).catch((err) => console.log(err));
                }).catch((err) => console.log(err));
                asyncFantom().then((thing) => {
                    console.log('FANTOM');
                    var fantom = require('../viewfinder').init('fantom');
                    console.log(fantom);
                    var contracts = fantom.contract.getabi('0x841fad6eae12c286d1fd18d1d525dffa75c7effe'); // BOO
                    contracts.then(function(data) {
                        console.log(data);
                    }).then(function() {
                        console.log(thing);
                    }).catch((err) => console.log(err));
                }).catch((err) => console.log(err));
                asyncHooscan().then((thing) => {
                    console.log('HOOSCAN');
                    var hooscan = require('../viewfinder').init('hooscan');
                    console.log(hooscan);
                    var contracts = hooscan.contract.getabi('0x7f7ffa02940b9d975721a842665883482d0dc342'); // ASS
                    contracts.then(function(data) {
                        console.log(data);
                    }).then(function() {
                        console.log(thing);
                    }).catch((err) => console.log(err));
                }).catch((err) => console.log(err));
                asyncOptimism().then((thing) => {
                    console.log('OPTIMISM');
                    var optimism = require('../viewfinder').init('optimism');
                    console.log(optimism);
                    var contracts = optimism.contract.getabi('0x8700daec35af8ff88c16bdf0418774cb3d7599b4'); // SNX
                    contracts.then(function(data) {
                        console.log(data);
                    }).then(function() {
                        console.log(thing);
                    }).catch((err) => console.log(err));
                }).catch((err) => console.log(err));
            }, gg * 1000);
        })(gg);
    }
}

testUnits();