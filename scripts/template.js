function getHTMLForSmallPkCards(singlePokemon, i) {
  let firstTypeColorBg = singlePokemon.types[0].type.name;
  return `
    <div class="single_pk_card_small">
        <div class="id_name">
            <div class="pk_id">#${i + 1}</div>
            <div class="pk_name">${singlePokemon.name}</div>
        </div>
        <img src="${
          singlePokemon.sprites.other.dream_world.front_default
        }" class="image_single_pk ${firstTypeColorBg}" alt="${
    singlePokemon.name
  }" onclick="toggleOverlay(${i})" tabindex="0"
            onkeydown="if(event.key==='Enter' || event.key===' ') toggleOverlay(${i})">
        <div class="types">${getTypesHTML(singlePokemon)}</div>
    </div>
    `;
}

function getTypesHTML(singlePokemon) {
  let typesHTML = '';
  for (let j = 0; j < singlePokemon.types.length; j++) {
    let typeName = singlePokemon.types[j].type.name;
    let iconOfTypes = `<img src="./assets/icons/${typeName}.png" 
                        alt="${typeName} icon" 
                        class="type_icon ${typeName}">`;

    typesHTML += iconOfTypes + ' ';
  }
  return typesHTML.trim();
}

function getHTMLForOverlayStats(stats) {
  return `
    <div class="stats_container">
      <div class="stats_text"><strong>Health Points:</strong> ${stats.hp}</div>
      <div class="stats_text"><strong>Attack:</strong> ${stats.attack}</div>
      <div class="stats_text"><strong>Defense:</strong> ${stats.defense}</div>
      <div class="stats_text"><strong>Speed:</strong> ${stats.speed}</div>
    </div>
  `;
}
