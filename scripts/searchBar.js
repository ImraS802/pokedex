let isSearching = false;

function toggleSearchButton() {
  const query = document.getElementById('searchInput').value.trim();
  const searchBtn = document.getElementById('searchBtn');
  searchBtn.disabled = query.length < 3;
}

async function handleSearch() {
  let query = document.getElementById('searchInput').value.toLowerCase().trim();
  let loadMoreButton = document.getElementById('loadMoreBtn');

  if (query.length < 3) {
    isSearching = false;
    renderPkSmallCards(dataPokemons.slice(0, limit));
    loadMoreButton.innerHTML = 'Load More';
    return;
  }

  isSearching = true;

  let filteredNames = namesPokemons.filter((p) =>
    p.name.toLowerCase().startsWith(query)
  );

  let filteredData = [];
  for (let pokemon of filteredNames) {
    let existing = dataPokemons.find((p) => p.name === pokemon.name);
    if (existing) {
      filteredData.push(existing);
    } else {
      let dataSinglePokemon = await fetchPokemonDataList(pokemon.url);
      filteredData.push(dataSinglePokemon);
    }
  }
  renderPkSmallCards(filteredData);
  loadMoreButton.innerHTML = 'Back to Homepage';
}

function loadMoreOrBack() {
  let loadMoreButton = document.getElementById('loadMoreBtn');
  let searchInput = document.getElementById('searchInput');

  if (isSearching) {
    searchInput.value = '';
    document.getElementById('searchBtn').disabled = true;

    isSearching = false;
    renderPkSmallCards(dataPokemons.slice(0, limit));
    loadMoreButton.innerHTML = 'Load More';
  } else {
    loadNextPokemons();
  }
}
