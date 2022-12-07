
const Manager = require("../library/Manager");

test("Manager Office Number", () => {
    const manager = new Manager("Vegas", 1, "vegascruz5@gmail.com", 300);

    expect(manager.officeNumber).toEqual(300);
});

test("Manager role", () => {
const manager = new Manager("Vegas", 1, "vegascruz5@gmail.com", 300);

    expect(manager.getRole()).toEqual("Manager");
});