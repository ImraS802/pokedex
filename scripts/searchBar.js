function toggleSearchButton() {
  let input = document.getElementById('searchInput').value;
  const button = document.getElementById('searchBtn');

  if (input.length >= 3) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }

  if (input.length === 0) {
    resetHomeView();
  }
}

function searchPokemon() {
  let input = document.getElementById('searchInput').value.toLowerCase();
  let results = filterPokemonsByName(input);

  renderSearchResults(results);
}

function filterPokemonsByName(searchTerm) {
  let filtered = [];
  for (let i = 0; i < dataPokemons.length; i++) {
    let name = dataPokemons[i].name.toLowerCase();
    if (name.indexOf(searchTerm) === 0) {
      filtered.push(dataPokemons[i]);
    }
  }

  return filtered;
}

function toggleNoResultsMessage(numberOfResults) {
  const message = document.getElementById('noResultsMsg');

  if (numberOfResults === 0) {
    message.style.display = 'block';
  } else {
    message.style.display = 'none';
  }
}

async function renderSearchResults(pokemonsToRender) {
  let smallCardsContainer = document.getElementById('smallPkCards');
  smallCardsContainer.innerHTML = '';

  for (let i = 0; i < pokemonsToRender.length; i++) {
    let singlePokemon = pokemonsToRender[i];
    smallCardsContainer.innerHTML += getHTMLForSmallPkCards(singlePokemon, i);
  }
  toggleNoResultsMessage(pokemonsToRender.length);
  setBackHomeButton();
}

function toggleLoadMoreButton(resultCount) {
  const button = document.getElementById('loadMoreBtn');
  if (resultCount > 0) {
    button.style.display = 'none';
  } else {
    button.style.display = 'block';
  }
}

function setBackHomeButton() {
  const button = document.getElementById('loadMoreBtn');
  button.style.display = 'block';
  button.innerHTML = 'Back Home';
  button.onclick = function () {
    resetHomeView();
  };
}

function resetHomeView() {
  startAt = 0;
  document.getElementById('smallPkCards').innerHTML = '';
  renderPkSmallCards(dataPokemons);

  const button = document.getElementById('loadMoreBtn');
  button.innerHTML = 'Load More';
  button.onclick = function () {
    loadNextPokemons();
  };

  const message = document.getElementById('noResultsMsg');
  message.style.display = 'none';

  document.getElementById('searchInput').value = '';
  document.getElementById('searchBtn').disabled = true;
}

function handleSearchKey() {
  let input = document.getElementById('searchInput').value.trim().toLowerCase();

  if (input.length >= 3) {
    searchPokemon();
  } else if (input.length === 0) {
    resetHomeView();
  }
}
