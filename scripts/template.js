function getHTMLForSmallPkCards(singlePokemon, i) {
  let firstTypeColorBg = singlePokemon.types[0].type.name;
  const displayId = singlePokemon.id;
  return `
    <div class="single_pk_card_small">
        <div class="id_name">
            <div class="pk_id">#${displayId}</div>
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
    let iconOfTypes = `
      <img src="./assets/icons/${typeName}.png" alt="${typeName} icon" class="type_icon ${typeName}" title="${typeName}">`;

    typesHTML += iconOfTypes + ' ';
  }
  return typesHTML.trim();
}

function getHTMLForOverlayStats(stats) {
  return `
    <div class="stats_container">
        <div class="stats_text stat_hp"><strong class="stat_label">HP:</strong><span class="stat_value">
                ${stats.hp}</span></div>
        <div class="stats_text"><strong class="stat_label">Attack:</strong><span class="stat_value">
                ${stats.attack}</span></div>
        <div class="stats_text"><strong class="stat_label">Defense:</strong><span class="stat_value">
                ${stats.defense}</span></div>
        <div class="stats_text"><strong class="stat_label">Speed:</strong><span class="stat_value">
                ${stats.speed}</span></div>
    </div>
  `;
}
