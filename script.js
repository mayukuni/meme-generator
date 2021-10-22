const input = document.getElementById('text-input');
const container = document.getElementById('meme-image-container');
const memeText = document.getElementById('meme-text');
const fileInput = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');

// 1
function showInputValue() {
  const inputValue = input.value;
  memeText.innerHTML = inputValue;
}

input.addEventListener('keyup', showInputValue);

// 2
// https://www.horadecodar.com.br/2020/05/20/javascript-preview-de-imagem-carregada-em-input-file/
// function insertImage(event) {
//   const file = new FileReader();
//   file.onload = function addImage() {
//     memeImage.src = file.result;
//   };
//   file.readAsDataURL(event.target.files[0]);
// }
// fileInput.addEventListener('change', insertImage, true);

// 6
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');

function fire() {
  container.style.border = '3px dashed red';
}

fireButton.addEventListener('click', fire);

function water() {
  container.style.border = '5px double blue';
}

waterButton.addEventListener('click', water);

function earth() {
  container.style.border = '6px groove green';
}

earthButton.addEventListener('click', earth);
