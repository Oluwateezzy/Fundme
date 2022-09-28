const { network } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");

module.exports = async({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();

    if (developmentChains.includes(network.name)) {
        log("local network detected deploy mock!!!!");
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            arg: [],
        });
        log("Mocks deployed!");
        log("_____________________________________");
    }
};

module.exports.tags = ["all", "mocks"];