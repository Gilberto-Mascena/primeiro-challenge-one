const cleanBtnInput = document.querySelector('#clean__btn');
const decryptedBtn = document.querySelector('#decrypted__btn');
const copyBtn = document.querySelector('#copy__btn__output');
const encryptBtn = document.querySelector('#encrypt__btn');
const hideClass = document.querySelector('.content__output');
const classBtnCopy = document.querySelector('.btn__copy');

classBtnCopy.style.visibility = 'hidden';


function clearInput() {

    let inputOne = document.querySelector('.text__input');
    inputOne.value = '';
};

function textEncrypted() {

    let inputOne = document.querySelector('.text__input');
    let inputTwo = document.querySelector('.text__output');
    let valueOne = inputOne.value.toLowerCase();
    let encrypt = valueOne
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');
    inputTwo.value = encrypt;
};

function textDescripted() {

    let inputOne = document.querySelector('.text__input');
    let inputTwo = document.querySelector('.text__output');
    let valueTwo = inputTwo.value.toLowerCase();
    let decrypted = valueTwo
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');
    inputTwo.value = decrypted;

    if (inputTwo.value == '') {
        inputTwo.value = inputOne.value;
        valueTwo = inputTwo.value;
        decrypted = valueTwo
            .replaceAll('enter', 'e')
            .replaceAll('imes', 'i')
            .replaceAll('ai', 'a')
            .replaceAll('ober', 'o')
            .replaceAll('ufat', 'u');
        inputTwo.value = decrypted;
    };
};

function showOrHide() {

    let inputTwo = document.querySelector('.text__output');
    let showOrHide = document.querySelector('.content__output');

    if (inputTwo.value === '') {
        showOrHide.style.visibility = 'visible';
    }else {
        showOrHide.style.visibility = 'hidden';
    };
};

function showOrhideBtnCopy() {
    let inputTwo = document.querySelector('.text__output');
    let classBtnCopy = document.querySelector('.btn__copy');

    if (inputTwo.value === '') {
        classBtnCopy.style.visibility = 'hidden';
    } else {
        classBtnCopy.style.visibility = 'visible';
    };
};

function copyText() {

    let inputTwo = document.querySelector('.text__output');
    inputTwo.select();
    inputTwo.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputTwo.value);
    inputTwo.value = '';
};


cleanBtnInput.addEventListener('click', function() {
    clearInput();
});

encryptBtn.addEventListener('click', function() {
    textEncrypted();
    showOrHide();
    showOrhideBtnCopy();
});

hideClass.addEventListener('click', function() {
    showOrHide();
});

decryptedBtn.addEventListener('click', function() {
    textDescripted();
    showOrHide();
    showOrhideBtnCopy();
});

copyBtn.addEventListener('click', function() {
    copyText();
    showOrHide();   
    showOrhideBtnCopy();     
});