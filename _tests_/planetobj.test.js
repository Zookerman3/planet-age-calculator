const { default: test } = require("node:test");


describe("Person", () => {
    test("should create a class called person with property called age", () => {
        let person = new Person(10);
        exportAllDeclaration(person.age).toEqual(10);
    });
});