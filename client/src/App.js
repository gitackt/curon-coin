import React, { Component } from "react";
import CuronCoinContract from "./contracts/CuronCoin.json";
import getWeb3 from "./utils/getWeb3";
import * as axios from 'axios';

class App extends Component {
  state = { 
    web3: null, 
    accounts: null, 
    instance: null,
    value: 0,
    rate: 0,
    error: null,
  };

  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const instance = new web3.eth.Contract(CuronCoinContract.abi, CuronCoinContract['networks']['5777']['address']);
      const ethjpy = await axios.get('https://api.coinmarketcap.com/v2/ticker/1027/?convert=JPY');
      this.setState({ web3, accounts, instance, rate: ethjpy.data.data.quotes.JPY.price });
    } catch (error) {
      alert(`Failed to load web3, accounts, or contract. Check console for details.`);
    }
  };

  buyCoin = async () => {
    if (this.state.value !== 0 && this.state.value !== null && !isNaN(this.state.value)) {
      this.setState({error: null})
      console.warn(this.state.instance.methods.name().call());

    } else {
      this.setState({error: "Please input valid CURON amount."})  
    }
  };

  ethPrice() {
    return Math.round(this.state.value * (0.02 /this.state.rate) * 1000000) / 1000000;
  }

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

        <input 
          type="text" 
          name="value" 
          style={styles.inputForm}
          placeholder="CURON amount"
          value={this.state.value} 
          onChange={(e) => this.setState({value: e.target.value})}
        />
        <div style={styles.ethPrice}>{this.ethPrice()}ETH</div>
        <div
          style={styles.button}
          onClick={() => this.buyCoin()}
        >
          Buy Token
        </div>
        {this.state.error !== null && <div style={styles.errorMessage}>{this.state.error}</div>}
      </div>
    );
  }
}

export default App;
