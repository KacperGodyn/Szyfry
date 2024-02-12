// Define the Polish 36-letter alphabet for the Polybius Square
const polishAlphabet = 'aąbcćdeęfghijklłmnńoóprsśtuwyzźż';

// Function to encrypt text using the Polybius Square for the Polish alphabet
function polybiusEncrypt(text) {
    let encryptedText = '';
    text = text.toLowerCase();

    for (let char of text) {
        let index = polishAlphabet.indexOf(char);
        if (index !== -1) {
            // Obliczanie rzędu i kolumny dla szachownicy 6x6
            let row = Math.floor(index / 6) + 1;
            let col = (index % 6) + 1;
            encryptedText += `${row}${col}`;
        } else {
            encryptedText += char;
        }
    }

    return encryptedText;
}

// Function to decrypt text using the Polybius Square for the Polish alphabet
function polybiusDecrypt(text) {
    let decryptedText = '';
    let pairs = text.match(/\d\d|./g);

    for (let pair of pairs) {
        if (/\d\d/.test(pair)) { 
            let row = parseInt(pair[0], 10);
            let col = parseInt(pair[1], 10);
            let index = (row - 1) * 6 + (col - 1);
            decryptedText += polishAlphabet[index];
        } else {
            decryptedText += pair;
        }
    }

    return decryptedText;
}

// Add event listeners to the buttons
document.addEventListener('DOMContentLoaded', () => {
    const encryptButton = document.getElementById('polybius-encrypt');
    const decryptButton = document.getElementById('polybius-decrypt');
    const inputArea = document.getElementById('polybius-input');
    const outputArea = document.getElementById('polybius-output');

    encryptButton.addEventListener('click', () => {
        outputArea.value = polybiusEncrypt(inputArea.value);
    });

    decryptButton.addEventListener('click', () => {
        outputArea.value = polybiusDecrypt(inputArea.value);
    });
});



