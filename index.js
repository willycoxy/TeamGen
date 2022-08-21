const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/page-template'); // make a template! \
// const { writeFile, copyFile } = require('./utils/generate-site');

const promptManager = managerData => {

    return inquirer.prompt([
    //enter team managers name employee number, id, email, office number
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the team manager. (Required)',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message:'Please enter your employee id number. (Required)',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter your employee id number.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.(Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: 'Please enter your office number. (Required)',
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log('Please enter your office number')
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmEmployee',
        message: 'Would you like to add employees to your team?',
        default: false
    }
    ])
    .then(teamData => {
        managerData.projects.push(teamData);
        if (teamData.confirmEmployee) {
          return promptManager(managerData);
        } else {
          return managerData;
        }
    }); 
}

// const promptTeam = teamData() => {
//     return inquirer.prompt
// }



promptManager()
    .then(promptTeam)
    .then(managerData =>{
        return generateHTML(managerData)
    })