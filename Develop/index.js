// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter a project description!');
                return false;
            }
        }
    },
    // Table of contents will go here
    {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Would you like to enter some information about your "Installation" section?',
        default: true
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide some information your installation:',
        when: ({ confirmInstallation }) => confirmInstallation
    },
    {
        type: 'confirm',
        name: 'confirmUsage',
        message: 'Would you like to enter some information about your "Usage" section?',
        default: true
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide some information your usage:',
        when: ({ confirmUsage }) => confirmUsage
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to enter some information about your "License" section?',
        default: true
    },
    {
        type: 'input',
        name: 'license',
        message: 'Provide some information your license:',
        when: ({ confirmLicense }) => confirmLicense
    },
    {
        type: 'confirm',
        name: 'confirmBadge',
        message: 'Would you like to enter some information about your "Badge" section?',
        default: true
    },
    {
        type: 'input',
        name: 'badge',
        message: 'Provide some information your badge:',
        when: ({ confirmBadge }) => confirmBadge
    },
    {
        type: 'confirm',
        name: 'confirmContributing',
        message: 'Would you like to enter some information about your "Contributing" section?',
        default: true
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide some information your contribution:',
        when: ({ confirmContributing }) => confirmContributing
    },
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to enter some information about your "Tests" section?',
        default: true
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide some information your tests:',
        when: ({ confirmTests }) => confirmTests
    },
    {
        type: 'confirm',
        name: 'confirmQuestions',
        message: 'Would you like to ask any questions to the contributors?',
        default: true
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Provide some questions for the contributors:',
        when: ({ confirmQuestions }) => confirmQuestions
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(responses => {
        // console.log(responses);
        // console.log(generateMarkdown(responses));
        writeToFile("README.md", generateMarkdown(responses));
    })
}

// Function call to initialize app
init();
