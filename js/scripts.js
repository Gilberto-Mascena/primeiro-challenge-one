// Seleção dos botões e elementos principais da interface
const cleanBtnInput = document.querySelector('.clean__btn');
const decryptedBtn = document.querySelector('.decrypted__btn');
const copyBtn = document.querySelector('.copy__btn__output');
const encryptBtn = document.querySelector('.encrypt__btn');
const hideClass = document.querySelector('.content__output');
const classBtnCopy = document.querySelector('.btn__copy');
const changeThemeBtn = document.querySelector('#change-theme');

// Esconde o botão de cópia inicialmente
classBtnCopy.style.visibility = 'hidden';

/**
 * Alterna o modo escuro no body
 */
function toggleDarkMode() {
    document.body.classList.toggle('dark');
}

/**
 * Carrega o tema salvo no localStorage
 */
function loadTheme() {
    const darkMode = localStorage.getItem('dark');
    if (darkMode) {
        toggleDarkMode();
    }
}

loadTheme();

/**
 * Evento de mudança no switch do tema
 */
changeThemeBtn.addEventListener('change', function () {
    toggleDarkMode();

    // Atualiza o estado salvo no localStorage
    localStorage.removeItem('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark', '1');
    }
});

/**
 * Limpa o conteúdo de entrada e saída
 */
function clearInput() {
    const input = document.querySelector('.text__input');
    const output = document.querySelector('.text__output');

    input.value = '';
    output.value = '';
    showOrHide();
    showOrhideBtnCopy();
}

/**
 * Criptografa o texto de entrada e exibe na saída
 */
function textEncrypted() {
    const input = document.querySelector('.text__input');
    const output = document.querySelector('.text__output');

    const valueOne = input.value.toLowerCase();
    const encrypted = valueOne
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');

    output.value = encrypted;
}

/**
 * Descriptografa o texto da saída.
 * Se estiver vazia, usa o texto do input.
 */
function textDescripted() {
    const input = document.querySelector('.text__input');
    const output = document.querySelector('.text__output');

    let value = output.value.toLowerCase();

    // Se a saída estiver vazia, usa o valor do input
    if (value === '') {
        value = input.value.toLowerCase();
    }

    const decrypted = value
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');

    output.value = decrypted;
}

/**
 * Mostra ou oculta a área de output com base no conteúdo
 */
function showOrHide() {
    const output = document.querySelector('.text__output');
    const outputContainer = document.querySelector('.content__output');

    // Se houver conteúdo, mostra; caso contrário, esconde
    outputContainer.style.visibility = output.value === '' ? 'visible' : 'hidden';
}

/**
 * Mostra ou oculta o botão de cópia com base no conteúdo da saída
 */
function showOrhideBtnCopy() {
    const output = document.querySelector('.text__output');
    const copyButton = document.querySelector('.btn__copy');

    copyButton.style.visibility = output.value === '' ? 'hidden' : 'visible';
}

/**
 * Copia o texto da saída para a área de transferência
 */
function copyText() {
    const output = document.querySelector('.text__output');
    output.select();
    output.setSelectionRange(0, 99999); // compatível com mobile
    navigator.clipboard.writeText(output.value);
    // Não apaga o conteúdo após a cópia
}

// Eventos de clique
cleanBtnInput.addEventListener('click', clearInput);

encryptBtn.addEventListener('click', function () {
    textEncrypted();
    showOrHide();
    showOrhideBtnCopy();
});

// Removido: clicar na área de output não deveria disparar lógica de visibilidade
// hideClass.addEventListener('click', function () {
//     showOrHide();
// });

decryptedBtn.addEventListener('click', function () {
    textDescripted();
    showOrHide();
    showOrhideBtnCopy();
});

copyBtn.addEventListener('click', function () {
    copyText();
    showOrHide();
    showOrhideBtnCopy();
});
