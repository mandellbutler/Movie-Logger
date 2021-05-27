const searchHandler = async (e) => {
  e.preventDefault();
  const search = document.querySelector('.input-search').value.trim();
  if (search) {
    document.location.replace(`/omdb/search?q=${search}`);
  }
};

document
  .querySelector('.search-form')
  .addEventListener('submit', searchHandler);

// req.query with ?