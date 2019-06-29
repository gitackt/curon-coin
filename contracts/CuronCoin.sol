pragma solidity ^0.5.0;
import "node_modules/zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract TestToken is StandardToken {
  string public name = "CuronCoin";
  string public symbol = "CRC";
  uint public decimals = 18;

  function InitializeToken(uint initialSupply) public {
    totalSupply_ = initialSupply;
    balances[msg.sender] = initialSupply;
  }
}