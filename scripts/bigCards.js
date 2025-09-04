let currentIndexOfPokemonBigCard = 0;

function toggleOverlay(index = null) {
  let overlayRef = document.getElementById('overlay');

  if (index !== null) {
    currentIndexOfPokemonBigCard = index;

    overlayRef.classList.remove('d_none');
    updateOverlayContent();
    disableBackgroundScrolling();

    document.addEventListener('keydown', escCloseOverlay);
  } else {
    // CLOSE overlay
    overlayRef.classList.add('d_none');
    enableBackgroundScrolling();

    document.removeEventListener('keydown', escCloseOverlay);
  }
}

function escCloseOverlay(event) {
  if (event.key === 'Escape') {
    toggleOverlay();
  }
}

function showNextImage() {
  if (currentIndexOfPokemonBigCard < dataPokemons.length - 1) {
    currentIndexOfPokemonBigCard++;
  } else {
    currentIndexOfPokemonBigCard = 0;
  }
  updateOverlayContent();
}

function showPreviousImage() {
  if (currentIndexOfPokemonBigCard > 0) {
    currentIndexOfPokemonBigCard--;
  } else {
    currentIndexOfPokemonBigCard = dataPokemons.length - 1;
  }
  updateOverlayContent();
}

function updateOverlayContent() {
  let overlayImage = document.getElementById('overlayImage');
  let overlayName = document.getElementById('overlayName');
  let overlayId = document.getElementById('overlayId');
  let overlayStats = document.getElementById('overlayStats');

  let singlePokemon = dataPokemons[currentIndexOfPokemonBigCard];
  let firstTypeColorBg = singlePokemon.types[0].type.name;
  overlayImage.className = `overlay_image ${firstTypeColorBg}`;

  overlayImage.src = singlePokemon.sprites.other.dream_world.front_default;
  overlayName.textContent = singlePokemon.name;
  overlayId.textContent = `#${singlePokemon.id}`;

  let stats = getStats(singlePokemon);

  overlayStats.innerHTML = getHTMLForOverlayStats(stats);
}

function getStats(singlePokemon) {
  return {
    hp: singlePokemon.stats.find((s) => s.stat.name === 'hp').base_stat,
    attack: singlePokemon.stats.find((s) => s.stat.name === 'attack').base_stat,
    defense: singlePokemon.stats.find((s) => s.stat.name === 'defense')
      .base_stat,
    speed: singlePokemon.stats.find((s) => s.stat.name === 'speed').base_stat,
  };
}

function disableBackgroundScrolling() {
  document.body.style.overflow = 'hidden';
}

function enableBackgroundScrolling() {
  document.body.style.overflow = 'auto';
}
