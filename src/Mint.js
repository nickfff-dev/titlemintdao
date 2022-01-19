import React from "react";
import contract from './contracts/contractabi.json'
import { ethers } from 'ethers';



const contractAddress = '0x2737462a68798623f3ef2956a04ed503300c751e'
const contractABI = contract.abi


class Mint extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            account: '',
   
        }
    } checkWalletIsConnected () {
        var ethereum  = window.ethereum;
        if (typeof ethereum !== 'undefined') {
            console.log('Connected to MetaMask')
            return true;
        } else {
            console.log('Please install MetaMask')
            return false;
        }
        
     }

     connectWalletHandler () {
        var ethereum  = window.ethereum;
        var ethereum  = window.ethereum;
        if (typeof ethereum !== 'undefined') {
            alert('Connected to MetaMask')
            
        } else {
            alert('Please install MetaMask')
           
        }

        try {
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            console.log("found an account", accounts[0]);
            this.setState({account: accounts[0]});
        } catch (error) {
            console.log("error", error);
        }
      }
  
    async mintNftHandler (){
        if(this.checkWalletIsConnected()){
            alert('Connected to MetaMask')
            var provider = ethers.getDefaultProvider('ropsten')
            var wallet = new ethers.Wallet(this.state.account, provider)
            var contract = new ethers.Contract(contractAddress, contractABI, wallet)
            var tx = await contract.mint(this.state.account, 1)
            console.log(tx)
            alert('minted')
        }
        else{
            alert('Please install MetaMask')
        }
    }
   

        
        
    render(){
        return(
            <div></div>
        )
    }
        
        
        
        
        
        }