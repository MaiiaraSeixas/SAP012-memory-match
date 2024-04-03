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
// Estes dados provavelmente contêm informações sobre as cartas do jogo, como o nome da carta, a imagem associada.
import data from "../data/blackpink/blackpink.js";

// Estamos definindo uma função chamada 'App'. Em JavaScript, funções são blocos de código projetados para realizar uma tarefa específica.
// Uma função é executada quando "algo" a invoca (chama). Neste caso, 'App' é a função que atua como o componente raiz do nosso aplicativo.
// Em uma aplicação JavaScript moderna, especialmente aquelas que usam bibliotecas ou frameworks como React ou Vue, o componente raiz é o ponto de partida do aplicativo.
// Todos os outros componentes e funcionalidades do aplicativo são iniciados e renderizados a partir deste componente raiz.
// 'const' é usado para declarar uma variável constante, ou seja, uma variável que não pode ser reatribuída. 'App' é uma função.
// Esta função 'App' é a função principal que será exportada por este módulo.
// A '()' após o nome da função indica que esta é uma função e pode ser chamada.
// As chaves '{}' indicam o início e o fim do bloco de código que será executado quando a função for chamada.
const App = () => {

  // 'document.createElement' é uma função da API do DOM (Document Object Model). O DOM é uma interface de programação para documentos HTML e XML.
  // Ele permite que programas alterem a estrutura, estilo e conteúdo de um documento. Aqui, 'document.createElement' é usado para criar um novo elemento HTML do tipo especificado.
  // Neste caso, estamos criando um novo elemento 'div'. 'div' é um elemento de bloco genérico que é comumente usado para agrupar outros elementos e aplicar estilos CSS.
  // A função 'createElement' retorna um objeto Element representando o elemento criado.
  // Esse elemento é ainda apenas um nó do DOM e não está visível no documento até que seja inserido no documento com funções como 'appendChild' ou 'insertBefore'.
  // Este novo elemento 'div' será o elemento principal que será retornado pela função App.
  const el = document.createElement('div');

  // 'el' é uma variável que se refere a um elemento do Document Object Model (DOM).
  // O DOM é uma representação programática de uma página da web, que permite que os scripts interajam e manipulem o conteúdo da página.
  // 'el' poderia ser qualquer elemento HTML, como um div, uma seção, um artigo, etc., dependendo de como foi definido anteriormente no seu código.
  // A propriedade 'className' é usada para obter ou definir a classe de um elemento.
  // Aqui, estamos definindo a classe do elemento 'el' como 'App'.
  // Isso é útil para aplicar estilos CSS ao elemento.
  // Por exemplo, se você tiver um estilo CSS para a classe 'App', esse estilo será aplicado ao elemento 'el'.
  // O codigo abaixo veio com o folrk   
  // el.className = 'App';

  // A propriedade 'innerHTML' é usada para obter ou definir o conteúdo HTML de um elemento.
  // Aqui, estamos definindo o conteúdo HTML do elemento 'el'.
  // O HTML que estamos inserindo representa a estrutura inicial da página.
  // O HTML é composto por uma 'div' com a classe 'container-inicio' e um cabeçalho 'h1' com o texto 'BLACKPINK IN YOUR AREA'.
  // A 'div' é um elemento de bloco que é frequentemente usado como um contêiner para outros elementos HTML.
  // O 'h1' é um elemento de cabeçalho que geralmente é usado para títulos principais em uma página. Ele tem o maior nível de importância entre os elementos de cabeçalho (h1-h6).
  // O texto 'BLACKPINK IN YOUR AREA' é uma referência à frase de assinatura do grupo de K-pop BLACKPINK.
  // 'innerHTML' é uma propriedade que retorna ou define o conteúdo HTML de um elemento.
  // Neste caso, estamos definindo o conteúdo interno do elemento 'div' como uma string HTML.
  // Esta string HTML será interpretada pelo navegador e transformada em elementos do DOM.


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


  // Aqui, estamos criando um novo elemento 'div' para a mesa.
  // Este será o elemento que contém todas as cartas.
  // 'document.createElement' é uma função da API do DOM (Document Object Model). O DOM é uma interface de programação para documentos HTML e XML.
  const mesa = document.createElement('div');

  // 'className' é uma propriedade que obtém ou define o valor do atributo de classe do elemento especificado.
  // Neste caso, estamos definindo a classe do elemento mesa como 'grid'.
  // Isso é usado para aplicar estilos CSS ao elemento.
  mesa.className = 'grid';
  // 'for...of' é um laço que executa um bloco de código para cada elemento de um objeto iterável, como um array.
  // Neste caso, estamos percorrendo cada 'carta' na lista de 'cartasEmbaralhadas'.
  for (let carta of cartasEmbaralhadas) {
    // Para cada carta, estamos criando um novo elemento de carta usando a função Carta e os dados da carta.
    // 'Carta(carta)' chama a função 'Carta' com 'carta' como argumento e retorna um elemento de carta.
    // 'mesa.appendChild' é uma função que adiciona um nó ao final da lista de filhos de um nó pai especificado.
    // Neste caso, estamos adicionando o elemento de carta ao elemento principal.
    // 'appendChild' é um método que adiciona um nó ao final da lista de filhos de um nó pai especificado.
    // Aqui, estamos chamando a função 'Carta' com o item de dados 'carta' como argumento.
    // A função 'Carta' retorna um elemento do DOM que é então adicionado à 'mesa'.
    mesa.appendChild(Carta(carta));

  }
  // Aqui, estamos adicionando 'mesa' como filho de 'el'.
  // Isso é feito para que a mesa seja exibida quando o elemento 'el' for adicionado ao DOM.
  el.appendChild(mesa);
  // A palavra-chave 'return' termina a execução da função e especifica um valor a ser retornado por ela.
  // Neste caso, estamos retornando o elemento principal. Este elemento será inserido no DOM para renderizar o aplicativo.
  return el;
};
// A palavra-chave 'export' é usada para exportar funções, objetos ou valores primitivos de um arquivo para que eles possam ser usados em outros arquivos.
// Aqui, estamos exportando a função App como padrão. Isso permite que outros arquivos JavaScript importem esta função usando a sintaxe de importação padrão.
export default App;
