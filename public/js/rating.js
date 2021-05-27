// const rating = async (event) => {
//   event.preventDefault();
//   $('#user-rating-form').on('change','[name="rating"]',function(){
//     $('#selected-rating').text($('[name="rating"]:checked').val());
//   });
// };

const ratingHandler = async (e) => {
  e.preventDefault();
  const rating = e.target.value;
  const imdbId = document.querySelector('#user-rating-form').dataset.id;
  const response = await fetch(`/api/rating/${imdbId}`, {
    method: 'POST',
    body: JSON.stringify({ rating }),
    headers: {
      'Content-type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('failed to add rating');
  }

};

document
  .querySelectorAll('.rating-selection')
  .forEach((element) => element.addEventListener('click', ratingHandler));
