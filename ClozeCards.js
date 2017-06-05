// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: module.exports = ClozeCard;
// The constructor should accept two arguments: text and cloze.
var ClozeCard = function(text, cloze) {
    // The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
    this.cloze = cloze;

    // The constructed object should have a partial property that contains only the partial text.
    this.partial = text.replace(cloze, "...");

    // The constructed object should have a fullText property that contains only the full text.
    this.fullText = text;

    // The constructor should throw or log an error when the cloze deletion does not appear in the input text.
    var isInText = new RegExp('\\b' + cloze + '\\b').test(text);

    if (isInText != true) {
        throw '"' + cloze + '"' + " does not appear in " + '"' + text + '"';
    }
}

// Use prototypes to attach these methods, wherever possible.

module.exports = ClozeCard;