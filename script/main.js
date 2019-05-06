const CARDS = document.querySelectorAll('.memory_card');

function flipCard(){
this.classList.toggle('flip');
};

CARDS.forEach(card => card.addEventListener('click', flipCard))