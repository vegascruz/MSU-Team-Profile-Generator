//this class will extend other classes, because all the workers contain these traits
class Employee{
    //a constructor function is called when we create a new object
    //this defines what is needed in order to create an Employee object
    constructor(name, id, email){
        //we are setting the value of the the employee object the parameters passed
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Empolyee";
    }
}

module.exports = Employee;