const input = document.getElementById('text-input');
// const container = document.getElementById('meme-image-container');
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
function insertImage() {
  if (this.files && this.files[0]) {
    const file = new FileReader();
    file.onload = (event) => {
      memeImage.src = event.target.result;
    };
    file.readAsDataURL(this.files[0]);
  }
}
fileInput.addEventListener('change', insertImage);