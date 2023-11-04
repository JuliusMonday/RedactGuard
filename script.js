// Prompt the user to enter their name when the page loads
window.onload = function() {
    const userName = prompt("Please enter your name:");
    if (userName) {
        alert(`Welcome, ${userName}! You are welcome to Redact Guard; you are safe.`);
    }
};
// My Menu actions
const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", function(){
    const sideMenu = document.querySelector(".mobile-navbar");
    sideMenu.style.display = "flex";
});
const menuIcon2 = document.querySelector(".close-icon");
menuIcon2.addEventListener("click", function(){
    const sideMenu = document.querySelector(".mobile-navbar");
    sideMenu.style.display = "none";
});
function myRedactTextApp() {
    const startTime = new Date(); // Starting time

    const userInputText = document.querySelector(".user-text").value.toLowerCase();
    const userTextToBeRedacted = document.querySelector(".words-to-redact").value.toLowerCase().split(' ').map(word => word.trim());
    const userRedactCharacter = document.querySelector(".redaction-character").value;

    const words = userInputText.split(' ');
    const redactedWords = [];
    let matchedWords = 0;
    let totalScrambledCharacters = 0;
    let totalTimeForTheProgram = 0;

    words.forEach(word => {
        if (userTextToBeRedacted.includes(word)) {
            redactedWords.push(userRedactCharacter.repeat(word.length));
            matchedWords++;
            totalScrambledCharacters += word.length;
        } else {
            redactedWords.push(word);
        }
    });

    const redactedOutput = redactedWords.join(' ');
    document.getElementById("redactedText").value = redactedOutput;

    // Check if any word in userTextToBeRedacted is not present in the input
    const notFoundWords = userTextToBeRedacted.filter(word => !words.includes(word));
    if (notFoundWords.length > 0) {
        document.getElementById("redactedText").value += `\nWords not found: ${notFoundWords.join(', ')}`;
    }

    // Calculate the total time taken
    const endTime = new Date();
    totalTimeForTheProgram = (endTime - startTime) / 1000; // in seconds

    const totalWordsScanned = document.querySelector("#wordsScanned");
    const totalMatchedWords = document.querySelector("#wordsMatched");
    const totalCharactersScrambled = document.querySelector("#charactersScrambled");
    const totalTimeTaken = document.querySelector("#timeTaken");

    totalWordsScanned.textContent = words.length;
    totalMatchedWords.textContent = matchedWords;
    totalCharactersScrambled.textContent = totalScrambledCharacters;
    totalTimeTaken.textContent = `${totalTimeForTheProgram.toFixed(3)} seconds`;
   
}

// Prompt the user to enter their name when the page loads
window.onload = function() {
    const userName = prompt("Please enter your name:");
    if (userName) {
        alert(`Welcome, ${userName}! You are welcome to Redact Guard; you are safe.`);
    }
};

// Add an event listener to the "Refresh" button
document.getElementsByClassName("refresh-input").addEventListener("click", function() {
    document.querySelector(".user-text").value = ""; // Clear user input text
    document.querySelector(".words-to-redact").value = ""; // Clear redacted words input
    document.querySelector(".redaction-character").value = ""; // Clear redaction character input
    document.getElementById("redactedText").value = ""; // Clear redacted text output
    document.querySelector("#wordsScanned").textContent = "0"; // Reset word count
    document.querySelector("#wordsMatched").textContent = "0"; // Reset matched words count
    document.querySelector("#charactersScrambled").textContent = "0"; // Reset scrambled characters count
    document.querySelector("#timeTaken").textContent = "0 seconds"; // Reset time taken
});


