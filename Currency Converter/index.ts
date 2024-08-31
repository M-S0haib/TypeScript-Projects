import inquirer from "inquirer";
console.log();

console.log("                      ***** Currency Converter *****");

console.log();

const choices = await inquirer.prompt([{
message:"Select the currency to Convert $ into",
type:"list",
name:"givenCurrency",
choices:["BitCoin","Euro","Pound","Dinar","Rupees","Taka"]
}])

const amount = await inquirer.prompt([{
    message:"Enter the amount",
    type:"number",
    name:"Amount",
    }])


console.log();


if(amount.Amount=="number")
    {
    if (choices.givenCurrency=="BitCoin"){
        let finalCurrency =amount.Amount*0.000016
        console.log(finalCurrency, "₿");
        
    }
    else if (choices.givenCurrency=="Euro"){
        let finalCurrency =amount.Amount*0.94
        console.log(finalCurrency,"€");
        
    }
    else if (choices.givenCurrency=="Pound"){
        let finalCurrency =amount.Amount*0.80
        console.log(finalCurrency,"£");
        
    }
    else if (choices.givenCurrency=="Dinar"){
        let finalCurrency =amount.Amount*0.31
        console.log(finalCurrency,"د.ك");
        
    }
    else if (choices.givenCurrency=="Rupees"){
        let finalCurrency =amount.Amount*278.45
        console.log(finalCurrency, "rs");
        
    }
    else if (choices.givenCurrency=="Taka"){
        let finalCurrency =amount.Amount*109.70
        console.log(finalCurrency, "৳");
        
    }
}

else{
    console.log("Error!", "Please enter a number");
    
}