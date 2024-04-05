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



// const cartaClicada = document.getElementById("root")
// cartaClicada.addEventListener("click", Carta);

// Seleciona todas as cartas

// let cartas = mesa.querySelectorAll('.carta');

// cartas.forEach(carta => {
//   carta.addEventListener('click', function(event) {

//     Carta(event.target);
//   });
// });

// const cartas = el.querySelectorAll('.card');

//   cartas.forEach(carta => {
//     carta.addEventListener('click', function(event) {
//       this.classList.add('revelada');
//     });
//   });


  // const rootElement = document.getElementById("root");
  // rootElement.addEventListener("click", handleCartaClick);
  // function handleCartaClick(event) {
  //   const cartaClicada = event.target;

  // }

  return el;
};
export default App;
// Função de combinar as cartas
// Função de comparar  valores 