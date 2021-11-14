const fs = require("fs")
const inquirer = require("inquirer")

inquirer.prompt([
    {
        message: 'What is your Github username?',
        type: 'input',
        name: 'github'
    },
    {
        message: 'What is your email address?',
        type: 'input',
        name: 'email'
    },
    {
        message: 'What is the name of the project?',
        type: 'input',
        name: 'title'
    },
    {
        message: 'Please write a short description of your project?',
        type: 'input',
        name: 'description'
    },
    {
        message: 'What kind of license should your project have?',
        type: 'list',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        message: 'What command should we run to run dependencies?',
        type: 'input',
        name: 'installation'
    },
    {
        message: 'What does the user need to know about using your repo?',
        type: 'input',
        name: 'usage'
    },
    {
        message: 'What does the user need to know about contributing to the repo?',
        type: 'input',
        name: 'contributing'
    },
    {
        message: 'What command should be run to run tests?',
        type: 'input',
        name: 'tests'
    }
]).then ((response)=>{
    fs.writeFile('README.md', `
    # ${response.title}

## Description
${response.description}

## Table of Contents (Optional)


* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
${response.installation}

## License
${response.license}

##Badges
![Github license](https://img.shields.io/badge/license-${response.license}-blue.svg)

## Usage
${response.usage}

## Contributing
${response.contributing}

## Tests
${response.tests}



    `, function(err){
        if (err) {
            return console.log(err);
        }})


})

