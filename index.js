const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/page-template'); // make a template! \
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { default: Choice } = require('inquirer/lib/objects/choice');
// const { writeFile, copyFile } = require('./utils/generate-site');

const teamAnswers = [];
const promptManager = () => {

    return inquirer.prompt([
    //enter team managers name employee number, id, email, office number
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the team manager. (Required)',
        validate: (managerName) => {
            if (managerName) {
                return true;
            } else {
                console.log('Please enter the team managers name!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message:'Please enter the Team Managers employee id number. (Required)',
        validate: employeeId => {
            if (employeeId) {
                return true;
            } else {
                console.log('Please enter the Team Managers employee id number.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter Team Managers email address.(Required)',
        validate: managerEmail => {
            if (managerEmail) {
                return true;
            } else {
                console.log('Please enter Team Managers email address.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: 'Please enter Team Managers office number.(Required)',
        validate: managersOfficeNum => {
            if (managersOfficeNum) {
                return true;
            } else {
                console.log('Please enter Team Managers office number.')
                return false;
            }
        }
    },
    // {
    //     type: 'confirm',
    //     name: 'confirmEmployee',
    //     message: 'Would you like to add employees to your team?',
    //     default: false
    // }
    ])
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
        teamAnswers.push(manager);
        promptTeam();
    }); 
}

const promptTeam = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'position',
            message: 'Would you like to add a employee to your team or finish up?',
            choices: ['Engineer', 'Intern', 'Finish Up']
        },
    ])

    .then(({position}) => {
        if (position === 'Engineer') {
            promptEngineer()
        }
        else if (position === 'Intern') {
            promptIntern()
        } else if (position === 'Finish Up') {
            promptCreateHtml()
        }
      });
}

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the Engineer (Required)',
            validate: (engineerName) => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter the Engineers name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message:'Please enter the Engineers employee id number. (Required)',
            validate: engineerEmployeeId => {
                if (engineerEmployeeId) {
                    return true;
                } else {
                    console.log('Please enter the Engineers employee id number.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the Engineers email address.(Required)',
            validate: engineerEmail => {
                if (engineerEmail) {
                    return true;
                } else {
                    console.log('Please enter the Engineers email address.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter the Engineers Github profile username. (Required)',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Please enter the Engineers Github profile username.')
                    return false;
                }
            }
        },
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        teamAnswers.push(engineer);
        promptTeam();
    }); 
}

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the Intern (Required)',
            validate: (internName) => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter the Interns name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message:'Please enter the Interns employee id number. (Required)',
            validate: internEmployeeId => {
                if (internEmployeeId) {
                    return true;
                } else {
                    console.log('Please enter the Interns employee id number.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the Interns email address.(Required)',
            validate: internEmail => {
                if (internEmail) {
                    return true;
                } else {
                    console.log('Please enter the Interns email address.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter the Interns School. (Required)',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter the Interns School.')
                    return false;
                }
            }
        },
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        teamAnswers.push(intern);
        promptTeam();
    }); 
}

const promptCreateHtml = () => {
    console.log(data)
    fs.writeFile("./index.html", generateHTML(teamAnswers), err => {
        if (err) throw new Error(err);
        console.log("Success! The team page has been created!");
    })
}











// const promptTeam = teamData() => {
//     return inquirer.prompt
// }
// promptManager()
//     .then(promptTeam)
//     // .then(managerData =>{
//     //     return generateHTML(managerData)
//     // })

promptManager()