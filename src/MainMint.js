import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
//import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import ColeccionNFT3 from './ColeccionNFT3.json';

const ColeccionNFT3Address = "0x5069129df9156daF4204eFb6D32D3785C9F281CB"

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1); // El 1 indica la cantidad de minteos que va a hacer la persona
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                ColeccionNFT3Address,
                ColeccionNFT3.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount)); // Solidity requiere que se lo pase como BigNumber
                console.log('response: ', response)
            } catch (err) {
                console.log("error: ", err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    }

    const handleIncrement = () => {
        if (mintAmount >= 1) return;
        setMintAmount(mintAmount + 1);
    }

    return (
        <div>
            <h1>ColeccionNFT3</h1>
            <p>Sarabasa Barasa Sabaram some tarabam turubum tin ton toc tam ambaram</p>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <input type="number" value={mintAmount} />
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button onClick={handleMint}>Mint Now</button>
                </div>
            ) : (
                <p>You must be connected to Mint!</p>
            )}
        </div>
    )
}

export default MainMint;