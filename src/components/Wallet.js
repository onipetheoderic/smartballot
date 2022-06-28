import React from "react";
import { useEthers, useEtherBalance, Rinkeby, Kovan, Mainnet, } from '@usedapp/core'
import {formatEther} from "@ethersproject/units"

const btnStyle = (status) => ({
    borderRadius:4, 
    padding:4, 
    width:160, 
    color:"white",
    height:40, 
    border:'1px solid black', 
    backgroundColor:status==="connect" ?"green": "red"
})

const Wallet = () => {
    const {activateBrowserWallet, account, deactivate} = useEthers();
    const rinkebyBalance = useEtherBalance(account, {chainId: Rinkeby.chainId})
    const kovanBalance = useEtherBalance(account, {chainId: Kovan.chainId})
    const mainnetBalance = useEtherBalance(account, {chainId: Mainnet.chainId})
    return (
        <div>
            <h3>dApp Wallet</h3>
            {
                account 
                ? 
                <div>
                    <p>Your account: {account}</p> 
                    <button onClick={()=>deactivate()} style={btnStyle("disconnect")}>
                        Disconnect Wallet
                    </button>
                    {/* Display wallet Balance */}
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"center", gap:10}}>
                    {rinkebyBalance && <h4>Rinkeby Balance: {formatEther(rinkebyBalance)}</h4>}
                    {kovanBalance && <h4>kovan Balance: {formatEther(kovanBalance)}</h4>}
                    {mainnetBalance && <h4>mainnet Balance: {formatEther(mainnetBalance)}</h4>}
                    </div>
                   
                </div>
                
                : 
                <p>
                    Please Connect Wallet. <br />
                    <button onClick={()=>activateBrowserWallet()} style={btnStyle("connect")}>
                        Connect Wallet
                    </button>
                </p>
            } 
        </div>
    );
};

export default Wallet;
