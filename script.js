const cards = document.querySelectorAll('.card');
let hasFlipCard = false;
let firstCard, secondCard;

function flipCard(){
    this.classList.add('flip');
    if(!hasFlipCard){
        hasFlipCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlipCard = false;
    checkForMatch();
}
function checkForMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }

    unflipCard();
}
function disableCards(){
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('clicl',flipCard);
}

cards.forEach(card => {
    card.addEventListener('click', flipCard) 
});



