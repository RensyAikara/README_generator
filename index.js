var fs = require("fs");
var inquirer = require("inquirer");
var util = require("util");
var generateMarkdown = require("./utils/generateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);

// getting required details from user
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your full name?",
        name: "name"
    },
    {
        type: "input",
        message: "Current year",
        name: "year"
    },
    {
        type: "input",
        message: "What is your repo name?",
        name: "repo"
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Project Description",
        name:"description"
    },
    {
        type: "input",
        message: "What are the steps to install your project?",
        name:"installation"
    },
    {
        type: "input",
        message: "What are the instructions and examples for use?",
        name:"instruction"
    },
    {
        type: "input",
        message: "If you want to attach screenshots about usage, Metion name (press enter to skip)",
        name:"usageImageName"
    },
    {
        type: "input",
        message: "Mention path of screenshots (press enter to skip)",
        name:"usageImage"
    },
    {
        type: "input",
        message: "Mention collaborator name (press enter to skip)",
        name:"collaborator"
    },
    {
        type: "input",
        message: "Mention your collaborator link (press enter to skip)",
        name:"collaboratorlink"
    },
    {
        type: "input",
        message: "Mention tutorial name,if any (press enter to skip)",
        name:"tutorial"
    },
    {
        type: "input",
        message: "Mention tutorial link,if any (press enter to skip)",
        name:"tutoriallink"
    },
    {
        type: "input",
        message: "If you would like other developers to contribute, Add guidelines for how to do so(press enter to skip)",
        name: "guidelines"
    },
    {
        type: "input",
        message: "License used",
        name: "licenseName"
    },
    {
        type: "input",
        message: "Link to license text file",
        name: "licenseLink"
    },
    {
        type: "input",
        message: "Write test for your application",
        name: "testing"
    }
];

// calling generateMarkdown.js with the details user has provided
inquirer.prompt(questions)
            .then(function(answers){     
                const readMe = generateMarkdown(answers);
                return writeToFile("README.md", readMe)
            })
            .catch(function(err) {
                console.log(err);
              });

// Writing .md file
function writeToFile(fileName, data) {
    return writeFileAsync(fileName,data);

}