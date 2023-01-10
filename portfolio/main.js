//selecionando o span que vamos modificar
const textSpan = document.getElementById("dynamic-text");

//criando as frases que vamos mostrar

const frases = [
  "Front end...",
  "sass...",
  "vuejs...",
  "reactjs...",
  "Tailwind css...",
];

let fraseIndex = 0;
let index = 0;
const tipingSpeed = 150;
const erasingSpeed = 75;

function print(frases) {
  if (index === frases.length) {
    clear();
  } else if (index < frases.length) {
    textSpan.textContent += frases.charAt(index);
    index += 1;
    setTimeout(function () {
      print(frases);
    }, tipingSpeed);
  }
}

function clear() {
  if (index == -1) {
    fraseIndex = (fraseIndex + 1) % frases.length;
    index = 0;
    print(frases[fraseIndex]);
  } else if (index > -1) {
    let fraseAtualizada = "";
    for (let i = 0; i < index; i++) {
      fraseAtualizada += frases[fraseIndex].charAt(i);
    }
    textSpan.textContent = fraseAtualizada;
    index -= 1;
    setTimeout(clear, erasingSpeed);
  }
}

print(frases[fraseIndex]);
