document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
      { name: 'fries', img: 'images/fries.png' },
      { name: 'cheeseburger', img: 'images/cheeseburger.png' },
      { name: 'ice-cream', img: 'images/ice-cream.png' },
      { name: 'pizza', img: 'images/pizza.png' },
      { name: 'milkshake', img: 'images/milkshake.png' },
      { name: 'hotdog', img: 'images/hotdog.png' },
      { name: 'fries', img: 'images/fries.png' },
      { name: 'cheeseburger', img: 'images/cheeseburger.png' },
      { name: 'ice-cream', img: 'images/ice-cream.png' },
      { name: 'pizza', img: 'images/pizza.png' },
      { name: 'milkshake', img: 'images/milkshake.png' },
      { name: 'hotdog', img: 'images/hotdog.png' }
    ];
    // we given 0.5 to random number btwn 0-1 for 1 + and - so number can shuffle before and after
    cardArray.sort(() => 0.5 - Math.random());

    const flex = document.querySelector('.flex');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    // Creating  board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/white.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        flex.appendChild(card);
      }
    }

    // Checking for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img');
      const optionOneId = cardsChosenId[0];
      const optionTwoId = cardsChosenId[1];
      let resultDisplay1 = document.querySelector('#result_msg');

      if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        resultDisplay1.innerHTML = 'Warning! you have clicked same image twice!' ;
        setTimeout(()=>{
          resultDisplay1.innerHTML = '';
        }, 3000);   
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images/blaCK.png');
        cards[optionTwoId].setAttribute('src', 'images/black.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
        resultDisplay1.innerHTML = 'Congratulations! You found 1 pair' ;
        setTimeout(()=>{
          resultDisplay1.innerHTML = '';
        }, 3000);        
      }
      else {
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        resultDisplay1.innerHTML = 'You can do it! Try again!!!' ;
        setTimeout(() => {
          resultDisplay1.innerHTML = '';
        }, 2000);
      }
      cardsChosen = [];
      cardsChosenId = [];
      resultDisplay.textContent = cardsWon.length;
      let h3 = document.querySelector('#h3');
      let totalcard = cardArray.length / 2;
      if (cardsWon.length === cardArray.length / 2) {
        h3.innerHTML = '';
        resultDisplay.innerHTML = '' ;
        setTimeout(() => {
          resultDisplay1.innerHTML = 'Congratulations! You found total ' + totalcard + ' pairs';
        }, 3000);
      }
    }

    function flipCard() {
      let cardId = this.getAttribute('data-id');
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenId.push(cardId);
      this.setAttribute('src', cardArray[cardId].img);
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 700);
      }
    }

    createBoard();
  });
  function refreshPage(){
    window.location.reload();
} 