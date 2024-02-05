let cleanBtnInput = document.querySelector(".clean__btn");
let encryptBtn = document.querySelector(".encrypt__btn");
let decryptedBtn = document.querySelector(".decrypted__btn");

let inputOne = document.querySelector("#text__input");
let inputTwo = document.querySelector("#text__output");

let copyBtn = document.querySelector("#copy__btn__output");


cleanBtnInput.addEventListener("click", function clearText() {
    inputOne.value = "";
});


encryptBtn.addEventListener("click", function textEncrypted() {
    
    inputOne;
    let valueOne = inputOne.value.toLowerCase();
    let encrypt = valueOne.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");  
    inputTwo.value = encrypt;
});


decryptedBtn.addEventListener("click", function textDescripted() {

    inputTwo;
    let valueTwo = inputTwo.value.toLowerCase();
    let decrypted = valueTwo.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    inputTwo.value = decrypted;

    if (inputTwo.value == "") {
        inputTwo.value = inputOne.value;
        valueTwo = inputTwo.value;
        decrypted = valueTwo.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        inputTwo.value = decrypted;
    }
});


copyBtn.addEventListener("click", function copyText() {
    inputTwo;
    inputTwo.select();
    inputTwo.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputTwo.value);
    inputTwo.value = "";
});