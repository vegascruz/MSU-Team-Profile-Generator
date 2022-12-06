//node modules
var inquirer = require('inquirer');
const fs = require('fs'); 
//this file runs the code to create an HTML file
const generateHTML = require('./src/generateHTML');
//imported classes or 'team profile's ' : NOTE - the employee class isn't being transported,
//because all the other classes inherit its traits
const Manager = require('./library/Manager');
const Engineer = require('./library/Engineer');
const Intern = require('./library/Intern');


let teamArray = [];

function addManager(){
    return inquirer.prompt([
      /* Pass your questions in here */
      {
          type: 'input',
          name: 'managerName',
          message: "Manager's Name",
          validate: managerName => { //this validates if the string is empty or not
              if(managerName){
                  return true;
              }else{
                  console.log(" \n Please enter in a name");
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'ID',
          message: "What is the manager's ID?",
          validate: ID => { // THIS validate function makes sure the input isn't empty
              if((isNaN(ID)) || (ID == "")){
                  console.log("\n please enter a valid ID");
                  return false;
              }else{
                  return true;
              }
          }
      },
      {
          type: 'input',
          name: 'email',
          message: 'Manager Email',
          validate: email => { //validates that it's a proper email
              valid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
              if(valid){
                  return true;
              }else{
                  console.log('\n Please enter in a valid email');
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'officeNumber',
          message: "What is the office number?",
          validate: officeNumber => { // THIS validate function makes sure the input isn't empty
              if((isNaN(officeNumber)) || (officeNumber == "")){
                  console.log("\n please re-enter a valid office number");
                  return false;
              }else{
                  return true;
              }
          }
      }
    ])
    .then((managerInput) => {
      // Use user feedback for... whatever!!
      const { managerName, ID, email, officeNumber} = managerInput;
      //this is creating a Manager object using the variables above as params
      const manager = new Manager(managerName, ID, email, officeNumber);
  
      //here, we are appending the new object to the teamArray
      teamArray.push(manager);
      //console.log(manager);
    })
};

function addEmployee(){
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'employeeName',
            message: "Employee Name",
            validate: employeeName => {
                if(employeeName){
                    return true;
                }else{
                    console.log('Please enter in a valid name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'ID',
            message: "What is the employee's ID",
            validate: ID =>{
                if((isNaN(ID)) || (ID == "")){
                    console.log('Please enter a valid ID');
                    return false;
                }else{
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Employee email',
            validate: email => { //validates that it's a proper email
                valid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                if(valid){
                    return true;
                }else{
                    console.log('\n Please enter in a valid email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUserName',
            message: 'Employee github username?',
            //when is a conditional property... the rest will only run if found true
            when: (input) => input.role === 'Engineer',
            validate: githubUserName => {
                if(githubUserName){
                    return true;
                }else{
                    console.log('Please enter a valid username');
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the interns school?',
            //this will validate if role = intern
            when: (input) => input.role === 'Intern',
            validate: school => {
                if(school){
                    return true;
                }else{
                    console.log("Please enter the school")
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmation',
            message: 'Would you like to add another teammate?',
            default: false
        }
    ])
    .then((employeeInput) => {
        let {employeeName, ID, email, role, githubUserName, school, confirmation} = employeeInput;
        let employee;

        if(role === 'Engineer'){
            employee = new Engineer (employeeName, ID, email, githubUserName);
            //console.log(employee);
        }else if(role === 'Intern'){
            employee = new Intern (employeeName, ID, email, school)
            //console.log(employee)
        }

        teamArray.push(employee);

        if(confirmation){
            return addEmployee(teamArray);
        }else{
            return teamArray;
        }
    })
};

//function to generate HTML page
function writeFile(data){
    fs.writeFile('./index.html', data, err => {
        //if there is an error, it will log a message
        if(err){
            console.log(err);
            return;
        //else, confirmation message
        }else{
            console.log("Your team profile page has been made... see folder");
        }
    })
}

addManager()
  .then(addEmployee)
  .then(teamArray => {
    console.log(teamArray);
    //return generateHTML(teamArray);
  })
  /*.then(pageHTML => {
    return writeFile(pageHTML);
  })*/
  .catch(err => {
    console.log(err);
  });
