// Define the Spanish words
var spanishWords = ["perro", "gato", "pájaro"];

// Define the cups and their initial state
var cups = [
    { id: "cupA", word: "" },
    { id: "cupB", word: "" },
    { id: "cupC", word: "" }
];

// Function to shuffle the cups and assign Spanish words
function shuffleCups() {
    // Shuffle the Spanish words
    spanishWords.sort(() => Math.random() - 0.5);

    // Assign the Spanish words to the cups
    for (let i = 0; i < 3; i++) {
        cups[i].word = spanishWords[i];
    }

    // Shuffle the cups on the screen
    cups.sort(() => Math.random() - 0.5);
    for (let i = 0; i < 3; i++) {
        document.getElementById(cups[i].id).style.order = i;
    }
}

// Function to check if the user has won
function checkWin(cupId) {
    if (cups.find(cup => cup.id == cupId).word == spanishWords[0]) {
        alert("¡Felicidades! You chose the correct cup.");
    } else {
        alert("Lo siento, that cup is incorrect. The correct word is " + spanishWords[0]);
    }
}

// Add click event listeners to the cups
document.querySelectorAll(".cup").forEach(cup => {
    cup.addEventListener("click", () => {
        checkWin(cup.id);
        shuffleCups();
    });
});

// Add click event listener to the start button
document.getElementById("startBtn").addEventListener("click", () => {
    shuffleCups();
});
