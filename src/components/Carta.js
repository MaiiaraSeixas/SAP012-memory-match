const Carta = (objCarta) => {
  const el = document.createElement('div');
  el.innerHTML = `<div  class="card">
  <img src="${objCarta.image}" alt="${objCarta.id}" />
  <img src="imagens/Fundo1.jpg" alt="cover" data-id="${objCarta.id}"/>

    </div>`;

  return el;
};
export default Carta;