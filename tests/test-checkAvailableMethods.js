var dotenv_module;
dotenv_module = require("dotenv");
dotenv_module.config();

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
const blockchains = ['ethereum', 'avalanche', 'binance', 'heco', 'cronos', 'moonriver', 'moonbeam', 'arbitrum', 'fantom', 'hooscan', 'optimism']

function checkAvailableMethods() {
    const doSomething = async() => {
        for (const chain of blockchains) {
            await sleep(1000);
            var api = require('../viewfinder').init(chain);
            console.log(api);
        }
    }
    doSomething()
}

checkAvailableMethods();