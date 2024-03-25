//Criei essa pasta para poder printar os cards na tela de forma dinâmica
// 'const Carta = (objCarta) => {' declara uma constante chamada 'Carta' que é uma função de seta.
// As funções de seta são uma sintaxe mais curta para escrever funções em JavaScript e têm algumas diferenças sutis em relação às funções regulares, como a maneira como lidam com o 'this'.
// 'objCarta' é o parâmetro da função, que é esperado ser um objeto. Este objeto deve ter pelo menos duas propriedades: 'image' e 'name'.
// O objeto 'objCarta' é passado para a função quando ela é chamada. Por exemplo, você pode chamar a função assim: Carta({image: 'caminho/para/imagem.jpg', name: 'Nome da Carta'}).
const Carta = (objCarta) => {
  // 'document.createElement('div')' é uma função do DOM (Document Object Model) que cria um novo elemento HTML do tipo especificado, neste caso, um 'div'.
  // O DOM é uma representação programática de uma página web, que permite que seja manipulada. 
  // O novo elemento é armazenado na constante 'el'. Esta é uma prática comum ao criar novos elementos DOM - armazená-los em uma variável para que possam ser manipulados antes de serem adicionados à página.
  // Neste ponto, o elemento 'div' existe, mas ainda não foi adicionado ao DOM, então não será visível na página.
  const el = document.createElement('div');
  // 'el.className = 'App'' adiciona a classe 'App' ao elemento 'div' criado.
  // Isso é útil para aplicar estilos CSS ao elemento ou para selecioná-lo posteriormente com JavaScript.
  // A propriedade 'className' é usada para obter ou definir o valor do atributo 'class' de um elemento.
  // Neste caso, estamos definindo o valor do atributo 'class' como 'App', o que significa que podemos usar '.App' em nosso CSS para selecionar este elemento e aplicar estilos a ele.
  el.className = 'App';
  // 'el.innerHTML' é uma propriedade que permite obter ou definir o conteúdo HTML de um elemento.
  // Aqui, estamos definindo o conteúdo HTML do elemento 'div' como uma string de template.
  // As strings de template são uma característica do ES6 (a versão 2015 do JavaScript) que permite a criação de strings complexas de maneira mais fácil.
  // As strings de template podem conter expressões - pedaços de código que são avaliados e cujo resultado é convertido em uma string.
  // Neste caso, as expressões são 'objCarta.image' e 'objCarta.name', que são propriedades do objeto passado como argumento para a função.
  // A string de template é interpretada e se torna o seguinte HTML:
  // <div class="container-carta">
  //   <img src="valor de objCarta.image" alt="valor de objCarta.name" />
  // </div>
  // Este HTML é então definido como o conteúdo interno do elemento 'div'.
  // Isso significa que o elemento 'div' agora contém um elemento 'img' dentro de um elemento 'div' com a classe 'container-carta'.
  el.innerHTML = `<div class="container-carta">
    <img src="${objCarta.image}" alt="${objCarta.name}" />
    </div>`;
  // A função retorna o elemento 'div' criado.
  // Isso significa que quando a função 'Carta' é chamada, ela retorna um elemento 'div' com uma classe 'App' e um conteúdo interno específico.
  // Este elemento 'div' pode então ser adicionado ao DOM em outro lugar do código.
  // Por exemplo, você pode fazer algo como 'document.body.appendChild(Carta({image: 'caminho/para/imagem.jpg', name: 'Nome da Carta'}))' para adicionar o elemento 'div' ao corpo do documento.
  return el;
};
// 'export default Carta' exporta a função 'Carta' como o export padrão deste módulo.
// Isso significa que quando este módulo é importado em outro arquivo JavaScript, a função 'Carta' é o que é recebido por padrão.
// Se houvesse outros exports neste módulo, eles teriam que ser importados especificamente pelo nome.
// A palavra-chave 'default' aqui significa que 'Carta' é o export padrão, e não que seja o único export.
// Por exemplo, você pode importar esta função em outro arquivo JavaScript assim: 'import Carta from './caminho/para/este/arquivo.js''.
export default Carta;