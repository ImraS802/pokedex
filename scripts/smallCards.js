let namesPokemons = [];
let dataPokemons = [];
let startAt = 0;
const limit = 20;
const maxPokemons = 60;

async function init() {
  await fetchNextBatch();
  renderPkSmallCards(dataPokemons.slice(0, limit));
  const loadMoreButton = document.getElementById('loadMoreBtn');
  loadMoreButton.style.display = 'block';
}

function showLoadingState(buttonForLoading) {
  buttonForLoading.disabled = true;
  buttonForLoading.innerHTML = `<div class="container_spinner"><span class="spinner"></span> Loading... <img src="./assets/icons/snail.png" 
                        alt="snail icon" 
                        class="snail_img"></div>`;
}

function resetButtonState(buttonForLoading) {
  buttonForLoading.disabled = false;
  buttonForLoading.innerHTML = 'Load More';
}

function disableButtonNoMorePokemons(buttonForLoading) {
  buttonForLoading.disabled = true;
  buttonForLoading.innerHTML = 'No more Pokémons left';
}

async function fetchNextBatch() {
  await fetchPokemonNames();
  await getDataOfPokemons(namesPokemons);
  startAt += limit;
}

function createDelay(ms) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
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
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${startAt}`
    );
    let responseAsJson = await response.json();

    for (let i = 0; i < responseAsJson.results.length; i++) {
      namesPokemons.push(responseAsJson.results[i]);
    }
  } catch (error) {
    console.log('Error fetching Pokemon names:', error);
  }
}

function renderPkSmallCards(list) {
  let smallCardsContainer = document.getElementById('smallPkCards');
  smallCardsContainer.innerHTML = '';

  for (let i = 0; i < list.length; i++) {
    let singlePokemon = list[i];

    const globalIndex = dataPokemons.findIndex(
      (p) => p && p.name === singlePokemon.name
    );

    const indexForOverlay = globalIndex !== -1 ? globalIndex : i;

    smallCardsContainer.innerHTML += getHTMLForSmallPkCards(
      singlePokemon,
      indexForOverlay
    );
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
  let startIndex = dataPokemons.length;
  let newPokemons = pokemonList.slice(startIndex);

  for (let i = 0; i < newPokemons.length; i++) {
    let singlePokemon = newPokemons[i];
    let dataSinglePokemon = await fetchPokemonDataList(singlePokemon.url);

    dataPokemons.push(dataSinglePokemon);
  }

  return dataPokemons;
}
