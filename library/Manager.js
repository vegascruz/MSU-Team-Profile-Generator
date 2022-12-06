const Employee = require("./Employee.js");

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        //this is the constructor function that is inherited from the parent class
        super(name, id, email)

        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;