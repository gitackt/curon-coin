var CuronCoin = artifacts.require("./CuronCoin.sol");

module.exports = function(deployer) {
  const initialSupply = 100000000
  deployer.deploy(CuronCoin, initialSupply)
};
