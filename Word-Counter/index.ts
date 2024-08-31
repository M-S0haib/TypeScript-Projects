import inquirer from "inquirer";

const para = await inquirer.prompt([
  { 
    type: "input",
    message: "Enter a paragraph.",
    name: "paragraph"
  }
]);

let givenPara:string = para.paragraph

givenPara = givenPara.replace(/\s+/g , '' )

let wordCount = para.paragraph.split(/\s+/).filter((word:string) => word != '').length;


console.log(`\n The given paragraph has ${givenPara.length} characters and ${wordCount} words`);











