// function deployfun() {
//     console.log("Hi");
// }
// module.exports.default = deployfun;
const {
    networkConfig,
    developmentChains,
} = require("../helper-hardhat-config");

const { network } = require("hardhat");
const { verify } = require("../utils/verify");

module.exports = async(hre) => {
    const { getNamedAccounts, deployments } = hre;
    const { deploy, log, get } = deployments;
    const { deployer } = await getNamedAccounts();

    const chainId = network.config.chainId;

    let ethUsdPriceFeedAddress;
    if (developmentChains.includes(network.name)) {
        const ethUsdAggregator = await get("MockV3Aggregator");
        ethUsdPriceFeedAddress = ethUsdAggregator.address;
    } else {
        ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"];
    }
    args = [ethUsdPriceFeedAddress];
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: args,
        log: true,
        waitConfirmation: network.config.blockConfirmation,
    });

    if (!developmentChains.includes(network.name) && process.env.ETHERSCANKEY) {
        await verify(fundMe.address, args);
    }
};

module.exports.tags = ["all", "fundme"];