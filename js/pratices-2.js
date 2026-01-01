const text1=document.querySelector("#text1");
const butuuun=document.querySelector(".btn");
const result=document.querySelector(".result");

function heasapla(){


    let  sonuc=text1.value;



    if(sonuc>=500){
        sonuc=-sonuc*0.09
        console.log(sonuc);
    }

    else if(sonuc >= 300) {
      sonuc = -sonuc * 0.07;
      console.log(sonuc);
    }

    else(prices <= 300) {
      sonuc = -sonuc * 0.05;
      console.log(sonuc);
    }

result.innerText= `sonucabu: ${sonuc} `;

text1.value="";
}
