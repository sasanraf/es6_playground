/**
 * Created by Sasan on 4/24/2018.
 */

class Person{
    constructor(name){
       this.name = name;
    }

    sleep(hours){
        return `<h2>I'm going to sleep for ${hours} hours a day.</h2>`
    }

    drink(cups){
        return `I'm going to drink ${cups} of water.`
    }

    speak(message){
        return `${this.name} said ${message}`
    }
}

class SuperPerson extends Person{

    constructor(name, heroName){
        super (name);
        this.heroName = heroName;
    }

    xRay(){
        //return `<h1>${this.name} said: I see everything</h1>`;
        return this.speak("I'm saving the planet");
    }
}

class SuperMegaPerson extends SuperPerson{
    superXRay(){
        //return `<h1>${this.name} said: I see everything</h1>`;
        return this.speak("I see through the world");
    }

    superHeroName(){
        //return `<h1>${this.name} said: I see everything</h1>`;
        return this.speak("I'm "+this.heroName);
    }
}

//export default Person;
//export default SuperPerson;
export default SuperMegaPerson;

