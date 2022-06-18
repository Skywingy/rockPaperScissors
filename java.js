function computerPlay() {
const options = ["Rock", "Paper", "Scissors"];
const random = Math.floor(Math.random() * options.length);
alert(options[random]);
}

computerPlay();