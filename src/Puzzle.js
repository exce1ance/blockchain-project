import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import Puzzle1 from './Puzzle.json';
import recuadro from './assets/recuadro.jpg';
import black_frame from './assets/black_frame.png';
import cont_blanco from './assets/cont_blanco3.png';

const PuzzleAddress = "0xE13E230b421D1D6F2680b04595af0c0a8ff94187"

const url1 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/A1.png"
const url2 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/A2.png"
const url3 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/A3.png"
const url4 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/A4.png"
const url5 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/A5.png"
const url6 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/B1.png"
const url7 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/B2.png"
const url8 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/B3.png"
const url9 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/B4.png"
const url10 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/B5.png"
const url11 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/C1.png"
const url12 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/C2.png"
const url13 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/C3.png"
const url14 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/C4.png"
const url15 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/C5.png"
const url16 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/D1.png"
const url17 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/D2.png"
const url18 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/D3.png"
const url19 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/D4.png"
const url20 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/D5.png"
const url21 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/E1.png"
const url22 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/E2.png"
const url23 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/E3.png"
const url24 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/E4.png"
const url25 = "https://gateway.pinata.cloud/ipfs/QmQnyhRmvrQUHyeuAvazwpzUKCN6tDHtKMmdeTWykq4Chd/E5.png"
const urlNegro = "https://gateway.pinata.cloud/ipfs/QmYsWMFkq954voAbHhRZUZBvdio6GZ7XGVPe3aJsKB4dKC"

//let tokenId = 0;

const Puzzle = ({ tokenId, chainId }) => {

    console.log(`Puzzle: ${tokenId}`)

    return (

        <>
            {/* style={{ background: "white" }} */}
            <div style={{ position: 'relative' }}>
                {/* <img style={{
                    width: '40%', position: 'absolute', left: '30%', top: '-90%'
                }} src={cont_blanco}>
                </img> */}
                <div style={{ position: 'relative', left: '0%', top: '-50%' }}>
                    <h1>{chainId === 4 ? null : "Please Connect to Rinkeby Network to use this page."}</h1>
                    <h1>Still {tokenId === undefined ? "-" : (25 - tokenId)} NFT to go</h1>
                    <h1>Click on Mint and be part of this amazing project!</h1>
                    <h1>You will receive the full NFT picture when completed</h1>
                </div>
            </div>
            <div style={{ position: 'relative', paddingBlock: '10%' }}>
                <div>
                    <img alt="imgPuzzle" style={{
                        width: 1153, height: 1130, position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)', marginBlock: '5%'
                    }} src={black_frame}></img>
                </div>

                <div style={{
                    width: 890, height: 800, position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'black', marginBlock: '5%'
                }}>
                    <img src={tokenId >= 1 ? url1 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 22 ? url6 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 19 ? url11 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 7 ? url16 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 20 ? url21 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 16 ? url2 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 15 ? url7 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 6 ? url12 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 21 ? url17 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 18 ? url22 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 8 ? url3 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 25 ? url8 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 14 ? url13 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 2 ? url18 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 13 ? url23 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 9 ? url4 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 3 ? url9 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 23 ? url14 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 12 ? url19 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 11 ? url24 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 10 ? url5 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 5 ? url10 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 24 ? url15 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 4 ? url20 : urlNegro} alt="imgPuzzle"></img>
                    <img src={tokenId >= 17 ? url25 : urlNegro} alt="imgPuzzle"></img>
                </div>
            </div>

        </>
    )
}

export default Puzzle;