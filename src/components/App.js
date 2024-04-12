//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

import Carta from "./Carta.js";

import data from "../data/blackpink/blackpink.js";


const App = () => {

  const el = document.createElement('div');

  el.className = 'App';


  el.innerHTML = `<div class="container-inicio">
  <h1>BLACKPINK IN YOUR AREA</h1>

</div>`;
 // Duplica as cartas aqui

  el.appendChild(iniciarJogo());
  el.innerHTML += `
  <div style="display: none;" id="restart">
  <button type="button" > Jogar novamente!</button>
  </div>
  `;
  const btnReniciar = el.querySelector("#restart");
  btnReniciar.addEventListener("click", () => {
    const mesa = document.querySelector(".grid");
el.removeChild (mesa);
    el.appendChild(iniciarJogo());
    btnReniciar.style.display = 'none';
  })
  let cartasSelecionadas = [];
  el.addEventListener("click", (event) => {
    // Verifica se o elemento clicado é uma imagem e se menos de duas cartas foram selecionadas
    if (event.target.tagName.toLowerCase() === 'img' && cartasSelecionadas.length <= 2) {
      // Alterna a classe "flip-card" no elemento clicado

      event.target.classList.add("flip-card");
      // Adiciona o elemento clicado ao array 'cartasSelecionadas'

      cartasSelecionadas.push(event.target);
      // Verifica se duas cartas foram selecionadas

      if (cartasSelecionadas.length === 2) {
        // Obtém o atributo 'data-id' das duas cartas selecionadas
        
        const id1 = cartasSelecionadas[0].getAttribute("data-id");
        const id2 = cartasSelecionadas[1].getAttribute("data-id");
        // Verifica se os 'data-id' das duas cartas são iguais
const finalizarJogo = () => {
  const desabilitarCartas = document.querySelectorAll(".flip-card");
  if (desabilitarCartas.length === 12) {
    alert("Você é um Blink!");
    btnReniciar.style.display = 'block';
  }
}
        if (id1 === id2) {
          cartasSelecionadas = [];

          finalizarJogo();
        } else {
          // remove a classe "flip-card" das cartas
          setTimeout(() => {
          
            cartasSelecionadas.forEach(carta => 
              {
                carta.classList.remove("flip-card")});
                cartasSelecionadas = [];
          },500)

        }

        
      }
    }
  });

  return el;
};

const iniciarJogo = () => {
  const mesa = document.createElement('div');

  mesa.className = 'grid';
  let listaCartas = data.items.concat(data.items);
  const cartasEmbaralhadas = listaCartas.sort((a, b) => 0.5 - Math.random())
 
  for (let carta of cartasEmbaralhadas) {
    mesa.appendChild(Carta(carta));

  }
return mesa;
}

export default App;
