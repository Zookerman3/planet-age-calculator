import  Person from "../src/planetobj";


describe("Person", () => {

    let person;

    beforeEach(() => {
        person = new Person(10);
    });


    test("should create a class called person with property called age", () => {
        expect(person.age).toEqual(10);
    });


    test("should take the person.age property and calculate the person age on Mercury by multiplying the age by 365 then divide that number by 88", () => {
        expect(person.mercuryAge()).toEqual(41);
    });

    // test("should take the person.age property and calculate the person age on Venus by multiplying the age by 365 then divide that number by 225", () => {
    //     venusAge();
    //     expect(venusAge()).toEqual(16);
    // });
    // test("should take the person.age property and calculate the person age on Mars by multiplying the age by 365 then divide that number by 687", () => {
    //     marsAge();
    //     expect(marsAge()).toEqual(5);
    // });

    // test("should take the person.age property and calculate the person age on Jupiter by multiplying the age by 365 then divide that number by 12", () => {
    //     jupiterAge();
    //     expect(jupiterAge()).toEqual(304);
    // });

    // test("should take the person.age property and find the difference between it and the AgeMinusBirthday paramater", () => {
    //     let person = new Person(23);
    //     AgeMinusBirthday(7);
    //     expect(AgeMinusBirthday(7)).toEqual(16);
    // });



})