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
const commander_1 = require("commander");
const Check_1 = require("./Check");
const Receipt_1 = require("./Receipt");
const index_1 = require("./index");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
commander_1.program
    .name("ether")
    .description("using command to check balance")
    .version("0.1.0");
commander_1.program
    .command("balance <address>")
    .description("using command to check balance")
    .action((address) => __awaiter(void 0, void 0, void 0, function* () {
    const balance = yield (0, Check_1.getbalance)(address);
    console.log(`balance of ${address} : ${balance} ETH`);
}));
commander_1.program
    .command("check <hash>")
    .description("using command to check transaction Receipt")
    .action((hash) => __awaiter(void 0, void 0, void 0, function* () {
    const Receipt = yield (0, Receipt_1.getTransactionReceipt)(hash);
    console.log(`Receipt of ${hash}`, Receipt);
}));
commander_1.program
    .command("send <amount> <receipient>")
    .description("using command to send tranction")
    .action((amount, receipient) => __awaiter(void 0, void 0, void 0, function* () {
    const txn = yield (0, index_1.sendeth)(amount, receipient);
    console.log("Transaction Detail", txn.hash);
}));
commander_1.program.parse();
