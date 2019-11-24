import Web3 from 'web3';
import { abi } from './abi/HTLC.json';

const web3 = new Web3(window.web3.currentProvider);
const address = '0x28036faac15a38c7ed715e8b2a32549dd4cd74eb'; //コントラクトアドレス
export default new web3.eth.Contract(abi,address);  //abiとコントラクトアドレスからインスタンスを作成