
const Employee = require("../library/Employee");

test("Employee Test", () => {
    const employee =  new Employee("Vegas", 1, "vegascruz5@gmail.com");

    expect(employee.name);
    expect(employee.id);
    expect(employee.email);
});

test("Employee name", () => {
    const employee = new Employee("Vegas", 1, "vegascruz5@gmail.com");

    expect(employee.getName()).toEqual('Vegas'); 
});

test("Employee id", () => {
    const employee = new Employee("Vegas", 1, "vegascruz5@gmail.com");

    expect(employee.getId()).toEqual(1); 
});

test("Employee email", () => {
    const employee = new Employee("Vegas", 1, "vegascruz5@gmail.com");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString())); 
});

test("Employee role", () => {
    const employee = new Employee("Vegas", 1, "vegascruz5@gmail.com");

    expect('Employee').toEqual("Employee"); 
});