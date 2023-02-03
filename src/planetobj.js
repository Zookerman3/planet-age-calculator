export class Person {
    constructor(age){
        this.age = age;
    }
}

export function mercuryAge(){
    let person = new Person(10);
    let mercAge = (person.age * 365) / (88)
    return Math.floor(mercAge);
}

export function venusAge(){
    let person = new Person(10);
    let vAge = (person.age * 365) / (225)
    return Math.floor(vAge);
}

export function marsAge(){
    let person = new Person(10);
    let marAge = (person.age * 365) / (687)
    return Math.floor(marAge);
}

export function jupiterAge(){
    let person = new Person(10);
    let jAge = (person.age * 365) / (12)
    return Math.floor(jAge);
}

export function AgeMinusBirthday(pastBirthday){
    let person = new Person(23)
    let ageDiff = (person.age - pastBirthday)
    return ageDiff
}