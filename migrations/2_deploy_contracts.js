const CuronCoin = artifacts.require("./CuronCoin.sol");
const CuronCoinSale = artifacts.require("./CuronCoinSale.sol");

module.exports = function(deployer) {
  let issueAddress = null;
  web3.eth.getAccounts().then((e) => issueAddress = e[0])
  const initialSupply = web3.utils.toBN(10*(10**18));
  const rateForWei = web3.utils.toBN(1);

  return deployer
    .then(() => deployer.deploy(CuronCoin, initialSupply))
    .then(() => deployer.deploy(CuronCoinSale, rateForWei, issueAddress, CuronCoin.address))
    .then(() => CuronCoin.deployed()
      .then(instance => instance.transfer(CuronCoinSale.address, initialSupply, { from: issueAddress }))
    )
};
