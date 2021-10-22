const input = document.getElementById('text-input');
// const container = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');

// 1
function showInputValue() {
  const inputValue = input.value;
  memeText.innerHTML = inputValue;
}

input.addEventListener('keyup', showInputValue);
