export class Person {
    constructor(age){
        this.age = age;
    }
}

export function mercuryAge(){
    let person = new Person(10);
    let mAge = (person.age * 365) / (88)
    return Math.floor(mAge);
}

export function venusAge(){
    let person = new Person(10);
    let vAge = (person.age * 365) / (225)
    return Math.floor(vAge);
}