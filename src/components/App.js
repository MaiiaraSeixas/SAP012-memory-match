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

  let listaCartas = data.items.concat(data.items); // Duplica as cartas aqui
  const cartasEmbaralhadas = listaCartas.sort((a, b) => 0.5 - Math.random())
  const mesa = document.createElement('div');

  mesa.className = 'grid';
  for (let carta of cartasEmbaralhadas) {
    mesa.appendChild(Carta(carta));

  }

  el.appendChild(mesa);
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

        if (id1 === id2) {
          cartasSelecionadas = [];
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

export default App;

// Função de combinar as cartas
// Função de comparar  valores 