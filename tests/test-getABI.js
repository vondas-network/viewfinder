var dotenv_module;
dotenv_module = require("dotenv");
dotenv_module.config();

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
const blockchains = ['avalanche']

function getABI() {
    var api = require('../viewfinder').init(blockchains[0]);
    var contracts = api.contract.getabi('0x418d541b05d932371ec148852448f7445b2b73df');
    contracts.then(function(abi) {
        console.log(abi);
        let abiStatus = abi.status;
        let abiMessage = abi.message;
        let abiResults = abi.result;
        // console.log(abiStatus, abiMessage, abiResults);
    }).catch((err) => console.log(err));
}

getABI();