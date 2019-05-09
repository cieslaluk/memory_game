const CARDS = document.querySelectorAll('.memory_card');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) false;

this.classList.toggle('flip');

if(!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
} else {
    secondCard = this;

    if (firstCard.dataset.name === secondCard.dataset.name){
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard)
        resetBoard();
    } else {
        lockBoard = true;
        setTimeout(()=>{
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            
            resetBoard();
        }, 1500);
       
    }
}
};

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    CARDS.forEach(card =>{
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();


CARDS.forEach(card => card.addEventListener('click', flipCard))