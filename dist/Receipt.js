"use strict";
// console.log('Hello World');
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
exports.getTransactionReceipt = void 0;
////Transaction Receipt
const ethers_1 = require("ethers");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const getTransactionReceipt = (hash) => __awaiter(void 0, void 0, void 0, function* () {
    const provider = new ethers_1.ethers.providers.InfuraProvider('goerli', process.env.API_KEY);
    const Receipt = yield provider.getTransactionReceipt(hash);
    return Receipt;
    // console.log(Receipt.logs[0]);
});
exports.getTransactionReceipt = getTransactionReceipt;
