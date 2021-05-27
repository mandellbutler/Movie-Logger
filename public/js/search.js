const searchHandler = async (e) => {
  e.preventDefault();
  const search = document.querySelector('.input-search').value.trim();
  if (search) {
    document.location.replace(`/search/${search}`);
  }
};

document
  .querySelector('.search-form')
  .addEventListener('submit', searchHandler);

// req.query with ?