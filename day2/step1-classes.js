class Hero {

    // public
    title = "Default Title";
    firstName = "default firstname";
    lastName = "default lastname";

    // private
    #mission = "my personal mission";

    // static
    static version = 1001;

    /* 
    */
    constructor(htitle, fname, lname){
        this.title = htitle;
        this.firstName = fname;
        this.lastName = lname;
    } 

    fullname(){
        return this.firstName+" "+this.lastName;
    }

    topMission(){
        return this.#mission.toUpperCase();
    }
   
};

/* 
let hero = new Hero("Superman", "Clark", "Kent");
console.log(hero.title);
console.log(hero.firstName);
console.log(hero.lastName);
console.log(hero.topMission());
// console.log(hero.#mission);
console.log(hero.fullname());

console.log(Hero.version);

let hero1 = new Hero("Spiderman", "Peter", "Parker");
console.log(hero1.title);
console.log(hero1.firstName);
console.log(hero1.lastName);
console.log(hero1.topMission());
// console.log(hero.#mission);
console.log(hero1.fullname()); 
*/

module.exports = { Hero }