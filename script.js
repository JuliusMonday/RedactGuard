// Prompting the user to enter their name when the page loads
const userName = prompt("Please enter your name:");
window.onload = function() {
    let myPrompter = userName;
    if (myPrompter) {
        alert(`Hi, ${myPrompter}! You are welcome to Redact Guard; you are safe Here.`);
    }
};

let individualNames = document.querySelector("#user-names").textContent = `Hi ${userName},`;
if (userName == null || userName == ""){
    individualNames = document.querySelector("#user-names").textContent = `Hi Guest,`;
}

// My Redact text application function
function myRedactTextApp() {
    const startTime = new Date(); // Starting time

    const userInputText = document.querySelector(".user-text").value.toLowerCase();
    const userTextToBeRedacted = document.querySelector(".words-to-redact").value.toLowerCase().split(' ').map(word => word.trim());
    const userRedactCharacter = document.querySelector(".redaction-character").value;

    const words = userInputText.split(' ');
    const redactedWords = [];
    let matchedWords = 0;
    let totalScrambledCharacters = 0;
// looping through each word in the array gotten by splitting
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

    // Checking if any word in userTextToBeRedacted is not present in the input
    const notFoundWords = userTextToBeRedacted.filter(word => !words.includes(word));
    if (notFoundWords.length > 0) {
        document.getElementById("redactedText").value += `\n${individualNames} the words/word ::${notFoundWords.join(', ')}:: was not found after thorough scanning😢😢🤦‍♂️`;
        document.getElementById("redactedText").value += `\nPlease check the spelling and try again.`;
        document.getElementById("redactedText").style.color = "#f6831d";
        document.getElementById("redactedText").style.fontWeight = "bold";
    }

    // Calculate the total time taken
    const endTime = new Date();
    const totalTimeForTheProgram = (endTime - startTime) / 1000; // in seconds

    const totalWordsScanned = document.querySelector("#wordsScanned");
    const totalMatchedWords = document.querySelector("#wordsMatched");
    const totalCharactersScrambled = document.querySelector("#charactersScrambled");
    const totalTimeTaken = document.querySelector("#timeTaken");

    totalWordsScanned.textContent = words.length;
    totalMatchedWords.textContent = matchedWords;
    totalCharactersScrambled.textContent = totalScrambledCharacters;
    totalTimeTaken.textContent = `${totalTimeForTheProgram.toFixed(3)} seconds`;
}

// Add an event listener to the "Refresh" button to clear all values
const refreshButton = document.querySelector(".refresh-input");
refreshButton.addEventListener("click", function () {
    document.querySelector(".user-text").value = ""; 
    document.querySelector(".words-to-redact").value = ""; 
    document.querySelector(".redaction-character").value = ""; 
    document.getElementById("redactedText").value = ""; 
    document.querySelector("#wordsScanned").textContent = "0"; 
    document.querySelector("#wordsMatched").textContent = "0"; 
    document.querySelector("#charactersScrambled").textContent = "0"; 
    document.querySelector("#timeTaken").textContent = "0 seconds"; 
}); 