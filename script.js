const movie = "mahadev";

let guess = prompt("enter your guesss");
while((guess!=movie) && (guess!="quit")){
    guess = prompt("wrong answer please try again");
}

if(guess == movie){
    console.log("congrate you won the game");
} else {
    console.log("quit");
}
