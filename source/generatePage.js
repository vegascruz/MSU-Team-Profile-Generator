const generateManager = function(manager){
    return ` 
    
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
        <p class="card-text"><i class="fa-solid fa-mug-hot"></i> Manager</p>
      </div>
      <div>
          <ul id="card-list"class="list-group list-group-flush">
              <li class="list-group-item">ID: ${manager.id}</li>
              <li class="list-group-item">Email ${manager.email}:</li>
              <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
          </ul>
      </div>
    </div>
    
    `;
}

const generateEngineer = function(engineer){
  return `
  <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
        <p class="card-text"><i class="fa-solid fa-glasses"></i> Engineer</p>
      </div>
      <div>
          <ul id="card-list"class="list-group list-group-flush">
              <li class="list-group-item">ID: ${engineer.id}</li>
              <li class="list-group-item">Email: ${engineer.email}</li>
              <li class="list-group-item">GitHub: ${engineer.github}</li>
          </ul>
      </div>
  </div>
  `;
}

const generateIntern = function (intern) {
  return `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <p class="card-text"><i class="fa-solid fa-user-graduate"></i> Intern</p>
      </div>
      <div>
          <ul id="card-list"class="list-group list-group-flush">
              <li class="list-group-item">ID:${intern.id}</li>
              <li class="list-group-item">Email:${intern.email}</li>
              <li class="list-group-item">School: ${intern.school}</li>
          </ul>
      </div>
    </div>
      `;
  }

  generatePage = (data) => {
    //we're gonna store are employee html code inside the array
    pageArray = [];
    //here we're are looping through each employee and determining what kind of html code will be made
    for (let i=0; i< data.length; i++) {
      //we're going through each array item that we pass in from our index. js file. Each item is an object, so we have
      //access to it's properties
      const employee = data[i];
      const role = employee.getRole();

     if (role === 'Manager') {
        //we're generating a card that we will later on concatenate to our html file
         const managerCard = generateManager(employee);

         pageArray.push(managerCard);

     }

     if (role === 'Engineer') {
      //we're generating a card that we will later on concatenate to our html file
         const engineerCard = generateEngineer(employee);

         pageArray.push(engineerCard);
      
     }

     if (role === 'Intern') {
      //we're generating a card that we will later on concatenate to our html file
         const internCard = generateIntern(employee);

         pageArray.push(internCard);
      
     }
 }
 //.join() allows us to concatenate all the html cards we have made
const employeeCards = pageArray.join('')

const generateTeam = generateTeamPage(employeeCards);
return generateTeam;

}

const generateTeamPage = function(employeeCards){
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://kit.fontawesome.com/8adc2c935f.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
      <link rel="stylesheet" href="./source/style.css">
      <title>Team Profile</title>
  </head>
  <body>
      <div class="nav"><h1>My Team</h1></div>
          <div class="cards">
            ${employeeCards}
          </div>
  </body>
  </html>
  `;
}

module.exports = generatePage;