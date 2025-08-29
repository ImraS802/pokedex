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
