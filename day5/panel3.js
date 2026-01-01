const isLogdedIn = true;
const hasPremmium = false;

isLogdedIn && console.log("user is loding in");
hasPremmium && console.log("user has prenium");

console.log("_________________");
const inputName = "";
const userName = inputName || `guest`;

console.log(` userNmae :${userName}`);

let erisim = isLogdedIn && hasPremmium ? `that is acces` : `that is note acces`;
console.log(erisim);

erisim = isLogdedIn || hasPremmium ? `that is acces` : `that is note acces`;
console.log(erisim);
console.log(`=======================`);
let userRole = null;
let role = userRole || `useer`;

console.log(role);
role = userRole && `    user`;
console.log(role);
console.log(`=======================`);
console.log(`=======================`);
console.log(`=======================`);
const person = {
  username: `mustaf`,
  professionnel: `webdeveloper`,

  adres: {
    city: `yverdon-les-bains`,
  },
};

console.log(person.adres);
console.log(`=================`);
console.log(person.adres.sokak);
console.log(`=================`);
const sokakname = person.adres.sokak ?? `adres bilgisiyok`;
console.log(sokakname);
