let currentIndexOfPokemonBigCard = 0;

function toggleOverlay(index = null) {
  let overlayRef = document.getElementById('overlay');
  let overlayImage = document.getElementById('overlayImage');

  if (index !== null) {
    currentIndexOfPokemonBigCard = index;

    let singlePokemonBigCard = dataPokemons[currentIndexOfPokemonBigCard];

    overlayRef.classList.remove('d_none');
    overlayImage.src =
      singlePokemonBigCard.sprites.other.dream_world.front_default;
    document.getElementById('overlayName').textContent =
      singlePokemonBigCard.name;
    document.getElementById(
      'overlayId'
    ).textContent = `#${singlePokemonBigCard.id}`;
    disableBackgroundScrolling();

    document.addEventListener('keydown', escCloseOverlay);
  } else {
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
  let overlayName = document.getElementById('overlayName'); // shows name of Pk on top of card
  let overlayId = document.getElementById('overlayId'); // shows Id of Pk on top of card

  let singlePokemon = dataPokemons[currentIndexOfPokemonBigCard];

  overlayImage.src = singlePokemon.sprites.other.dream_world.front_default;
  overlayName.textContent = singlePokemon.name;
  overlayId.textContent = `#${singlePokemon.id}`;
}

function disableBackgroundScrolling() {
  document.body.style.overflow = 'hidden';
}

function enableBackgroundScrolling() {
  document.body.style.overflow = 'auto';
}
