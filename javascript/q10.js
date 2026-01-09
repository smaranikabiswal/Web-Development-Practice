let favmovie = "xyz";
let guess = prompt("guess my favorite movie ");

while ((guess !== favmovie) && (guess !== "quit")) {
    
    guess = prompt("guess my favorite movie again, I know you can :)");
}

if (guess === favmovie) {
    console.log("You are right, I love you!");
} else if (guess === "quit") {
    console.log("It is sad to see you go!");
}
