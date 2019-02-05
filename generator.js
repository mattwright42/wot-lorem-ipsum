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
    'Courage to strengthen, fire to blind, music to daze, iron to bind.',
    'A flapping tongue can put you in the net instead of the fish.',
    'Fall in love with a man, and you end up doing laundry, even if it does belong to another man.',
    "It seems to me that kings - and queens - can be fools when they forget what they are and act like who they are, but they're worse when they only remember what they are and forget who.",
    "If you fell head first into a pigsty, you'd try to convince everybody you did it on purpose.",
    'That was all he ever really wanted from women; a smile, a dance, a kiss, and to be remembered fondly.',
    'The Creator made women to please the eye and trouble the mind.',
    'We are alike in many ways, you and I. There is a darkness in us. Darkness, pain, death. They radiate from us. If you ever love a woman, Rand, leave her and let her find another. It will be the best gift you can give her.',
    'We all have our limits. And we set them further out than we have any right.',
    'The more women there are about, the softer a wise man steps.',
    'A man is a man, on a throne or in a pigsty.',
    "Not thinkining about a thorn doesn't make it hurt your foot less.",
    "A fool puts her hand into a hollow tree without finding what's inside first.",
    "If you don't look for snakes, you cannot complain when one bites you.",
    'A gnarled old branch dulls the blade that severs a sapling.',
    "When the honey's out of the comb, there's no putting it back.",
    'Better to face the bear than run from it.',
    'A fool puts a burr under the saddle before she rides.',
    "At my age, if I make it up, it's still an old saying.",
    'Men always believe they are in control of everything around them. When they find out they are not, they think they have failed, instead of learning a simple truth women already know.',
    'When a woman says she will obey you, of her own will, it is time to sleep lightly and watch your back.',
    'I lead no armies, Warder. I command nothing save myself, and not always that.',
    "I trust you like a brother. Until the day you betray me. You have a parole for what you've done, in return for your teaching, and a better bargain than you deserve, but the day you turn against me, I will tear it up and bury it with you.",
    'Better to try understanding the sun than a woman.',
    'Even a queen stubs her toe, but a wise woman watches the path.',
    'If you must mount the gallows, give a jest to the crowd, a coin to the hangman, and make the drop with a smile on your lips.',
    'Never kiss a girl whose brothers have knife scars.',
    'Never gamble without knowing a way out.',
    "I can rest when I'm dead.",
    "The louder a man tells you he's honest, the harder you must hold onto your purse.",
    'The fox often offers the duck its pond.',
    'Waiting turns men into bears in a barn, and women into cats in a sack.',
    "'Wish' and 'want' trip the feet, but 'is' makes the path smoother.",
    'I will see you tonight. Or I will see you dead.',
    'I would burn the world and use my soul for tinder to hear her laugh again.',
    'It was easier to trip a fool than to knock him down.',
    "I'm no lord. I've more respect for myself than that.",
    "Stopping a man from what he wants to do is like taking a sweet from a child. Sometimes you have to do it, but sometimes it just isn't worth the trouble.",
    'If you are not mine, then you are dead.',
    'Take what you can have. Rejoice in what you can save, and do not mourn your losses too long.',
    "There's no point in letting honey age too long before you eat it.",
    "It's too late to change your mind after you've jumped off the cliff.",
    'The lions sing and the hills take flight. The moon by day, and the sun by night. Blind woman, deaf man, jackdaw fool. Let the Lord of Chaos rule.',
    'A slow horse does not always reach the end of the journey.',
    'The best way to apologize to a man is to trip him in a secluded part of the garden.',
    'Clutch the bramble and you will be pricked.',
    'The only way to live is to die. I must die. I deserve only death.',
    'Victors write history.',
    'Men believe the worst easily, and women believe it hides something still darker.',
    "A woman's eyes cut deeper than a knife.",
    'Dance with her, and she will forgive much; dance well, and she will forgive anything.',
    "Dance well with a woman, and she's halfway yours.",
    "No man should have another man's voice in his head.",
    'An arrow may not be a shocklance, yet it can still kill you.',
    "What can't be changed must be endured.",
    "The pike does not ask the frog's permission before dining.",
    'We are all fools sometimes, child, yet a wise woman learns to limit how often.',
    'What is too absurd to believe is believed because it is too absurd to be a lie.',
    'If I could find a way to escape my destiny, do I deserve to?',
    'We hear less, Davram Bashere, but perhaps sometimes we see more.',
    'Pride fills me. I am sick with the pride that destroyed me.',
    'A man must know when to retreat from a woman, but a wise man knows that sometimes he must stand and face her.',
    'There was a price to be paid for any decision he made. There was a price for who he was. Other people paid it.',
    'First things first; take care of what can be done now before worrying too long over what might never be.',
    'A man without trust might as well be dead.',
    'The best way to avoid trouble is to make sure no one wants to trouble you.',
    'You must surrender before you can guide.',
    'If wishes were wings, pigs would fly.',
    "What you need isn't always what you want.",
    "A man's dreams are a maze even he cannot know.",
    'How people see you first is what they hold hardest in their minds. It is the way of the world. You can step down from a throne, and even if you behave like a farmer in a pigsty, some part in each of them will remember that you did descend from a throne. But if they see only a young man first, a country man, they will resent him stepping up to the throne later, whatever his right, whatever his power.',
    "The Wheel of Time and the wheel of a man's life turn alike without pity or mercy.",
    "You never exape the traps you spin yourself. Only a greater power can break a power, and then you're trapped again. Trapped forever so you cannot die.",
    'What you want is what you cannot have. What you cannot have is what you want.',
    'The yellowfly is almost too small to see, but if you leave its egg in your skin, you will lose an arm or leg before it hatches - if it does not kill you.',
    'Death rides on my shoulder, death walks in my footsteps. I am death.',
    "The wheel of a man's life. No mercy. No pity.",
    'If it hurst too much, make it hurt someone else instead.',
    'Nothing ever goes as you expect. Expect nothing, and you will not be surprised. Expect nothing. Hope for nothing. Nothing.',
    'Break the seals. Break the seals, and end it. Let me die forever.',
    "When a young woman's cheeks redden for no apparent reason, there is usually a man involved.",
    'A cat for a hat, or a hat for a cat. But nothing for nothing.',
    'You cannot please everyone. You cannot soothe everyone.',
    'What I love I destroy. What I destroy, I love.',
    'Women do not become exhausted, they only exhaust others.',
    'The road ahead of you is long, dark, and, I very much fear, bloodstained. I also very much fear that you will take us all down that road. But you must live to reach the end of it.',
    'Let most men have a finger, and they will have the whole hand before you know. Let a clan chief have a finger, and he will have the entire arm.',
    "When you wish for so long that you could hear something, and then suddenly, with no warning, you do, it is like a lightning strike and rain on parched ground at the same time. You're stunned, but you cannot hear enough.",
    'Never prod a woman unless you must. She will kill you faster than a man and for less reason, even if she weeps over it after.',
    'Let the dead rest, and care for the living.',
    'A crafty enemy will set a weak ambush you are meant to break through. Confident because you have dealt with the threat, your guard relaxed, you walk into the second, stronger ambush.',
    "Young men can be impetuous, young men can be rush, but the Car'a'carn cannot let himself be a young man.",
    'By the look of you, Nynaeve, I could almost think you were angry, but I know you have such a sweet disposition people ask you to dabble your fingers in their tea.',
    'Caution once forgotten could be forgotten once too often.',
    'If you try putting a woman on a horse when she does not want to go, she may put a knife in your ribs.',
    "We are going to tickle some Aes Sedai under the chin, rescue a mule, and put a snip-nosed girl on the Lion Throne. Oh yes. That's Aviendha. Don't look at her crosswise, or she'll try to cut your throat and probably slit her own by mistake.",
    'We are always more afraid than we wish to be, but we can always be braver than we expect.',
    "Men always say they didn't mean it that way. You would think they spoke a different language.",
    "If the world is ending, a woman will want time to fix her hair. If the world's ending, a woman will take time to tell a man something he's done wrong.",
    'There are things worth fighting for.',
    'You cannot tell a man he has the power to make the earth shake, then expect him to walk small.',
    'If you pursue two hares, both will escape you.',
    "Often you don't know whether a woman is friend, enemy or lover until it is too late. Sometimes, she is all three.",
    'Cheer the bull, or cheer the bear; cheer both, and you will be trampled and eaten.',
    "I will use anybody I must. You said it yourself; I am who I am. And I'm using myself up, Perrin, because I have to. Just like I'll use anybody I have to. We don't have a choice anymore. Not me, not you, not anybody!",
    "I always thought the stole weighted about as much as three good men. The Amyrlin has few easy decisions to make, and fewer where she can be sure. Do what you myst, and pay the price if you're wrong. Sometimes if you are right, too.",
    "Honor? Maybe they're letting him sleep on silk, but a prisoner is still a prisoner.",
    'The only man completely at peace is a man without a navel.'
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
