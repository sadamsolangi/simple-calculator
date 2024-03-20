#! /usr/bin/env node
import inquirer from "inquirer";

const Answers = await inquirer.prompt([{
    name: "NumberOne",
    type: "number",
    message: "Enter your frist number:",
},
{
    name: "NumberTwo",
    type: "number",
    message: "Enter your second number:",   
},
{
    name: "Operator",
    type: "list",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    message: "Select Operator:",
}
])
if (Answers.Operator == "Addition") {
    console.log(Answers.NumberOne + Answers.NumberTwo);
}else if (Answers.Operator == "Subtraction") {
    console.log(Answers.NumberOne - Answers.NumberTwo);
    
}else if (Answers.Operator == "Multiplication") {
    console.log(Answers.NumberOne * Answers.NumberTwo);
    
}else if (Answers.Operator ==="Division") {
    console.log(Answers.NumberOne / Answers.NumberTwo);
    
}else {
    console.log("Please enter valid operator!");
    
}

console.log("Thanks for using my calculator(:)");
