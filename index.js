const Dragon = require("./dragon.js");

const foo = new Dragon({
    birthdate: new Date(), 
    nickname: 'foo'
});

const balo = new Dragon({
    birthdate: new Date(), 
    nickname: 'balo',
    traits: [
        {traitType: "backgroundColor", traitValue: "green"}
    ]
});

const mimar = new Dragon();

setTimeout(()=> {
    const gooby = new Dragon();
    console.log(gooby);

}, 2000);

console.log(foo);
console.log(balo);
console.log(mimar);

