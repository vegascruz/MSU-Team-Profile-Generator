const Intern = require("../library/Intern");

test("Intern Email", () => {
    const intern = new Intern("Vegas", 1, "vegascruz5@gmail.com", "fvtc, msu, and wtc")

    expect(intern.email);

});

test("Intern School", () => {
    const intern = new Intern("Vegas", 1, "vegascruz5@gmail.com", "fvtc, msu, and wtc");

    expect(intern.getSchool());

});

test("Intern Role", () => {
    const intern = new Intern("Vegas", 1, "vegascruz5@gmail.com", "fvtc, msu, and wtc");

    expect(intern.getRole()).toEqual("Intern");
});