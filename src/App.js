import { useState } from 'react';
import './App.css';
import MainMint from './MainMint';
import Puzzle from './Puzzle';
import NavBar from './NavBar';
import { ethers, BigNumber } from 'ethers';
import PuzzleJSON from './Puzzle2.json';

const PuzzleAddress = "0x49418df5e1e7b2Ae6216BDC61167b871714D5627"

function App() {
  const [accounts, setAccounts] = useState([]);
  const [tokenId, setTokenId] = useState();
  const [chainId, setchainId] = useState();

  const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL

  async function checkPieces() {

    let provider = new ethers.providers.AlchemyProvider("rinkeby", RINKEBY_RPC_URL)
    const contract = new ethers.Contract(
      PuzzleAddress,
      PuzzleJSON.abi,
      provider
    );
    try {
      const response = await contract.tokenId();
      setTokenId(response.toNumber() - 1)
    } catch (err) {
      console.log("error: ", err)
    }

    provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    /////////////// PARA QUE HAGO CONNECT WALLET SI YA LOS DATOS. FUNCIONA IGUAL SIN CONNECT... SE PUEDE APRETAR MINT DE UNA...
    const signer = provider.getSigner();
    console.log(await signer.getAddress())
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    provider.on("network", async (newNetwork, oldNetwork) => {
      const network = await provider.getNetwork();
      setchainId(network.chainId);
      // if (oldNetwork) {
      //   window.location.reload()
      // } 
    })

    // if (window.ethereum) {
    //   const accounts = await window.ethereum.request({
    //     method: "eth_requestAccounts",
    //   });
    //   setAccounts(accounts);
    //   console.log(accounts[0])
    // }

  }

  checkPieces()

  return (

    <div className="App">
      <NavBar className="NavBar" accounts={accounts} setAccounts={setAccounts} setTokenId={setTokenId} />
      {/* <MainMint accounts={accounts} setAccounts={setAccounts} /> */}
      <Puzzle tokenId={tokenId} chainId={chainId} />
    </div>

  );
}

export default App;
