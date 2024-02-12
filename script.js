const alphabet = 'aąbcćdeęfghijklłmnńoóprsśtuwyzźż'.split('');

function caesarCipher(str, key, decrypt = false) {
  if (decrypt) {
    key = (32 - key) % 32;
  }
  return str.split('').map(char => {
    const isLetter = alphabet.includes(char.toLowerCase());
    if (!isLetter) return char;
    const offset = char === char.toUpperCase() ? 65 : 97;
    const aIndex = alphabet.indexOf(char.toLowerCase());
    const cipherIndex = (aIndex + key) % 32;
    return alphabet[cipherIndex];
  }).join('');
}

document.getElementById('encrypt').addEventListener('click', function() {
  const input = document.getElementById('input-text').value;
  const key = parseInt(document.getElementById('key').value) || 0;
  document.getElementById('output-text').value = caesarCipher(input, key);
});

document.getElementById('decrypt').addEventListener('click', function() {
  const input = document.getElementById('input-text').value;
  const key = parseInt(document.getElementById('key').value) || 0;
  document.getElementById('output-text').value = caesarCipher(input, key, true);
});

document.getElementById('swap').addEventListener('click', function() {
  const inputText = document.getElementById('input-text');
  const outputText = document.getElementById('output-text');
  [inputText.value, outputText.value] = [outputText.value, inputText.value];
});

document.getElementById('toggle-input').addEventListener('click', function() {
  const inputText = document.getElementById('input-text');
  inputText.style.display = inputText.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('toggle-output').addEventListener('click', function() {
  const outputText = document.getElementById('output-text');
  outputText.style.display = outputText.style.display === 'none' ? 'block' : 'none';
});
