import React from 'react';
import { Box, Button, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import Facebook from "./assets/facebook_icon_80.png";
import Twitter from "./assets/twitter_icon_80.png";
import Instagram from "./assets/instagram_icon_80.png";
import { ethers, BigNumber } from 'ethers';
import PuzzleJSON from './Puzzle2.json';

const PuzzleAddress = "0x49418df5e1e7b2Ae6216BDC61167b871714D5627"
// accounts y setAccounts son los parametros que se pasan desde el main App.js
const NavBar = ({ accounts, setAccounts, setTokenId }) => {
    const isConnected = Boolean(accounts[0]); // Esto detecta cuando estamos o no conectados

    // Esta funcion hace update de accounts en App.js
    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
            console.log(accounts[0])
        }
    }

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                PuzzleAddress,
                PuzzleJSON.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(1), { value: 100000000000000 }); // Solidity requiere que se lo pase como BigNumber
                // const response = await contract.mint(BigNumber.from(mintAmount)); // Solidity requiere que se lo pase como BigNumber
                await response.wait();
                console.log('response: ', response)
                const response2 = await contract.tokenId();
                setTokenId(response2.toNumber() - 1)
                console.log(`NavBar: ${response2.toNumber() - 1}`)
            } catch (err) {
                console.log("error: ", err)
            }
        } else {
            console.log("window.ethereum = false")
        }
    }

    return (

        <Flex justify="space-between" align="center" padding="30px" background="black" >

            {/* Left Side - Social Media Icons */}
            <Flex justify="space-around" width="40%" padding="0 75px">
                <Link href="https://www.facebook.com">
                    <Image src={Facebook} boxSize="80px" margin="0 15px" />
                </Link>
                <Link href="https://www.twitter.com">
                    <Image src={Twitter} boxSize="80px" margin="0 15px" />
                </Link>
                <Link href="https://www.gmail.com">
                    <Image src={Instagram} boxSize="80px" margin="0 15px" />
                </Link>
            </Flex>


            {/* Right Side - Sections and Connect */}
            <Flex justify="space-around" align="center" width="40%" padding="30px">
                <Box textColor='white' margin="0 15px" fontSize='40px' cursor="pointer" >About</Box>
                <Spacer />
                {/* <Box textColor='white' onClick={handleMint} margin="0 15px" cursor="pointer" fontSize='40px'>Mint</Box> */}
                <Box textColor='white' onClick={isConnected ? handleMint : null} margin="0 15px" cursor="pointer" fontSize='40px'>Mint</Box>
                <Spacer />
                <Box textColor='white' margin="0 15px" fontSize='40px' cursor="pointer">Team</Box>
                <Spacer />
                <div>
                    {/* Connect */}
                    {isConnected ? (
                        <Button background="#64AB40"
                            borderRadius="5px"
                            boxShadow="0px 2px 2px 1px #0F0F0F"
                            color="white"
                            fontFamily="inherit"
                            padding="15px"
                            margin="0 15px"
                            width="200px"
                            height="70px"
                            fontSize='30px'>Connected</Button>
                    ) : (
                        <Button
                            background="#D6517D"
                            borderRadius="5px"
                            boxShadow="0px 2px 2px 1px #0F0F0F"
                            color="white"
                            cursor="pointer"
                            fontFamily="inherit"
                            padding="15px"
                            margin="0 15px"
                            width="200px"
                            height="70px"
                            fontSize='30px'
                            onClick={connectAccount}>Connect</Button>
                    )}
                    <div>
                        <p style={{ color: 'white', fontSize: 25, float: 'right' }}>{accounts[0]}</p>
                    </div>
                </div>
            </Flex>

        </Flex>

    )
}

export default NavBar;