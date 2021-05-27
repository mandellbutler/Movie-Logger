const rating = async (event) => {
  event.preventDefault();
  $('#user-rating-form').on('change','[name="rating"]',function(){
    $('#selected-rating').text($('[name="rating"]:checked').val());
  });