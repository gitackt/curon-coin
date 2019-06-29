import React, { Component } from "react";
// import CuronCoinContract from "./contracts/CuronCoin.json";
// import getWeb3 from "./utils/getWeb3";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  // componentDidMount = async () => {
  //   try {
  //     // Get network provider and web3 instance.
  //     const web3 = await getWeb3();

  //     // Use web3 to get the user's accounts.
  //     const accounts = await web3.eth.getAccounts();

  //     // Get the contract instance.
  //     const networkId = await web3.eth.net.getId();
  //     const deployedNetwork = CuronCoinContract.networks[networkId];
  //     const instance = new web3.eth.Contract(
  //       CuronCoinContract.abi,
  //       deployedNetwork && deployedNetwork.address,
  //     );

  //     // Set web3, accounts, and contract to the state, and then proceed with an
  //     // example of interacting with the contract's methods.
  //     this.setState({ web3, accounts, contract: instance }, this.runExample);
  //   } catch (error) {
  //     // Catch any errors for any of the above operations.
  //     alert(
  //       `Failed to load web3, accounts, or contract. Check console for details.`,
  //     );
  //     console.error(error);
  //   }
  // };

  // runExample = async () => {
  //   const { accounts, contract, web3 } = this.state;
  //   const token = new web3.eth.Contract(contract.abi, contract.address)
  //   console.warn(accounts[0]);
  //   console.warn(token);
  // };

  render() {
    // if (!this.state.web3) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // }
    return (
      <div className="App">
        <h3>MICIN</h3>
        <h1>CuronCoin</h1>
        <h2>Airdrop</h2>

        <div>aaa</div>
      </div>
    );
  }
}

export default App;
