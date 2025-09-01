let namesPokemons = [];
let dataPokemons = [];

async function init() {
  await fetchPokemonNames();
  let dataListPokemons = await getDataOfPokemons(namesPokemons);
  renderPkSmallCards(dataListPokemons);
}

async function fetchPokemonNames() {
  try {
    let response = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=40&offset=0'
    );
    let responseAsJson = await response.json();
    namesPokemons = responseAsJson.results;
  } catch (error) {
    console.log('Error fetching Pokemon names:', error);
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

async function renderPkSmallCards() {
  let smallCardsContainer = document.getElementById('small_pk_cards');
  smallCardsContainer.innerHTML = '';

  for (let i = 0; i < namesPokemons.length; i++) {
    let singlePokemon = dataPokemons[i];
    smallCardsContainer.innerHTML += getHTMLForSmallPkCards(singlePokemon, i);
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
