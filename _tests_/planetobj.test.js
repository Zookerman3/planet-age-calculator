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

    test("should take the person.age property and calculate the person age on Venus by multiplying the age by 365 then divide that number by 225", () => {
        
        expect(person.venusAge()).toEqual(16);
    });

    test("should take the person.age property and calculate the person age on Mars by multiplying the age by 365 then divide that number by 687", () => {
        expect(person.marsAge()).toEqual(5);
    });

    test("should take the person.age property and calculate the person age on Jupiter by multiplying the age by 365 then divide that number by 12", () => {
        expect(person.jupiterAge()).toEqual(304);
    });

    test("should take the person.age property and find the difference between it and the AgeMinusBirthday paramater", () => {
        expect(person.ageMinusBirthday(7)).toEqual(3);
    });

    test("should take the calculated age from ageMinusBirthday and return the number of years for Mercury ", () => {
        expect(person.mercurySinceBDay(7)).toEqual(12)
    });

    test("should take the calculated age from ageMinusBirthday and return the number of Venus", () => {
        expect(person.venusSinceBDay(7)).toEqual(4)
    });

    test("should take the calculated age from ageMinusBirthday and return the number of Mars", () => {
        expect(person.marsSinceBDay(7)).toEqual(1)
    });
    
    test("should take the calculated age from ageMinusBirthday and return the number of Jupiter", () => {
        expect(person.jupiterSinceBDay(7)).toEqual(91)
    });

    test("should take the person.age property and find the difference between it and the timeToPass paramater", () => {
        expect(person.timeToPass(7)).toEqual(17);
    });

    test("should take the calculated age from timeToPass and return the number of years for Mercury ", () => {
        expect(person.mercuryFutureAge(7)).toEqual(70)
    });

    test("should take the calculated age from timeToPass and return the number of years for Venus", () => {
        expect(person.venusFutureAge(7)).toEqual(27)
    });

    test("should take the calculated age from timeToPass and return the number of years for Venus", () => {
        expect(person.venusFutureAge(7)).toEqual(27)
    });

    test("should take the calculated age from timeToPass and return the number of years for Mars", () => {
        expect(person.marsFutureAge(7)).toEqual(9)
    });

    test("should take the calculated age from timeToPass and return the number of years for Jupiter", () => {
        expect(person.jupiterFutureAge(7)).toEqual(517)
    });
})