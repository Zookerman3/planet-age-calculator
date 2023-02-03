export default class Person {
    constructor(age){
        this.age = age;
    }
    
    mercuryAge() {
        let merAge = (this.age * 365) / (88)
        return Math.floor(merAge)
    }
    
    venusAge(){
        let vAge = (this.age * 365) / (225)
        return Math.floor(vAge);
    }
    
    marsAge(){
        let marAge = (this.age * 365) / (687)
        return Math.floor(marAge);
    }
    
    jupiterAge(){ 
        let jAge = (this.age * 365) / (12)
        return Math.floor(jAge);
    }
    
    ageMinusBirthday(pastBirthday){
        let ageDiff = (this.age - pastBirthday)
        return ageDiff
    }

    mercurySinceBDay(pastBirthday){
        let ageDiff = this.ageMinusBirthday(pastBirthday);
        let AgeDiffOnMer = new Person(ageDiff)
        return AgeDiffOnMer.mercuryAge();
    }

    venusSinceBDay(pastBirthday){
        let ageDiff = this.ageMinusBirthday(pastBirthday);
        let AgeDiffOnVenus = new Person(ageDiff)
        return AgeDiffOnVenus.venusAge();
    }

    marsSinceBDay(pastBirthday){
        let ageDiff = this.ageMinusBirthday(pastBirthday);
        let AgeDiffOnMars = new Person(ageDiff)
        return AgeDiffOnMars.marsAge();
    }

    jupiterSinceBDay(pastBirthday){
        let ageDiff = this.ageMinusBirthday(pastBirthday);
        let AgeDiffOnJup = new Person(ageDiff)
        return AgeDiffOnJup.jupiterAge();
    }

    timeToPass(futureTime){
        let ageDiff = (this.age + futureTime)
        return ageDiff
    }

    mercuryFutureAge(futureTime){
        let ageDiff = this.timeToPass(futureTime);
        let AgeDiffOnMer = new Person(ageDiff)
        return AgeDiffOnMer.mercuryAge();
    }

    venusFutureAge(futureTime){
        let ageDiff = this.timeToPass(futureTime);
        let AgeDiffOnVen = new Person(ageDiff)
        return AgeDiffOnVen.venusAge();
    }

    marsFutureAge(futureTime){
        let ageDiff = this.timeToPass(futureTime);
        let AgeDiffOnMars = new Person(ageDiff)
        return AgeDiffOnMars.marsAge();
    }

    jupiterFutureAge(futureTime){
        let ageDiff = this.timeToPass(futureTime);
        let AgeDiffOnJup = new Person(ageDiff)
        return AgeDiffOnJup.jupiterAge();
    }
}


