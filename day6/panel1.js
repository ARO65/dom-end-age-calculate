const user = {
  name: "yigit aram",
  sureName: "yildirimcakar",

  salary: {
    base: 800,
    bonus: 300,
    amount: 5890,
  },
};
console.log("=========================================");
console.log(`${user.name} ${user.sureName}`);

const user2 = {
  name: "aram",
  sureName: "yildirim",
};
console.log("=========================================");
console.log(`${user2.name} ${user2.salary}`);
console.log("=========================================");
console.log(user2?.salary);
console.log("=========================================");
