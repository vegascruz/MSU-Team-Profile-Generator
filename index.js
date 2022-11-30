var inquirer = require('inquirer');

//imported classes or 'team profile's ' : NOTE - the employee class isn't being transported,
//because all the other classes inherit its traits
const Manager = require('./library/Manager');

let teamArray = [];

function addManager(){
    inquirer
    .prompt([
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
      console.log(manager);
    })
}

//addManager();
