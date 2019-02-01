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
    'In the Borderlands, sheepherder, if a man has the raising of a child, that child is his, and none can say different.',
    'Love is an odd thing. As odd a thing as there is.',
    "Here, southlander, you can't quit while you are winning. Better than when I'm losing.",
    'Soon comes the day all shall be free. Even you, and even me. Soon comes the day all shall die. Surely you, but never I.',
    "It's never over, al'Thor. The battle's never done.",
    "There is an old saying here in the Borderlands: 'Better to have one woman on your side than ten men.'",
    'There is one rule, above all others, for being a man. Whatever comes, face it on your feet.',
    'Always plan for the worst, that way all your surprises will be pleasant ones.',
    'Men often mistake killing and revenge for justice. They seldom have the stomach for justice.',
    'A pig painted gold is still a pig.',
    'My mother always told me the best way to learn to deal with a man was to learn to ride a mule. She said they have about equal brains most of the time. Sometimes the mule is smarter.',
    'Men! When you cannot win an argument, you either run away or resort to force.',
    'I may be a fool, but I intend to be a live fool.',
    'A man who will not die to save a woman is no man.',
    'All men dream. But I know dreams for dreams. This is reality.',
    'A shaping stone, to make us; a testing ground to prove our worth; and a punishment for the sin.',
    'Jump in a hole without looking, and there’ll be a snake in it every time.',
    'You break your neck, and I’ll see it mended just so I can break it again.',
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
