import React, { Component } from 'react';
import './App.css';
//import web3 from './web3';
import Web3 from 'web3'
import htlc from './htlc';

let web3Provider;
let web3;

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      existMetaMask: false,
      phase: 'beforeDeploy',
      manager: '',
      trader: '',
      swapUnits: '',
      swapAmount: '',
  };
}


async componentDidMount() { //render後にコントラクトのstateをgetしてくる
  if (window.ethereum) {
    try {
      // Request account access
      await window.ethereum.enable()
      web3Provider = window.ethereum;
      this.existMetaMask = true;
    } catch (error) {
      // User denied account access...
      alert("MetaMaskをインストールして下さい");
      return
    }
  }
  web3 = new Web3(web3Provider);
  this.selectedAddress = web3Provider.selectedAddress;
  this.setState({ manager: this.selectedAddress}); //classのsatateをブロックチェーン上のものと同期させる
}


  render() {
    if(this.state.phase = 'beforeDeploy'){
      return(
        <div>
          <h2>HTLCでAtomic Swap!!!</h2>
          <p>ようこそ{this.state.manager}さん</p>
          <p>現在の残高は{}Scam Security、{}Scam Coinです</p>
          <p>Alice {} | {}</p>
          <p>Bob {} | {}</p>
          <p>Charlie {} | {}</p>
          <p>Atomic Swapしたい相手のアドレスを入力してください！</p>
          <div>
            <input
            value={this.state.value}
            onChange={event => this.setState({ trader: event.target.value })}
            />
          </div>
          <p>Atomic Swapの内容を入力してください！</p>
          <div> 
            <p>Eth</p>
            <div>
              <input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
              />
            </div>
            <p>scam coin</p>
            <div>
              <input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
              />
      　    </div>
          </div> 
        </div>
      )
    }else if(this.state.phase = 'halfDeposited'){
      return(
        <div>
        <h2>HTLCでAtomic Swap!!!</h2>
        <p>ようこそ{this.state.manager}さん</p>
        <p>このコントラクトは {} さんと {} によるAtomic Swapです</p>
        <p>現在 {} さんがデポジット中です。{}さんは {} デポジットしてください</p>
        </div>
        )
    }else if(this.state.phase = 'bothDeposited'){
      return(
        <div>
        <h2>HTLCでAtomic Swap!!!</h2>
        <p>ようこそ{this.state.manager}さん</p>
        <p>現在 {} さん {} さん両者ともデポジット完了です。</p>
        <p>{} さんは {}さんのデポジットを引き出してください</p>
        </div>
        )
    }else if(this.state.phase = 'halfWithdrawed'){
      return(
        <div>
        <h2>HTLCでAtomic Swap!!!</h2>
        <p>ようこそ{this.state.manager}さん</p>
        <p>現在 {} さんは {}さんのデポジットを引き出しました</p>
        <p>{} さんは {}さんのデポジットを引き出してください</p>
        </div>
        )
    }
    }
  }
  
  export default App;