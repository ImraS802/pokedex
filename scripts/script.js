async function fetchDataPokemon() {
  try {
    let response = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=40&offset=0'
    );
    let responseAsJson = await response.json();
    console.log(responseAsJson);
  } catch (error) {
    console.log('Error fetching Pokemon data:', error);
  }
}

function init() {
  renderPokemons('results', 'small_pk_cards');
}

function renderPokemons(pkCardSmall) {
  let container = document.getElementById(pkCardSmall);
  container.innerHTML = '';

  for (let i = 0; i < results.length; i++) {
    container.innerHTML += getHTMLForSmallPkCards(); // next step create in template.js html
  }
}
