"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendeth = void 0;
const ethers_1 = require("ethers");
const dotenv_1 = __importDefault(require("dotenv"));
const Check_1 = require("./Check");
dotenv_1.default.config();
// const provider=new ethers.providers.InfuraProvider('goerli',process.env.API_KEY);
// const account1='0xC041901576fb2c0250EF87f1B6e6bDe503fC167F';
// const account2='0xcA48907b4883e373F970F8DfE392D4c6e9220685';
const sendeth = (amount, receipient) => __awaiter(void 0, void 0, void 0, function* () {
    const provider = new ethers_1.ethers.providers.InfuraProvider('goerli', process.env.API_KEY);
    if (!process.env.PRIVATE_KEY)
        throw new Error("PRIVATE_KEY is not set");
    const wallet = new ethers_1.Wallet(process.env.PRIVATE_KEY, provider);
    // const sendTransaction=await provider.getBalance(address);
    const signer = wallet.connect(provider);
    // const receiverTransaction=await provider.getBalance(address);
    const balance = yield (0, Check_1.getbalance)(wallet.address);
    console.log(`balance of sender : ${balance} ETH`);
    // console.log("Sender Balance",ethers.utils.formatEther(sendTransaction));
    //   console.log("Receiver Balance",ethers.utils.formatEther(receiverTransaction));
    const tx = {
        from: wallet.address,
        to: receipient,
        value: ethers_1.ethers.utils.parseEther(amount),
    };
    const transaction = yield signer.sendTransaction(tx);
    return transaction;
});
exports.sendeth = sendeth;
