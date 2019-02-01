//Code that generates the random lorem ipsum text

//Create a new object called loremIpsum by invoking the GenerateNewText constructor function
const loremIpsum = new GenerateNewText();

//Constructor function that creates an object with the sentences property
function GenerateNewText() {
  //Add property tot he object
  this.sentences = [
    'The Wheel of Time turns, and Ages come and pass, leaving memories that become legend. Legend fades to myth, and even myth is long forgotten when the Age that gave it birth comes again.',
    'In wars, boy, fools kill other fools for foolish causes.',
    'Weep for what is lost forever.',
    'What is already woven cannot be undone. It will not make the trees grow again for you to bring the building down on our heads.',
    "Think if you want to stay alive. Fear will kill you if you don't control it.",
    "You'll use it, boy, and as long as you hate using it, you would use it more wisely than most men would. Wait. If ever you don't hate it any longer, then will be the time to throw it as far as you can and run the other way.",
    'Nobody tells us how to be men. We just are.',
    'The best lie is often one too ridiculous to be taken for a lie.',
    'The fact that the price must be paid is proof it is worth paying.',
    'The rose petal floats on water. The kingfisher flashes above the pond. Life and beauty swirl in the midst of death.',
    'When you have never known a thing except to dream, it becomes more than a talisman.',
    "I will never shame you. I will hate the man you choose because he is not me, and love him if he makes you smile. No woman deserves the sure knowledge of widow's black as her brideprice, you least of all.",
    'The leaf lives its appointed time, and does not struggle against the wind that carries it away. The leaf does no harm, and finally falls to nourish new leaves. So it should be with all men. And women.',
    'Teach him how you will, a pig will never play the flute.',
    'Take life as it comes. Run when you have to, fight when you must, rest when you can.',
    'An Aes Sedai never lies, but the truth she speaks, may not be the truth you think you hear.',
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
