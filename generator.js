//Code that generates the random lorem ipsum text

//Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

//Constructor function that creates an object with the sentences property
function GenerateNewText() {
  //Add property tot he object
  this.sentences = [
    "a'dam",
    'Elaida',
    "Aan'allein",
    'Abaldar Yulan',
    'Abell Cauthon',
    'Logain',
    'Accepted',
    'Aelfinn',
    'Aes Sedai',
    'Age of Legends',
    'Agelmar Jagad',
    'Aginor',
    'Aiel',
    'Aiel Waste',
    'Seia Doon',
    'Far Aldazar Din',
    'Rahien Sorei',
    'Sovin Nai',
    'Far Dareis Mai',
    "Hama N'dore",
    'Cor Darei',
    'Aethan Dor',
    "Shae'en Mataal",
    "Sha'mad Conde",
    'Tain Shari',
    "Duadhe Mahdi'in",
    'weave',
    'Air',
    'Water',
    'Fire',
    'Earth',
    'Spirit',
    "Rand al'Thor",
    'Perrin Aybara',
    'Matrim Cauthon',
    "Egwene al'Vere",
    "Nynaeve al'Meara",
    'White Ajah',
    'Black Ajah',
    'Blue Ajah',
    'Yellow Ajah',
    'Green Ajah',
    'Red Ajah',
    'Gray Ajah',
    'Brown Ajah'
  ];
}

//Method to the GenerateNewText constructor function that generates a random sentence
GenerateNewText.prototype.getRandomSentence = function() {
  let randomSentence = this.sentences[
    Math.floor(Math.random() * this.sentences.length)
  ];
  return randomSentence;
};

//Method to the GenerateNewText constructor function that generates a paragraph from random sentences
GenerateNewText.prototype.getParagraph = function() {
  let paragraph = '';
  //Set the minimum number of words
  let minimumCharacterLength = 250;
  let firstSentence = true;
  while (paragraph.length < minimumCharacterLength) {
    if (firstSentence) {
      paragraph = paragraph.concat(this.getRandomSentence());
      firstSentence = false;
    } else {
      paragraph = paragraph.concat(' ' + this.getRandomSentence());
    }
  }
  return paragraph;
};

//Method to the GenerateNewText constructor function that generates multiple paragraphs from paragraphs
GenerateNewText.prototype.getAllParagraphs = function(numberOfParagraphs) {
  let allParagraphs = [];
  //Generate the number of paragraphs as specified by the user
  while (allParagraphs.length < numberOfParagraphs) {
    allParagraphs.push(this.getParagraph());
  }
  //Convert array into HTML string
  let paragraphHTML = '';
  allParagraphs.forEach(function(paragraph) {
    paragraphHTML += '<p>' + paragraph + '</p>';
  });
  return paragraphHTML;
};

module.exports = loremIpsum;
