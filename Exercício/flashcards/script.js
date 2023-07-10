var card = document.querySelector('.card');
var isFlipped = false;

card.addEventListener('click', function() {
  if (isFlipped) {
    card.classList.remove('card-flipped');
  } else {
    card.classList.add('card-flipped');
  }
  
  isFlipped = !isFlipped;
});