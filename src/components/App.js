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

// A palavra-chave 'import' é usada para importar funções, objetos ou valores de outros arquivos ou módulos no JavaScript.
// Aqui, estamos importando a classe Carta do arquivo Carta.js. Esta classe provavelmente define a estrutura e o comportamento de uma carta no jogo.
import Carta from "./Carta.js";

// Novamente, usamos a palavra-chave 'import' para importar os dados do arquivo blackpink.js.
// Estes dados provavelmente contêm informações sobre as cartas do jogo, como o nome da carta, a imagem associada, a descrição, etc.
import data from "../data/blackpink/blackpink.js";

// Aqui, estamos definindo uma função chamada 'App'. Esta é a função principal do aplicativo.
// Esta função será chamada para iniciar o aplicativo e construir a interface do usuário.
const App = () => {

  // 'document.createElement' é uma função do DOM (Document Object Model) API que cria um novo elemento do tipo especificado.
  // Neste caso, estamos criando um novo elemento 'div'.
  const el = document.createElement('div');

  // 'className' é uma propriedade que define a classe CSS de um elemento.
  // Aqui, estamos definindo a classe do elemento como 'App'. Isso é útil para aplicar estilos CSS ao elemento.
  el.className = 'App';

  // 'innerHTML' é uma propriedade que define ou retorna o conteúdo HTML de um elemento.
  // Aqui, estamos definindo o HTML interno do elemento. Este HTML representa a estrutura inicial da página.
  el.innerHTML = `<div class="container-inicio">
  <h1>BLACKPINK IN YOUR AREA</h1>

</div>`;

  // 'data.items' acessa a propriedade 'items' do objeto 'data', que foi importado do arquivo blackpink.js.
  // Cada item provavelmente representa uma carta no jogo.
  // A função concat() é usada para duplicar a lista de cartas.
  // Ela combina o array original com uma cópia dele mesmo, resultando em um novo array com o dobro do tamanho.
  // O método concat() não altera o array original, mas retorna um novo array que é a combinação dos arrays passados como argumentos.
  let listaCartas = data.items.concat(data.items); // Duplica as cartas aqui

  // Aqui, estamos ordenando a lista de cartas aleatóriamente.
  // A constante 'cartasEmbaralhadas' está sendo declarada. 
  // 'const' é uma palavra-chave em JavaScript que é usada para declarar uma variável que não pode ser reatribuída.
  const cartasEmbaralhadas = listaCartas.sort((a, b) => 0.5 - Math.random())
  // O método 'sort()' está sendo chamado no array 'listaCartas'.
  // 'sort()' é um método de array em JavaScript que ordena os elementos de um array no local e retorna o array.

  // 'sort()' aceita uma função de comparação opcional como argumento.
  // Se nenhum argumento for fornecido, ele converte os elementos em strings e os ordena com base na ordem dos pontos de código Unicode.

  // Neste caso, uma função de comparação é fornecida.
  // A função de comparação é uma função que define a ordem de classificação.
  // Ela recebe dois argumentos, 'a' e 'b', que são dois elementos sendo comparados durante a classificação.

  // 'Math.random()' é uma função em JavaScript que retorna um número flutuante pseudoaleatório no intervalo [0, 1).
  // Ou seja, a partir de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo).
  // Cada vez que 'Math.random()' é chamado, ele retorna um novo número aleatório.

  // '0.5 - Math.random()' gera um número que está uniformemente distribuído entre -0.5 e 0.5.
  // Isso significa que cerca de metade das vezes será positivo e metade das vezes será negativo.

  // Se a função de comparação retornar um valor menor que 0, 'a' é classificado para um índice menor do que 'b'.
  // Se a função de comparação retornar um valor maior que 0, 'a' é classificado para um índice maior do que 'b'.
  // Se a função de comparação retornar 0, 'a' e 'b' permanecem inalterados um em relação ao outro, mas classificados em relação a todos os diferentes elementos.
  // Portanto, essa linha de código está embaralhando aleatoriamente o array 'listaCartas'.
  // Aqui, estamos percorrendo cada carta na lista de cartas usando um loop 'for...of'.
  for (let carta of cartasEmbaralhadas) {
    // Para cada carta, estamos criando um novo elemento de carta usando a função Carta e os dados da carta.
    // 'Carta(carta)' chama a função 'Carta' com 'carta' como argumento e retorna um elemento de carta.
    // 'el.appendChild' é uma função que adiciona um nó ao final da lista de filhos de um nó pai especificado.
    // Neste caso, estamos adicionando o elemento de carta ao elemento principal.
    el.appendChild(Carta(carta));

  }
  // A palavra-chave 'return' termina a execução da função e especifica um valor a ser retornado por ela.
  // Neste caso, estamos retornando o elemento principal. Este elemento será inserido no DOM para renderizar o aplicativo.
  return el;
};
// A palavra-chave 'export' é usada para exportar funções, objetos ou valores primitivos de um arquivo para que eles possam ser usados em outros arquivos.
// Aqui, estamos exportando a função App como padrão. Isso permite que outros arquivos JavaScript importem esta função usando a sintaxe de importação padrão.
export default App;
