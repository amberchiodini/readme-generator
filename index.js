// internal & external packages
const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generate = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
{
    type: 'input',
    message: 'What is your Github username?',
    name: 'username',
},
{
    type: 'input',
    message: 'What is the name of your Github repository?',
    name: 'repository',
},
{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
},
{
    type: 'input',
    message: 'Provide a description of your project.',
    name: 'description',
},
{
    type: 'input',
    message: 'Provide any necessary steps to install your project.',
    name: 'installation',
},
{
    type: 'input',
    message: 'Provide an expected output for your project.',
    name: 'usage',
},
{
    type: 'input',
    message: 'Provide any necessary guidelines for how other developers can contribute to your project.',
    name: 'contribution',
},
{
    type: 'input',
    message: 'Provide any necessary tests for your project and how to run them.',
    name: 'test',
},
{
    type: 'list',
    message: 'Choose a license for your project.',
    choices: ['MIT', 'Apache-2.0', 'GPL-3.0'],
    name: 'license',
},
];

inquirer.prompt(questions)
.then(function(data) {
    const queryURL = `https://api.github.com/users/${data.username}`;
    axios.get(queryURL).then(function(res) {
        const githubInfo = {
            githubImage: res.data.avatar_url,
                email: res.data.email,
                profile: res.data.html_url,
                name: res.data.name
        };

// function to write README file
        fs.writeFile('README.md', generate (data, githubInfo), function (err) {
            if (err) throw err;
            console.log('Success! Your README.md file has been generated.');
        }); 
    });
});

// function to initialize program
function init() {
}

// function call to initialize program
init();