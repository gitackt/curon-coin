pragma solidity ^0.4.24;
import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract CuronCoin is StandardToken {
  string public name = "CuronCoin";
  string public symbol = "CRC";
  uint public decimals = 18;

  function InitializeToken(uint initialSupply) public {
    totalSupply_ = initialSupply;
    balances[msg.sender] = initialSupply;
  }
}