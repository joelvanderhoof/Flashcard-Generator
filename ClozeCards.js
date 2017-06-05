// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;
// The constructor should accept two arguments: text and cloze.
var ClozeCard = (clozeDeleted, partial, fullText) => {
    // The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
    this.clozeDeleted = clozeDeleted;

    // The constructed object should have a partial property that contains only the partial text.
    this.partial = partial;

    // The constructed object should have a fullText property that contains only the full text.
    this.fullText = fullText;
}

// The constructor should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.
ClozeCard.prototype.handleError = (error) => {

}

module.exports = ClozeCard;