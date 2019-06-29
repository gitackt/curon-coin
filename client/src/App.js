import React, { Component } from "react";
import CuronCoin from "./contracts/CuronCoin.json";
import getWeb3 from "./utils/getWeb3";

class App extends Component {
  state = { 
    web3: null, 
    accounts: null, 
    instance: null,
    value: 0,
    ethPrice: 0,
  };

  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const instance = new web3.eth.Contract(CuronCoin.abi, CuronCoin.address);
      console.warn(CuronCoin.address);
      this.setState({ web3, accounts, instance });
    } catch (error) {
      alert(`Failed to load web3, accounts, or contract. Check console for details.`);
    }
  };

  buyCoin = async () => {
    alert(this.state.instance.methods.name().call())
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
          placeholder="MCM amount"
          value={this.state.value} 
          onChange={(e) => this.setState({value: e.target.value})}
        />
        <div style={styles.ethPrice}>{this.state.ethPrice}ETH</div>
        <div
          style={styles.button}
          onClick={() => this.buyCoin()}
        >
          Buy Token
        </div>
      </div>
    );
  }
}

export default App;
