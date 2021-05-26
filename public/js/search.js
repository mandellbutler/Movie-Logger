const searchHandler = async (e) => {
  e.preventDefault();
  const searchTerm = document.querySelector('#search-button').value.trim();

  if (searchTerm) {
    await fetch('/omdb/search', {
      method: 'GET',
      body: JSON.stringify({ search: searchTerm }),
      header: { 'Content-Type': 'application/json' }
    });
  }
};

document.querySelector('#search-button').addEventListener('click', searchHandler);
