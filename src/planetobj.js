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

    // mercurySinceBDay(){
    //     let ageDiff = this.ageMinusBirthday(pastBirthday);
        
    // }
  



}


