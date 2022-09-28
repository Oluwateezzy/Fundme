require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("@nomiclabs/hardhat-etherscan");
// require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [{ version: "0.8.17" }, { version: "0.6.0" }],
    },
    networks: {
        rinbeky: {
            url: process.env.RINKEBY || "",
            accounts: [process.env.PRIVATEKEY],
            chainId: 4,
        },
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas_report.txt",
        noColors: true,
    },
    etherscan: {
        apiKey: process.env.ETHERSCANKEY,
    },

    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
};