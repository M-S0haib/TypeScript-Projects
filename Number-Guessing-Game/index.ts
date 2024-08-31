import inquirer from 'inquirer';

console.log("Welcome to Number Guessing game"  );
console.log("Enter a range and guess the random number within it.");



const number = await inquirer.prompt([
    {message:"Enter the number where the range should start. " , type: "number" , name:"firstNum"},

    {message:"Enter the number where the range should end. " , type: "number" , name:"lastNum"}

]);


let finalNumber:number =  number.firstNum  + Math.floor(Math.random() * (number.lastNum - number.firstNum  + 1)) 

const givenNum = await inquirer.prompt([
  {message: " write the number you guessed: " , type:"number" , name: "gussedNum"}
])


if (givenNum.gussedNum > finalNumber ){
  console.log("Too high! Try again next time :(");
}

else if(givenNum.gussedNum < finalNumber ){
  console.log("Too low! Try again next time :(");
}

else{
  console.log("Congratulations! You guessed the correct number!");
  
}

 console.log(`The random number is ${finalNumber}`);

