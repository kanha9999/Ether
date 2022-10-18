
import { ethers, Wallet } from "ethers";
import dotenv from "dotenv";
import { getbalance } from "./Check";


dotenv.config();

// const provider=new ethers.providers.InfuraProvider('goerli',process.env.API_KEY);
// const account1='0xC041901576fb2c0250EF87f1B6e6bDe503fC167F';
// const account2='0xcA48907b4883e373F970F8DfE392D4c6e9220685';

export const sendeth= async ( amount:string , receipient:string ): Promise<ethers.providers.TransactionResponse> =>{
  
  const provider=new ethers.providers.InfuraProvider('goerli',process.env.API_KEY);

    if(!process.env.PRIVATE_KEY)throw new Error("PRIVATE_KEY is not set");

    const wallet=new Wallet(process.env.PRIVATE_KEY, provider);
    // const sendTransaction=await provider.getBalance(address);
    const signer= wallet.connect(provider);
    // const receiverTransaction=await provider.getBalance(address);
    const balance = await getbalance(wallet.address)

    console.log(`balance of sender : ${balance} ETH`)

  // console.log("Sender Balance",ethers.utils.formatEther(sendTransaction));
  //   console.log("Receiver Balance",ethers.utils.formatEther(receiverTransaction));

const tx=  {
    from: wallet.address,
    to: receipient,
    value: ethers.utils.parseEther(amount),
}
const transaction=await signer.sendTransaction(tx);
return transaction;
};