const Employee = require("./Employee.js");

class Manager extends Employee{
    constructor(id, name, email, officeNumber){
        //this is the constructor function that is inherited from the parent class
        super(id, name, email)

        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;