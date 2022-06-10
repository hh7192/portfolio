// -------------------------- DOM QUERIES -------------------------- //
const correctGuesses = document.querySelector("#correctGuesses");
const wrongGuesses = document.querySelector("#wrongGuesses");
const finalMessage = document.querySelector("#finalMessage");
const result = document.querySelector("#resultContainer");
const playButton = document.querySelector("#playButton");
const lives = document.querySelectorAll(".lives");

// -------------------------- EVENTS -------------------------- //
// Event 1: Keydown letter press
const keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

document.addEventListener("keydown", (e) => {
  if (keys.includes(e.key)) {
    const letter = e.key;

    if (randomWord.includes(letter)) {
      // pushing to arrays & preventing double entries
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayCorrect();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        displayWrong();
      }
    }
  }
});

// Event 2: Restart Game and play again
playButton.onclick = playAgain;

// -------------------------- DATABASE -------------------------- //
// Database: array of randowm words
const wordsArray = [
  "acrimonious",
  "allegiance",
  "ameliorate",
  "annihilate",
  "antiseptic",
  "articulate",
  "authoritative",
  "benefactor",
  "boisterous",
  "breakthrough",
  "carcinogenic",
  "censorious",
  "chivalrous",
  "collarbone",
  "commendable",
  "compendium",
  "comprehensive",
  "conclusive",
  "conscientious",
  "considerate",
  "deferential",
  "denouement",
  "determinate",
  "diffidence",
  "disruption",
  "earthenware",
  "elliptical",
  "entanglement",
  "escutcheon",
  "extinguish",
  "extradition",
  "fastidious",
  "flamboyant",
  "forethought",
  "forthright",
  "gregarious",
  "handmaiden",
  "honeysuckle",
  "hypocritical",
  "illustrious",
  "infallible",
  "lumberjack",
  "mischievous",
  "mollycoddle",
  "nimbleness",
  "nonplussed",
  "obliterate",
  "obsequious",
  "obstreperous",
  "opalescent",
  "ostensible",
  "pandemonium",
  "paraphernalia",
  "pawnbroker",
  "pedestrian",
  "peremptory",
  "perfunctory",
  "pernicious",
  "perpetrate",
  "personable",
  "pickpocket",
  "poltergeist",
  "precipitous",
  "predicament",
  "preposterous",
  "presumptuous",
  "prevaricate",
  "propensity",
  "provisional",
  "pugnacious",
  "ramshackle",
  "rattlesnake",
  "reciprocate",
  "recrimination",
  "redoubtable",
  "relinquish",
  "remonstrate",
  "repository",
  "reprehensible",
  "resolution",
  "resplendent",
  "restitution",
  "retaliation",
  "retribution",
  "saccharine",
  "salubrious",
  "skulduggery",
  "skyscraper",
  "soothsayer",
  "tearjerker",
  "transcribe",
  "turpentine",
  "unassuming",
  "underscore",
  "undertaker",
  "underwrite",
  "unobtrusive",
  "vernacular",
  "waterfront",
  "watertight",
];

// -------------------------- ON LOAD -------------------------- //
//   select a random word from array
let randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
console.log(randomWord);

//  initialize arrays for wrong and right guesses
let correctLetters = [];
let wrongLetters = [];

// -------------------------- FUNCTIONS -------------------------- //
// function 1: display correct guesses & display win message
function displayCorrect() {
  correctGuesses.innerHTML = `
  ${randomWord
    .split("")
    .map(
      (letter) => `
      <span class='letter'> 
          ${correctLetters.includes(letter) ? letter : ""}
      </span>
      `
    )
    .join("")}`;

  const innerWord = correctGuesses.innerText.replace(/\n/g, "");
  if (innerWord === randomWord) {
    finalMessage.innerText = "You Guessed Right! :-)";
    finalMessage.classList = "resultWin messageWin";
    result.style.display = "flex";
  }
}

// function 2: display wrong guesses & display lives & display lose message
function displayWrong() {
  wrongGuesses.innerHTML = `
  ${wrongLetters.length > 0 ? "<p>Wrong Guesses</p>" : ""}
  ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
  `;

  lives.forEach((icon, i) => {
    if (i < wrongLetters.length) {
      icon.style.display = "block";
    } else {
      icon.style.display = "none";
    }
  });

  if (wrongLetters.length === lives.length) {
    finalMessage.innerHTML = `You Guessed Wrong! The word was : 
    <span class='reveal'>${randomWord}</span>`;
    finalMessage.classList = "resultLose messageLose";
    result.style.display = "flex";
  }
}

// function 3: playAgain
function playAgain() {
  // reset Arrays and new random word
  correctLetters = [];
  wrongLetters = [];
  randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  // reset fields
  displayCorrect();
  displayWrong();
  result.style.display = "none";
}

displayCorrect();
