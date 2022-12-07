
const Engineer = require("../library/Engineer");

test("Engineer Test", () => {
    const engineer = new Engineer("Vegas", 1, "vegascruz5@gmail.com", "vegascruz");

    expect(engineer.github);
});

test("github value", () => {
    const engineer = new Engineer("Vegas", 1, "vegascruz5@gmail.com", "vegascruz");

    expect(engineer.getGitHub());
});

test("Get role", () => {
    const engineer = new Engineer("Vegas", 1, "vegascruz5@gmail.com", "vegascruz");

    expect(engineer.getRole()).toEqual("Engineer");
});