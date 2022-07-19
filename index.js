// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs')
const genMD = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What would you like the title of your README to be?",
    },
    {
        type: "input",
        name: "githubUser",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "emailAddress",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter the description of your app.",
    },
    {
        type: "input",
        name: "instructions",
        message: "Please enter any applicable installation instructions.",
    },
    {
        type: "input",
        name: "usageInfo",
        message: "What are some examples in which this code could be used?",
    },
    {
        type: "input",
        name: "testInfo",
        message: "Please include step by step instructions on how to test your code.",
    },
    {
        type: "list",
        name: "licenseList",
        message: "Which license will you be using?",
        choices: ["mit", "apache", "agpl", "no license"]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => console.log(err))
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile('README.md', genMD(answers))
       
    });

}

// Function call to initialize app
init();

