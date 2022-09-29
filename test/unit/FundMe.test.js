const { deployments, ethers, getNamedAccounts } = require("hardhat");

describe("FundMe", async function() {
    let FundMe;
    beforeEach(async function() {
        const { deployer } = getNamedAccounts();
        await deployments.fixture(["all"]);
        FundMe = await ethers.ContractFactory("Contract", deployer);
    });
    describe("Constructor", async function() {});
});