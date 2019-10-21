import React, { Component } from 'react';
import Web3 from 'web3';
import ganache  from 'ganache-core';

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    const web3 = new Web3("http://localhost:22001");
    const accounts = await web3.eth.getAccounts();
    console.log(accounts, 'AC');
    this.setState({account: accounts[0]})
  }

  constructor(props) {
    super(props);
    this.state = {account: ''};
  }
  render() {
    return (
      <div>
        <h1>Quorum Test</h1>
        <p>Account for this node: {this.state.account}</p>
      </div>
    );
  }
}

export default App;
