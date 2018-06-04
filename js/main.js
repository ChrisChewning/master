
// Create an array of objects for the cards' data.

var cards = [
  { //cardId 0
rank: 'queen',
suit: 'hearts',
cardImage: 'images/queen-of-hearts.png'
},
{ //cardId 1
rank: 'queen',
suit: 'diamonds',
cardImage: 'images/queen-of-diamonds.png'
},
{ //cardId 2
rank: 'king',
suit: 'hearts',
cardImage: 'images/king-of-hearts.png'
},
{ //cardId 3
rank: 'king',
suit: 'diamonds',
cardImage: 'images/king-of-diamonds.png'
}
];


//VARIABLE 1: Stores data for the cards when they are played.
var cardsInPlay = [];

//FUNCTION 1: Checks for a match. Note: 0 & 1 are indexes for which cards are turned over.
var checkForMatch = function () {
  console.log('cardsInPlay[0]: ', cardsInPlay[0]);
  console.log('cardsInPlay[1]: ', cardsInPlay[1]);
if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
/*  if cards
};
*/
};




//FUNCTION 2: User flips card.
var flipCard = function () {
  var cardId = this.getAttribute("data-id");
  console.log(cardId);
//DISPLAY the card in the console.

//PUSH card to array when played.


  cardsInPlay.push(cards[cardId]);
  console.log("I'm loggin out the card ranks", cards[cardId].rank);
// console.log("User flipped " + cards[cardId].rank);
this.setAttribute('src', cards[cardId].cardImage); //changes front of card to back of card.


//IF 2 cards have been played call FUNCTION 1 from inside FUNCTION 2.
//The setTimeout function delays the checkForMatch function from firing for half a second.
  if (cardsInPlay.length === 2) {
    // If so, call the checkForMatch function
    setTimeout(function() {
      checkForMatch();
    }, 500);
  }

};



var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
  var cardElement = document.createElement('img');
  cardElement.setAttribute('src', 'images/back.png');
  //^ the directions say don't put '' around src but it doesn't show the board
  //when I do.
  cardElement.setAttribute('data-id', i); //data id of 0, 1, 2, or 3.
  cardElement.addEventListener('click', flipCard);
  document.getElementById("game-board").appendChild(cardElement); //why not[0]
  //If you put 0 it doesn't show the cards at all.
}
};


createBoard();
