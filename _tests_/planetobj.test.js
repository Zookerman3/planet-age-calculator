import { Person, mercuryAge, venusAge, marsAge } from "../src/planetobj";


describe("Person", () => {
    test("should create a class called person with property called age", () => {
        let person = new Person(10);
        expect(person.age).toEqual(10);
    });
});

describe("planetAge", () => {
    test("should take the person.age property and calculate the person age on Mercury by multiplying the age by 365 then divide that number by 88", () => {
        mercuryAge();
        expect(mercuryAge()).toEqual(41);
    });

    test("should take the person.age property and calculate the person age on Venus by multiplying the age by 365 then divide that number by 225", () => {
        venusAge();
        expect(venusAge()).toEqual(16);
    });
    test("should take the person.age property and calculate the person age on Mars by multiplying the age by 365 then divide that number by 687", () => {
        marsAge();
        expect(marsAge()).toEqual(5);
    });
})