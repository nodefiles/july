let user = "vijay";
// console.log(user);

var batman = {
    title : "Batman",
    firstname : "Bruce",
    lastname : "Wayne",
    city : "Gotham"
};

var superman = {
    title : "Superman",
    firstname : "Clark",
    lastname : "Kent",
    city : "Metropolis"
};

// console.log(hero.title);

function adder(num1, num2){
    return num1 + num2;
}

// console.log(adder(5,6));


/* named exports
module.exports.hero = hero;
module.exports.user = user; 
*/

// default export
/* 
module.exports = {
    hero : hero,
    user : user
} 
*/

// default export with destructuring
module.exports = { user, batman, superman, adder };
