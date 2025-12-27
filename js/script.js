const year = document.querySelector("#brihtYear");

const monht = document.querySelector("#brihtMonhts");

const day = document.querySelector("#brihtDay");

const result = document.querySelectorAll(".result>p");

const container = document.querySelector(".container");
const btton = document.querySelector(".btn");
const zaman = new Date();

//console.log(zaman.getFullYear());

function ageCalculate() {
  const currentYera = zaman.getFullYear();
  const currentMonht = zaman.getMonth();
  const currentDay = zaman.getDate();
  console.log(currentYera, currentMonht, currentDay);

  let yil = currentYera - year.value;

  let ay = currentMonht - monht.value;

  let gun = currentDay - day.value;
  if (gun < 0) {
    groundColor = gun += 30;
    monht--;
  }

  if (ay < 0) {
    ay += 12;
    yil--;
  }

  result[0].innerText = `age:${yil}`;
  result[1].innerText = `monhts:${ay}`;
  result[2].innerText = `days : ${gun}`;

  document.body.style.backgroundColor = "hsla(51, 9%, 56%, 1.00)";
}
