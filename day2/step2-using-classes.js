const Hero = require("./step1-classes").Hero;

let hero = new Hero("Superman", "Clark", "Kent");
console.log(hero.title);
console.log(hero.firstName);
console.log(hero.lastName);
console.log(hero.topMission());
// console.log(hero.#mission);
console.log(hero.fullname());


let hero1 = new Hero("Spiderman", "Peter", "Parker");
console.log(hero1.title);
console.log(hero1.firstName);
console.log(hero1.lastName);
console.log(hero1.topMission());
// console.log(hero.#mission);
console.log(hero1.fullname()); 