var CuronCoin = artifacts.require("./CuronCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(CuronCoin);
};
