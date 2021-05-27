const searchHandler = async (e) => {
  e.preventDefault();
  const search = document.querySelector('.input-search').value.trim();
  if (search) {
    const response = await fetch('/omdb/search/title', {
      method: 'POST',
      body: JSON.stringify({ search }),
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

document
  .querySelector('.search-form')
  .addEventListener('submit', searchHandler);
