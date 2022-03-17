const age = parseInt(prompt("how old are you?"));

if (isNaN(age) || age < 0) {
    console.log("please write a real positive number");
} else if (age < 18) {
    console.log("You are too young");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink");
} else if (age > 50 && age <= 80) {
    console.log("you should exercise");
} else if (age >= 80 && age < 90) {
    console.log("You can drink, but You are so old. plz careful");
} else if (age >= 91 && age < 130) {
    console.log("Um... sir..? Are you okay?");
} else {
    console.log("RIP...");
}