function getHTMLForSmallPkCards(singlePokemon, i) {
  return `
    <div class="single_pk_card_small">
        <div class="id_name">
            <div class="pk_id">#${i + 1}</div>
            <div class="pk_name">${singlePokemon.name}</div>
        </div>
        <img src="${
          singlePokemon.sprites.other.dream_world.front_default
        }" class="image_single_pk" id="image_single_pk" alt="${
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
    let iconOfTypes;

    if (typeName === 'fire') {
      iconOfTypes = `<img src="./assets/icons/fire.png" alt="fire icon" class="type_icon">`;
    } else if (typeName === 'water') {
      iconHTML = `<img src="./assets/icons/water.png" alt="water" class="type_icon">`;
    } else if (typeName === 'grass') {
      iconHTML = `<img src="./assets/icons/grass.png" alt="grass" class="type_icon">`;
    } else if (typeName === 'bug') {
      iconHTML = `<img src="./assets/icons/bug.png" alt="grass" class="type_icon">`;
    } else if (typeName === 'electric') {
      iconHTML = `<img src="./assets/icons/electric.png" alt="grass" class="type_icon">`;
    } else if (typeName === 'fairy') {
      iconHTML = `<img src="./assets/icons/fairy.png" alt="grass" class="type_icon">`;
    } else if (typeName === 'flying') {
      iconHTML = `<img src="./assets/icons/flying.png" alt="grass" class="type_icon">`;
    } else if (typeName === 'ground') {
      iconHTML = `<img src="./assets/icons/ground.png" alt="grass" class="type_icon">`;
    } else if (typeName === 'normal') {
      iconHTML = `<img src="./assets/icons/normal.png" alt="grass" class="type_icon">`;
    } else if (typeName === 'poison') {
      iconHTML = `<img src="./assets/icons/poison.png" alt="grass" id="poison" class="type_icon">`;
    } else {
      iconHTML = `<div class="type_flex">${typeName}</div>`;
    }

    typesHTML += iconHTML + ' ';
  }
  return typesHTML.trim();
}
