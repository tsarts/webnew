let reviews = [];
let currentRating = 0;

function submitReview() {
  const username = document.getElementById("username").value;
  const rating = currentRating;
  const comment = document.getElementById("comment").value;

  const review = {
    username,
    rating,
    comment,
  };

  reviews.push(review);
  displayReviews();
  clearForm();
}

function displayReviews() {
  const reviewsContainer = document.getElementById("reviews-container");
  reviewsContainer.innerHTML = "";

  reviews.forEach((review) => {
    const reviewElement = document.createElement("div");
    reviewElement.innerHTML = `<strong>${review.username}</strong> - Rating: ${review.rating}/5<br>${review.comment}<hr>`;
    reviewsContainer.appendChild(reviewElement);
  });
}

function clearForm() {
  document.getElementById("username").value = "";
  document.getElementById("comment").value = "";
  resetStars();
}

function rate(stars) {
  currentRating = stars;
  resetStars();
  highlightStars(stars);
}

function resetStars() {
  const stars = document.querySelectorAll(".rating-stars span");
  stars.forEach((star) => {
    star.classList.remove("active");
  });
}

function highlightStars(stars) {
  const selectedStars = document.querySelectorAll(`.rating-stars span:nth-child(-n+${stars})`);
  selectedStars.forEach((star) => {
    star.classList.add("active");
  });
}