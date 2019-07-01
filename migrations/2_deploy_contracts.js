const CuronCoin = artifacts.require("./CuronCoin.sol");
const CuronCoinSale = artifacts.require("./CuronCoinSale.sol");

module.exports = function(deployer) {
  const issueAddress = web3.eth.getAccounts()[0];
  const initialSupply = web3.utils.toBN(10*(10**18));
  const rateForWei = web3.utils.toBN(1);

  return deployer.then(() => deployer.deploy(CuronCoin, initialSupply)).then(() => {
    return deployer.deploy(CuronCoinSale, rateForWei, issueAddress, CuronCoin.address);
  }).then(() => {
    return CuronCoin.deployed().then(instance => {
      instance.transfer(CuronCoinSale.address, initialSupply, { from: issueAddress })
    });
  })
};
