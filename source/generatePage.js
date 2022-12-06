const generateManager = function(manager){
    return ` 
    
    <div class="col-4 mt-4">
    <div class="card h-75">
      <div class="card-body ">
        <div class="card-title bg-primary text-white">
        <h3>${manager.name}</h3>
        <h5>Manager</h5>
        </div>
        <p class="card-text"> ID:${manager.id} </p>
        <p class="card-text"> Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class="card-text"> Office Number:${manager.officeNumber}</p>  
      </div>
    </div>
    </div>
    
    `;
}