var Deck = function () {

  var cards = [];

  for (var iSuit in Suit) {
    var suit = Suit[iSuit];
    for (var iRank in Rank) {
      var rank = Rank[iRank]; 
      var card = new Card(suit, rank);

      cards.push(card);
    }
  }

  this.shuffle = function () {
    var index;
    var tempCard;
    var size = cards.length;

    while (size) {
      size--;

      index = Math.floor(Math.random() * size);

      tempCard = cards[size];
      cards[size] = cards[index];
      cards[index] = tempCard;
    }

    console.log(cards);
  };
};
