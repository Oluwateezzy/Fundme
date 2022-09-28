// function deployfun() {
//     console.log("Hi");
// }
// module.exports.default = deployfun;
const { networkConfig } = require("../helper-hardhat-config");

const { network } = require("hardhat");

module.exports = async(hre) => {
    const { getNamedAccounts, deployments } = hre;
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    const chainId = network.config.chainId;

    const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];

    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [],
        log: true,
    });
};