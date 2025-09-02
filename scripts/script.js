let namesPokemons = [];
let dataPokemons = [];
let offset = 0;
const limit = 20;
const maxPokemons = 40;

async function init() {
  await fetchNextBatch();
  renderPkSmallCards(dataPokemons);
}

function showLoadingState(button) {
  button.disabled = true;
  button.innerHTML = `<div class="container_spinner"><span class="spinner"></span> Loading... <img src="./assets/icons/snail.png" 
                        alt="snail icon" 
                        class="snail_img"></div>`;
}

function resetButtonState(button) {
  button.disabled = false;
  button.innerHTML = 'Load More';
}

function disableButtonNoMorePokemons(button) {
  button.disabled = true;
  button.innerHTML = 'No more Pokémons left';
}

async function fetchNextBatch() {
  offset += limit;
  await fetchPokemonNames();
  await getDataOfPokemons(namesPokemons);
}

function createDelay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loadNextPokemons() {
  let loadMoreButton = document.getElementById('loadMoreBtn');

  showLoadingState(loadMoreButton);

  await Promise.all([fetchNextBatch(), createDelay(3000)]);
  renderPkSmallCards(dataPokemons);

  if (dataPokemons.length >= maxPokemons) {
    disableButtonNoMorePokemons(loadMoreButton);
  } else {
    resetButtonState(loadMoreButton);
  }
}

async function fetchPokemonNames() {
  try {
    let response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    let responseAsJson = await response.json();

    for (let i = 0; i < responseAsJson.results.length; i++) {
      namesPokemons.push(responseAsJson.results[i]);
    }
  } catch (error) {
    console.log('Error fetching Pokemon names:', error);
  }
}

async function renderPkSmallCards() {
  let smallCardsContainer = document.getElementById('small_pk_cards');
  smallCardsContainer.innerHTML = '';

  for (let i = 0; i < namesPokemons.length; i++) {
    let singlePokemon = dataPokemons[i];
    smallCardsContainer.innerHTML += getHTMLForSmallPkCards(singlePokemon, i);
  }
}

async function fetchPokemonDataList(pokemonUrl) {
  try {
    let response = await fetch(pokemonUrl);
    let dataList = await response.json();
    return dataList;
  } catch (error) {
    console.log('Error fetching Pokemon data list', error);
  }
}

async function getDataOfPokemons(pokemonList) {
  for (let i = 0; i < pokemonList.length; i++) {
    let singlePokemon = pokemonList[i];
    let dataSinglePokemon = await fetchPokemonDataList(singlePokemon.url);
    // console.log(dataSinglePokemon.sprites.front_default);
    // console.log(dataPokemons[i].types[i].type.name);

    dataPokemons.push(dataSinglePokemon);
  }

  return dataPokemons;
}
