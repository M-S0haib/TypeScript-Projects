"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let userId = 155704;
let userPin = 2354;
let balance = 50000;
const info = await inquirer_1.default.prompt([
    { message: "Enter your user id", type: "number", name: "id" },
    { message: "Enter your 4-digits pin", type: "number", name: "pin" },
]);
if (userId == info.id) {
    if (userPin == info.pin) {
        const bankingOptions = await inquirer_1.default.prompt([{
                message: "Chose the banking option",
                type: "list",
                name: "options",
                choices: ["Check Balance", "Cash withdrawl",]
            }]);
        if (bankingOptions.options == "Check Balance") {
            console.log("Your total balance is", balance);
        }
        else if (bankingOptions.options == "Cash withdrawl") {
            const withdrawl = await inquirer_1.default.prompt([{
                    message: "Enter the Amount",
                    type: "number",
                    name: "cashWithdrawl"
                }]);
            let finalAmount = balance - withdrawl.cashWithdrawl;
            console.log(withdrawl.cashWithdrawl, "rs", "cash withdrawl succesfully.  ", "Your total balance is now", finalAmount, "rs");
        }
    }
    else {
        console.log("Incorrect Id or Pin");
    }
}
else {
    console.log("Incorrect Id or Pin");
}
