window.onload = function() {
  var quotesBase = {
    items: [{
      id: 1,
      quote: "Don't cry because it's over, smile because it happened.",
      author: "DR. SEUSS"
    }, {
      id: 2,
      quote: "A flatterer is a friend who is your inferior, or pretends to be so.",
      author: "ARISTOTLE"
    }, {
      id: 3,
      quote: "A penny saved is a penny earned.",
      author: "BENJMAIN FRANKLIN"
    }, {
      id: 4,
      quote: "All human actions have one or more of these seven causes: chance, nature, compulsion, habit, reason, passion, and desire.",
      author: "ARISTOTLE"
    }, {
      id: 5,
      quote: "All paid jobs absorb and degrade the mind.",
      author: "ARISTOTLE"
    }, {
      id: 6,
      quote: "A room without books is like a body without a soul.",
      author: "MARCUS TULLIUS CICERO"
    }, {
      id: 7,
      quote: "An investment in knowledge always pays the best interest.",
      author: "BENJAMIN FRANKLIN"
    }, {
      id: 8,
      quote: "Anger is never without Reason, but seldom with a good one.",
      author: "BENJAMIN FRANKLIN"
    }, {
      id: 9,
      quote: "Any society that would give up a little liberty to gain a little security will deserve neither and lose both.",
      author: "BENJAMIN FRANKLIN"
    }, {
      id: 8,
      quote: "Banking establishments are more dangerous than standing armies.",
      author: "THOMAS JEFFERSON"
    }, {
      id: 9,
      quote: "Be careful when you fight the monsters, lest you become one.",
      author: "FRIEDRICH NIETZSCHE"
    }, {
      id: 10,
      quote: "Before God we are all equally wise - and equally foolish.",
      author: "ALBERT EINSTEIN"
    }, {
      id: 11,
      quote: "Corporation, n. An ingenious device for obtaining individual profit without individual responsibility.",
      author: "AMBROSE BIERCE"
    }, {
      id: 12,
      quote: "Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight.",
      author: "BENJAMIN FRANKLIN"
    }, {
      id: 13,
      quote: "Do not throw the arrow which will return against you.",
      author: "KURDISH PROVERB"
    }, {
      id: 14,
      quote: "Dreams come true. Without that possibility, nature would not incite us to have them.",
      author: "JOHN UPDIKE"
    }, {
      id: 15,
      quote: "Everything has its beauty but not everyone sees it.",
      author: "CONFUCIUS"
    }, {
      id: 16,
      quote: "Give a man a fish and you feed him for a day. Teach a man how to fish and you feed him for a lifetime.",
      author: "LAO TZU"
    }, {
      id: 17,
      quote: "God heals, and the doctor takes the fees.",
      author: "BENJAMIN FRANKLIN"
    }, {
      id: 18,
      quote: "Happiness is when what you think, what you say, and what you do are in harmony.",
      author: "MAHATMA GANDHI"
    }, {
      id: 19,
      quote: "I count him braver who overcomes his desires than him who conquers his enemies, for the hardest victory is over self. ",
      author: "ARISTOTLE "
    }, {
      id: 20,
      quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
      author: " Oscar Wilde"
    }, {
      id: 21,
      quote: "I don't know who my grandfather was. I am much more concerned to know who his grandson will be. ",
      author: "ABRAHAM LINCOLN"
    }, {
      id: 22,
      quote: "I have no special talents. I am only passionately curious.",
      author: "ALBERT EINSTEIN"
    }, {
      id: 23,
      quote: "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.",
      author: "ALBERT EINSTEIN"
    }, {
      id: 24,
      quote: "I never teach my pupils. I only attempt to provide the conditions in which they can learn.",
      author: "ALBERT EINSTEIN"
    }, {
      id: 25,
      quote: "Life is what happens to you while you're busy making other plans.",
      author: "Allen Saunders"
    }, {
      id: 26,
      quote: "If you chase two rabbits, you will lose them both.",
      author: "NATIVE AMERICAN SAYING"
    }, {
      id: 27,
      quote: "I'm a slow walker, but I never walk back.",
      author: "ABRAHAM LINCOLN"
    }, {
      id: 28,
      quote: "It does not matter how slowly you go so long as you do not stop.",
      author: "CONFUCIUS"
    }, {
      id: 29,
      quote: "It is not the strongest of the species that survive, but the one most responsive to change.",
      author: "CHARLES DARWIN"
    }, {
      id: 30,
      quote: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
      author: "ARISTOTLE"
    }, {
      id: 31,
      quote: "Life is like riding a bicycle. To keep your balance you must keep moving.",
      author: "ALBERT EINSTEIN"
    }, {
      id: 32,
      quote: "Love is the triumph of imagination over intelligence.",
      author: "H. L. MENCKEN"
    }, {
      id: 33,
      quote: "Meditation brings wisdom, lack of meditation leaves ignorance. Know well what leads you forward and what holds you back.",
      author: "BUDDHA"
    }, {
      id: 34,
      quote: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
      author: "WILLIAM SHAKESPEARE"
    }, {
      id: 35,
      quote: "Never trust a computer you can't throw out a window.",
      author: "STEVE WOZNIAK"
    }, {
      id: 36,
      quote: "Obstacles are those frightful things you see when you take your eyes off the goal.",
      author: "HENRY FORD"
    }, {
      id: 37,
      quote: "One doesn't discover new lands without losing sight of the shore.",
      author: "ANDRE GIDE"
    }, {
      id: 38,
      quote: "Only sick music makes money today.",
      author: "FRIEDRICH NIETZSCHE"
    }, {
      id: 39,
      quote: "Only the educated are free.",
      author: "EPICTETUS"
    }, {
      id: 40,
      quote: "People can have the Model T in any color – so long as it's black.",
      author: "HENRY FORD"
    }, {
      id: 41,
      quote: "Plausible impossibilities should be preferred to unconvincing possibilities.",
      author: "ARISTOTLE"
    }, {
      id: 42,
      quote: "Politics is more difficult than physics.",
      author: "ALBERT EINSTEIN"
    }, {
      id: 43,
      quote: "Some books are to be tasted, others to be swallowed, and some to be chewed and digested.",
      author: "SIR FRANCIS BACON"
    }, {
      id: 44,
      quote: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
      author: "BILL KEANE"
    }, {
      id: 45,
      quote: "Strength does not come from physical capacity. It comes from an indomitable will.",
      author: "MAHATMA GANDHI"
    }, {
      id: 46,
      quote: "Study the past if you would define the future.",
      author: "CONFUCIUS"
    }, {
      id: 47,
      quote: "The Earth is the cradle of the mind, but one cannot eternally live in a cradle.",
      author: "KONSTANTIN E. TSIOLKOVSKY"
    }, {
      id: 48,
      quote: "The life which is unexamined is not worth living.",
      author: "SOCRATES"
    }, {
      id: 49,
      quote: "The man who moves a mountain begins by carrying away small stones.",
      author: "CONFUCIUS"
    }, {
      id: 50,
      quote: "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.",
      author: "CARL JUNG"
    }, {
      id: 51,
      quote: "The only thing worse than being talked about is not being talked about.",
      author: "OSCAR WILDE"
    }, {
      id: 52,
      quote: "The things that one most wants to do are the things that are probably most worth doing.",
      author: "WINIFRED HOLTBY"
    }, {
      id: 53,
      quote: "The way to get started is to quit talking and begin doing.",
      author: "WALT DISNEY"
    }, {
      id: 54,
      quote: "The wisest men follow their own direction.",
      author: "EURIPIDES"
    }, {
      id: 55,
      quote: "You should hammer your iron when it is glowing hot.",
      author: "PUBLIUS SYRUS"
    }]
  }; //quotesBase()

  var getQuote = function() {
    var randomNumber = Math.floor(Math.random() * 55) + 1;
    document.getElementById("quote").innerHTML = " " + quotesBase.items[randomNumber].quote + " ";
    document.getElementById("author").innerHTML = "- " + quotesBase.items[randomNumber].author;
    document.getElementById("tweet-anchor").href = "https://twitter.com/intent/tweet?text=" + quotesBase.items[randomNumber].quote + " - " + quotesBase.items[randomNumber].author;
  };

  var toogleScreen = function() {
    document.getElementById("screen").classList.toggle("screen-off");
    document.getElementById("quote-area").classList.toggle("elements-off");
    document.getElementById("top-line").classList.toggle("elements-off");
    document.getElementById("standby").classList.toggle("standby-off");
  };

  var digitalClock = function() {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    if (minutes <= 10) {
      minutes = "0" + minutes;
    }
    document.getElementById("clock").innerHTML = hours + ":" + minutes;
  };

  document.getElementById("pwr-btn").addEventListener("click", toogleScreen);
  document.getElementById("quote-btn").addEventListener("click", getQuote);
  getQuote();

  setInterval(function() { //interval function firing off the script every second
    digitalClock();
  }, 1000);
}; //window.onload()
