import { Person } from "../src/planetobj";


describe("Person", () => {
    test("should create a class called person with property called age", () => {
        let person = new Person(10);
        expect(person.age).toEqual(10);
    });
});

describe("mercuryAge", () => {
    test("should take the person.age property and calculate the person age by multiplying the age by 365 then divide that number by 88", () => {
        let person= new Person(10);
        expect(person.age).toEqual(41)
    })
})