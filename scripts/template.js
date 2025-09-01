function getHTMLForSmallPkCards(singlePokemon, i) {
  return `
    <div class="single_pk_card_small">
    <div class="id_name">
    <div class="pk_id">#${i + 1}</div>
    <div class="pk_name">${singlePokemon.name}</div>
    </div>
    <img src="${
      singlePokemon.sprites.front_default
    }" class="image_single_pk" id="image_single_pk" alt="${
    singlePokemon.name
  }" onclick="toggleOverlay(${i})" tabindex="0" onkeydown="if(event.key==='Enter' || event.key===' ') toggleOverlay(${i})">
    </div>
    `;
}
