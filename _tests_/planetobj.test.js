import { Person } from "../src/planetobj";


describe("Person", () => {
    test("should create a class called person with property called age", () => {
        let person = new Person(10);
        expect(person.age).toEqual(10);
    });
});