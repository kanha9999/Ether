

const{ ethers }=require("ethers");
require("dotenv").config();


export const getbalance= async (address:string) :Promise <String>=> {
  
  const provider = new ethers.providers.getDefaultProvider("goerli" ,
    process.env.RPC_ENDPOINT);

  const balance = await provider.getBalance(address);

  const formatted = ethers.utils.formatEther(balance);
  //    ethers.utils.parseEther(balance);
 return formatted;
  
}
   