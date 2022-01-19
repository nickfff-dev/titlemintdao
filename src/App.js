import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Front from './Front';
import { ethers } from 'ethers';


const contractAd = '0x2737462a68798623f3ef2956a04ed503300c751e'
const contractABI = contractAd.abi

function App() {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [mintNumber, setMintNumber] = useState(null);


  const handleChange = (event) => {
    setMintNumber(event.target.value);
  }

  const checkWalletIsConnected = () => {
    const { ethereum } = window;
    if(!ethereum){
      alert('Please install MetaMask')
      return;
    }
   

   }

  const connectWalletHandler = async () => { 
    const { ethereum } = window;
    if(!ethereum){
      alert('Please install MetaMask')
    }
    try {
      const accounts = await ethereum.request({method: 'eth_requestAccounts'});
      await ethereum.request({method: 'eth_requestAccounts'});
      alert("found an account", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      alert("error", error);
  }
  }

  const mintNftHandler = async () => {
    try {
      const { ethereum } = window;
      if (ethereum){
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAd, contractABI, signer);
        const tx = await contract.mintNFTs(1, {value: ethers.utils.parseEther('0.0')});
        console.log(tx)
        alert.log('mining please wait')
        await tx.wait();
        alert.log('minted')
        return ( <div className="row mt-5 suc">
        <div className="col-sm-3 mt-5"></div>
        <div className="col-sm-5 mt-5">
            <div>Success</div>
            <div>https://etherscan.io/address/0x2737462a68798623f3ef2956a04ed503300c751e</div>
            
        </div>
        <div className="col-sm-4 mt-5"></div>
    </div>)



        

        
      } else{
        alert('ethereum object doesnt exist')
      }
    } catch (error) {
      console.log("error", error);
    }

   }





  const beforeMint = () => {
    return(
      <div className="row mt-5 sub">
      <div className='col-sm-3 mt-5'></div>
      <div className='col-sm-5 mt-5'>
          <div className='row mt-5'> < button onClick={connectWalletHandler} className='poutline'>CONNECT WALLET</button></div>
          <div className='row mt-5'>
              <span class='contract'>contract:https://etherscan.io/address/0x2737462a687</span>
          </div>
      </div>
      <div className='col-sm-4 mt-5'></div>
  
  </div>
    )
  }
  
  const walletConnected = () => {
    return(
      <div className='row mint'>
      <div className='col-sm-3 mt-5'></div>
      <div className='col-sm-5 mt-5'>
          <div className='mt-5'> <h1>Mint</h1></div>
          <div> <input type='number' onChange={handleChange} placeholder='# of NFTs (MAX 20)'/>
  <button onClick={mintNftHandler}>mint</button>
  </div>
  
          <div>
              Max supply: 1000
          </div>
          <div> price: free</div>
          <div>
              contract: https://etherscan.io/address/0x2737462a68798623f3ef
          </div>
      </div>
      <div className='col-sm-3 mt-5'></div>
  </div>
    )
  }
  
  const afterMint = () => {
    return(
      <div className="row mt-5 suc">
                  <div className="col-sm-3 mt-5"></div>
                  <div className="col-sm-5 mt-5">
                      <div>Success</div>
                      <div>https://etherscan.io/address/0x2737462a68798623f3ef2956a04ed503300c751e</div>
                      <div> click here to mint again</div>
                  </div>
                  <div className="col-sm-4 mt-5"></div>
              </div>
    )
  }
 
  
  
  return (
    <div className="container-fluid">

      <Front/>
      {currentAccount ? walletConnected() : beforeMint()}
    </div>
  );
}

export default App;
