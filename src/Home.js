import React from 'react';
import Front from './Front';
import {ethers} from 'ethers';
import contract from './contracts/contractabi.json'




const contractAddress = '0x2737462a68798623f3ef2956a04ed503300c751e'
const contractABI = contract.abi


class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            account:''
        }

    }
    componentDidMount(){
        var ethereum  = window.ethereum;
        if (typeof ethereum !== 'undefined') {
            alert('Connected to MetaMask')
          
        } else {
            alert('Please install MetaMask')
            
        }
        async function mintNftHandler (){
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
        mintNftHandler();
    }




    render(){
        return(
            <div className='container-fluid '>
                <div className='row'>
                    <Front/>
                </div>

                <div className="row mt-5 sub">
                    <div className='col-sm-3 mt-5'></div>
                    <div className='col-sm-5 mt-5'>
                        <div className='row mt-5'> < button className='poutline'>connect wallet</button></div>
                        <div className='row mt-5'>
                            <span>contract:https://etherscan.io/address/0x2737462a68798623f3ef2956a04ed503300c751e</span>
                        </div>
                    </div>
                    <div className='col-sm-4 mt-5'></div>

                </div>
            </div>
        )
    }
}

export default Home
