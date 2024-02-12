document.addEventListener('DOMContentLoaded', () => {
    const encryptBtn = document.getElementById('encrypt');
    const decryptBtn = document.getElementById('decrypt');
    const plaintextArea = document.getElementById('plaintext');

    encryptBtn.addEventListener('click', () => {
        plaintextArea.value = encrypt(plaintextArea.value);
    });

    decryptBtn.addEventListener('click', () => {
        plaintextArea.value = decrypt(plaintextArea.value);
    });

    function encrypt(text) {
        return text.split('').map((char, index) => shiftChar(char, index, true)).join('');
    }

    function decrypt(text) {
        return text.split('').map((char, index) => shiftChar(char, -index, false)).join('');
    }

    function shiftChar(char, shift, encrypting) {
        const alphabet = 'aąbcćdeęfghijklłmnńoóprsśtuwyzźż';
        const charLower = char.toLowerCase();
        if (alphabet.includes(charLower)) {
            let newIndex = alphabet.indexOf(charLower) + shift;
            if (encrypting) {
                newIndex = newIndex % 36;
            } else {
                while (newIndex < 0) newIndex += 36;
            }
            const shiftedChar = alphabet[newIndex % 36];
            return char === char.toUpperCase() ? shiftedChar.toUpperCase() : shiftedChar;
        }
        return char;
    }
});
