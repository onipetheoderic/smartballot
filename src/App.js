/*Approach using useDapp*/
import React from "react";
import { DAppProvider, Rinkeby, Kovan, Mainnet,  } from '@usedapp/core';
import {getDefaultProvider} from 'ethers'
import Wallet from "./components/Wallet"
import './App.css';

function App() {
  const config = {
    networks: [Rinkeby],
    readOnlyChainId: Rinkeby.chainId,
    readOnlyUrls: {
      [Mainnet.chainId]: "https://mainnet.infura.io/v3/472da8fbc0a04e07a0de04187d8916de",
      [Rinkeby.chainId]:'https://rinkeby.infura.io/v3/472da8fbc0a04e07a0de04187d8916de',
      [Kovan.chainId]:'https://kovan.infura.io/v3/472da8fbc0a04e07a0de04187d8916de'
    },
    notifications: {
      expirationPeriod: 1000,
      checkInterval: 1000
    }
  }
return (
  <DAppProvider config={config}>
      <div className="App">
        <header className="App-header">
            <Wallet />
        </header>
      </div>
  </DAppProvider>
    );
}

/* Approach using Web3 module*/ 
// MAKE SURE react-script is in 4.0.2 when using web3

// import {useState, useEffect} from "react"
// import Web3 from "web3"
// import './App.css';


// function App() {
//  let balanceS = {
//    account:'',
//    network:'',
//    balance: '',
//  }
//  const [balance, setBalance] = useState(balanceS)
//   //when app first mount, perform an action


//   useEffect(()=>{
//     loadAccounts() 
//   },[])

//   useEffect(()=>{
//     loadBalance()
//   },[balance.account])
  
//   const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')
//   async function loadAccounts(){
//     const accounts = await web3.eth.requestAccounts()
//     setBalance({...balance, account: accounts[0]})
//   }
//   async function loadBalance (){
//     const network = await web3.eth.net.getNetworkType()
//     const bal = await web3.eth.getBalance(balance.account)
//     setBalance({...balance, network, balance:bal/1e18})
//   }
  
//   return (
//     <div className="App">
//       <header className="App-header">
//           Decentralized Ballot
//          <p>
//            Your Acount: {balance.account}
//          </p>
//          <p>
//            Your Balance ({balance.network}): {balance.balance}
//          </p>
//       </header>
//     </div>
//   );
// }

export default App;
