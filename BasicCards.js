// This file should define a Node module that exports a constructor for creating basic flashcards, e.g.: module.exports = BasicCard;
// The constructor should accept two arguments: front and back.
var BasicCard = function(front, back) {
   if (this instanceof BasicCard) {
    // The constructed object should have a front property that contains the text on the front of the card.
    this.front = front;

    // The constructed object should have a back property that contains the text on the back of the card.
    this.back = back;
   } else {
       return new BasicCard(front, back);
   }
}

module.exports = BasicCard;