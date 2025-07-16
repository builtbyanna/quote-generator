let quote = document.getElementById("quote-el");

let quotes = [
  "Programming isn’t about what you know; it’s about what you can figure out.",
  "Every line of code you write is a spell you cast on the computer.",
  "The code you write today shapes the future you’ll live in tomorrow.",
  "Code is poetry in motion, written to bring dreams to life.",
  "You don’t have to know everything. You just need to be brave enough to start.",
  "Debugging is like being a detective in a crime movie where you are also the murderer.",
  "Success in coding isn’t about speed — it’s about not giving up.",
  "Learning to code is learning to think — don’t rush the process.",
  "You’re doing something hard — and that’s brave."
];

let colors = ["brown", "darkgreen", "indigo", "teal"];

function generate() { //what happens when you click the button
  quote.style.opacity = 0; //old text disappears

  setTimeout(function () { //what happens inside the timeout
    let randomQuote = Math.floor(Math.random() * quotes.length);
    if (quotes.length > 0) {
      quote.textContent = quotes[randomQuote];
    } else {
      quote.textContent = "no quotes"; //optional to don´t break the function if array is empty
    }
    quote.style.opacity = 1; //text appears 
  }, 300); //duration of timeout

  let randomColor = Math.floor(Math.random() * colors.length); //chooses random color
  quote.style.color = colors[randomColor];
}
