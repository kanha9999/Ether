// console.log('Hello World');

////Transaction Receipt

import{ethers} from "ethers";
import dotenv from "dotenv";
dotenv.config();


 export const getTransactionReceipt= async (hash:string)=>{
const provider =new ethers.providers.InfuraProvider('goerli',process.env.API_KEY);

const Receipt= await provider.getTransactionReceipt(hash)
 
return Receipt;
// console.log(Receipt.logs[0]);


}
