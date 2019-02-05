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
    'Do you know how to unite the people behind you, Child Carridin? The quickest way? Loose a lion - a rabid lion - in the streets. And when panic grips the people, once it has turned their bowels to water, calmly tell them you will deal with it. Then you kill it, and order them to hang the carcass up where everyone can see. Before they have time to think, you give another order, and it will be obeyed. And if you continue to give orders, they will continue to obey, for you will be the one who saved them, and who better to lead?',
    'Tonight you will eat fish. Tomorrow, you may die.',
    'Should and would build no bridges.',
    '...but who can know the heart of a man? Not even he himself, I suspect. A man is the easiest animal to put on a leash, and the hardest to keep leashed. Even when he chooses it himself.',
    'A flapping tongue has killed more men than sudden storms ever did.',
    'Most of those we call heroes only did what they had to do.',
    "Men always seem to refuse to admit they are sick until they're sick enough to make twice as much work for women. Then they claim they're well too soon, with the same result.",
    "When there are fish heads and blood in the water, you don't need to see the silverpike to know they are there.",
    'Trust is as slippery as a basket of eels sometimes.',
    "Once you decide to gut a fish, there's no use waiting till it rots.",
    'One pretty woman means fun at the dance. Two pretty women mean trouble in the house. Three pretty women mean run for the hills.',
    'If a woman does need a hero, she needs him today, not tomorrow.',
    'Death comes for us all. We can only choose how to face it when it comes.',
    'I have heard it said that a man caught between his wife and a Wise One often wishes for a dozen old enemies to fight instead. A man caught between a wife and three Wise Ones, and the wife a Wise One herself, must consider trying to slay Sightblinder.',
    'A bloody hero. Thom, if I ever look like acting the hero again, you kick me.',
    'Any fool knows men and women think differently at times, but the biggest difference is this: Men forget, but never forgive; women forgive, but never forget.',
    'Better ten days of love than years of regretting.',
    'Men! Too blind to see what a stone could see, and too stubborn to be trusted to think for themselves.',
    'The arrogance of men never ceases to amaze me. You all think everything has to do with you, and every woman has to desire you.',
    'To lead is neither to push or pull.',
    'Nimble finger and nimble wits will take you a good deal further than a sword and muscles. Sharp eyes help as well, but fortunately, I have these things.',
    'It is better to be the hammer than the nail.',
    'Men fight when they should run, and fools fight when they should run. But I had no need to say it twice.',
    'I expect a civil word for a civil word!',
    "There's no time for winking at the men when you're busy bailing the boat.",
    "Surprising what you can dig out off books if you read long enough, isn't it?",
    'You read too much and understand too little.',
    'Prophecy is most dangerous when you try to make it happen...The Pattern weaves itself around you, but when you try to weave it, even you cannot hold it.',
    'The Wheel weaves as the Wheel wills, and we are only the thread of the Pattern.',
    'On the heights, the paths are paved with daggers.',
    'No wine for me. Strange enough things happen when my head is clear. I want to know the difference.',
    'You have made a place in my heart where I thought there was no room for anything else. You have made flowers grow where I cultivated dust and stones. Remember this, on this journey you insist on making. If you die, I will not survive you long.',
    'As well you try to understand the sun, Perrin. It simply is, and it is not to be understood. You cannot live without it, but it exacts a price. So with women.',
    'For the young, death is an enemy they wish to try their strength against. For those of us a little older, she is an old friend, an old lover, but one we are not eager to meet again soon.',
    'You have to understand, child. Everyone wants someone in their life, someone who cares for them, someone they can care for. Even a queen.',
    'You could weave silk from pig bristles before you could make a man anything but a man.',
    'A weeping woman is a bucket with no bottom.',
    'It is better to guide people than try to hammer them into a line.',
    'Do not trouble trouble till trouble troubles you.',
    "A ship is alive, and he is like a man, with a true man's heart. Treat him well and care for him properly, and he will fight for you against the worst of the sea. He will fight to keep you alive even after the sea has long since given him his own deathstroke. Neglect him, though, ignore the small warnings he gives of danger, and he will drown you in a flat sea beneath a cloudless sky.",
    'Humankind is made for uncertainty, struggle, choice and change.',
    'If you plan for the worst, all surprises are pleasant.',
    "I'll not have you bleeding to death on me. That would be just like you, to die and leave me the work of burying you. You have no consideration.",
    'Courage to strengthen, fire to blind, music to daze, iron to bind.'
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
