alert("panel the panel worked");

const inputEl = document.querySelector("#noteInput");

const resultEl = document.querySelector(".result");

function checkNote() {
  const not = +inputEl.value;

  const sonuc = not > 70 ? "gectiniz" : "kaldiniz";
  console.log(sonuc);

  resultEl.innerText = `sonucunuz : ${sonuc}`;
}
