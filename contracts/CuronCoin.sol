pragma solidity ^0.5.0;
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract CuronCoin is ERC20, ERC20Detailed {
  constructor(uint256 initialSupply) ERC20Detailed("CuronCoin", "CURON", 18) public {
    _mint(msg.sender, initialSupply);
  }
}