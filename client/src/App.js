import React, { Component } from "react";
import Web3 from "web3";

import CuronCoinSaleContract from "./contracts/CuronCoinSale.json";
import { nodeUrlDev } from './urls';

class App extends Component {
  state = { 
    web3: null, 
    accounts: null, 
    instance: null,
    value: 0,
  };

  componentDidMount = async () => {
    try {
      const provider = new Web3.providers.HttpProvider(nodeUrlDev);
      const web3 = new Web3(provider);
  
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = CuronCoinSaleContract.networks[networkId];
      const instance = new web3.eth.Contract(CuronCoinSaleContract.abi, deployedNetwork.address);
  
      this.setState({ web3, accounts, instance });

    } catch (error) {
      alert(`Failed to load web3, accounts, or contract. Check console for details.`);
    }
  };

  buyCoin = async () => {
    if (this.state.value !== 0 && this.state.value !== null && !isNaN(this.state.value)) {
      this.state.instance.methods.buyTokens(
        this.state.accounts[0]).send(
          {
            value: this.state.web3.utils.toWei(this.state.value, "ether"), 
            from: this.state.accounts[1],
            gas: 1000000
          }
        ).then(value => {
          alert(`Success!`);
        }).catch(e => {
          alert(e);
        })
    } else {
      alert(`Please input valid CURON amount.`);
    }
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }

    const styles = {
      container: {
        width: '100%',
        paddingTop: '150px',
        textAlign: 'center',
      },
      button: {
        background: 'black',
        color: 'white',
        borderRadius: '10px',
        textAlign: 'center',
        width: '150px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '20px',
        marginTop: '30px',
        fontWeight: 'bold',
        cursor: 'pointer',
      },
      ethPrice: {
        marginTop: '10px',
        fontSize: '12px',
        color: '#595959',
      },
      inputForm: {
        borderRadius: '10px',
        border: '1px solid #595959',
        padding: '10px',
        marginTop: '30px'
      },
      errorMessage: {
        margin: '20px',
        color: 'red'
      }
    }

    return (
      <div style={styles.container}>
        <h3>MICIN</h3>
        <h1>CuronCoin</h1>
        <h2>CURON</h2>

        <input 
          type="text" 
          name="value" 
          style={styles.inputForm}
          placeholder="ETH amount"
          value={this.state.value} 
          onChange={(e) => this.setState({value: e.target.value})}
        />

        <div style={styles.button} onClick={() => this.buyCoin()}>Buy Token</div>
      </div>
    );
  }
}

export default App;
