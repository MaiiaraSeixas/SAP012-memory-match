// Modelo oferecido pela laboratoria
// Este é um modelo de dados que pode ser usado como exemplo
// 'export' é uma palavra-chave em JavaScript que é usada quando você quer exportar uma função, objeto ou valor primitivo de um módulo para que possa ser usado em outros módulos com a instrução 'import'.
// O objeto que está sendo exportado é anônimo, o que significa que não tem um nome. Quando este módulo é importado em outro arquivo JavaScript, o objeto pode ser referenciado pelo nome que é dado a ele no momento da importação.
export default {
  // 'name' é uma propriedade do objeto que está sendo exportado. 
  // Neste caso, 'name' é uma string que representa o nome do grupo. 
  // A propriedade ‘name’ é uma string. 
  // Em JavaScript, uma string é um tipo de dado primitivo usado para representar texto. 
  // Neste caso, o valor da propriedade 'name' é 'grupo'.
  // Em JavaScript, uma string é um tipo de dado primitivo que é usado para representar texto. 
  //As strings são imutáveis, o que significa que uma vez que uma string é criada, ela não pode ser alterada.
  name: 'grupo',
  // 'items' é outra propriedade do objeto que está sendo exportado. 
  // É um array que contém vários objetos. Cada objeto representa um item do grupo.
  // A propriedade ‘items’ é um array. 
  // Em JavaScript, um array é um objeto usado para representar uma lista ordenada de elementos.
  // Em JavaScript, um array é um objeto especial que é usado para representar listas de elementos. 
  // Os arrays são mutáveis, o que significa que você pode adicionar, remover ou alterar elementos em um array depois que ele é criado.
  items: [
    // Aqui temos um objeto dentro do array 'items'. 
    // Este objeto tem duas propriedades: 'id' e 'image'.
    // A propriedade 'id' é uma string que serve como um identificador único para o item. 
    // Neste caso, o valor da propriedade 'id' é 'blackpink'.
    // A propriedade 'image' é outra string que representa o caminho para a imagem do item. 
    // Neste caso, o valor da propriedade 'image' é 'imagens/Blackpink2.jpg'.
    // Cada objeto no array ‘items’ tem duas propriedades: ‘id’ e ‘image’. Ambas as propriedades são strings. 
    // A propriedade ‘id’ é usada como um identificador único para o item, e a propriedade ‘image’ é usada para armazenar o caminho para a imagem do item.
    { id: 'blackpink', image: 'imagens/Blackpink2.jpg', },
    { id: 'blackpink', image: 'imagens/Blackpink3.jpg', },
    { id: 'jennie', image: 'imagens/Jennie2.jpg', },
    { id: 'jisoo', image: 'imagens/Jisoo1.jpg', },
    { id: 'lisa', image: 'imagens/Lisa.jpg', },
    { id: 'rose', image: 'imagens/Rosé.jpg', },

  ],
};