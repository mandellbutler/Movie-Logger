const searchHandler = async (e) => {
  e.preventDefault();
  const search = document.querySelector('#input-search').value.trim();
  console.log(search);
  if (search) {
    await fetch('/omdb/search/title', {
      method: 'POST',
      body: JSON.stringify({ search }),
      header: { 'Content-Type': 'application/json' },
    });
  }
};

document
  .querySelector('#search-form')
  .addEventListener('submit', searchHandler);
