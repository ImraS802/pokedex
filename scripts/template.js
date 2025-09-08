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

function getHTMLForOverlayStats(stats) {
  return `
    <div class="stats_container">
        <div class="stats_text stat_hp"><strong class="stat_label">Health Points:</strong><span class="stat_value">
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

function getHTMLForSpinner() {
  return `
      <div class="container_spinner">
        <span class="spinner"></span>
          Loading... <img src="./assets/icons/snail.png" alt="snail icon" class="snail_img">
       </div>
  `;
}
