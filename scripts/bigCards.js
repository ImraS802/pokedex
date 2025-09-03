let currentIndexOfPokemonBigCard = 0;

function toggleOverlay(index = null) {
  let overlayRef = document.getElementById('overlay');
  let overlayImage = document.getElementById('overlayImage');
  let overlayTitle = document.getElementById('overlayTitle');

  if (index !== null) {
    currentIndexOfPokemonBigCard = index;

    let singlePokemonBigCard = dataPokemons[currentIndexOfPokemonBigCard];

    overlayRef.classList.remove('d_none');
    overlayImage.src =
      singlePokemonBigCard.sprites.other.dream_world.front_default;
    overlayTitle.textContent = singlePokemonBigCard.name;

    document.addEventListener('keydown', escCloseOverlay);
  } else {
    overlayRef.classList.add('d_none');

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
  let overlayTitle = document.getElementById('overlayTitle');

  let singlePokemon = dataPokemons[currentIndexOfPokemonBigCard];

  overlayImage.src = singlePokemon.sprites.other.dream_world.front_default;
  overlayTitle.textContent = singlePokemon.name;
}
