const yasInput = document.querySelector("#yasinizigiriniz");
const resultEl = document.querySelector(".result");
function calculer() {
  const yas = Number(yasInput.value);

  const sonuc = yas >= 18 ? "Reşitsiniz" : "Reşit değilsiniz";

  resultEl.innerHTML = `Sonuç: ${sonuc}`;

  yasInput.value = "";
}
