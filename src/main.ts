import {  program } from "commander"
import{ getbalance } from"./Check"
import{getTransactionReceipt} from"./Receipt"
import{sendeth} from "./index"
import dotenv from "dotenv";
dotenv.config();

program
.name("ether")
.description("using command to check balance")
.version("0.1.0")

program 
.command("balance <address>")
.description("using command to check balance")
.action(async(address)=>{
    const balance = await getbalance(address);

    console.log(`balance of ${address} : ${balance} ETH` )

});

program
.command("check <hash>")
.description("using command to check transaction Receipt")
.action(async(hash)=>{
    const Receipt=await getTransactionReceipt(hash);

    console.log(`Receipt of ${hash}`,Receipt)

});

program
.command("send <amount> <receipient>")
.description("using command to send tranction")
.action(async (amount, receipient) => { 
    const txn = await sendeth(amount, receipient)
    
    console.log("Transaction Detail" , txn.hash )

});

program.parse();

