// Pasapalabra javaScript
// Skylab coders precurso
// Álvaro Amorós
// 21/09/21

//  First select the questions for each game. There are 25 *3 = 75 questions.  
// Indexes in the array go from 0 to 74


pasapalabraMain = (questionData) => {
    restartVars ();
    greateUser ();
    indexLetters ();
    askQuestion (questionData);
    sumPoints (questionData);
    printResults (historyResults);

 }
// Global vars
let historyResults = []

let userResults = {user: "Guest" , points: 0}

let index = []


// Function. Greate user
greateUser = () => {
    user = prompt("User name: ");
    if (user === null || user === ""){
        alert(`Hello, ${userResults.user}`)
    } else {
        userResults.user = user
        alert(`Hello, ${userResults.user}`)
    }
}

// Function to generate the first index of every leter
indexLetters = () => {
    for (let i = 0; i <= 8; i = i + 3) { // Lop over the different letters
        let randomValue = Math.floor(Math.random() * 3); // gen random number between 0 and 2
        index.push(i + randomValue); // Add the number to the index to randomize all letters
    }
    console.log(index);
}

askQuestion = (questionData) => { 
    do { // Loop untill al words are either correc, or incorret, or the user tipes in DONE
        for (let i =  0; i < index.length; i++ ) {
            if (questionData[index[i]].status === 0) {
                let userAnswer = window.prompt(questionData[index[i]].question).toLocaleLowerCase ();
                let normalizeCorrectAnswer = questionData[index[i]].answer;
                if (userAnswer === normalizeCorrectAnswer.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()) {
                    questionData[index[i]].status = 1;
                    window.alert("Correct answer")
                } else if (userAnswer === "pasapalabra") {
                    window.alert("Pasapalabra!")
                } else if (userAnswer == "done") {
                    window.alert(`You have ${userResults.points} poitns.`)
                    return;
                } else {
                    window.alert(`Wrong answer, the correct one was ${questionData[index[i]].answer}`)
                    questionData[index[i]].status = -1;
                }
            }
        }
    } while (checkPasapalabra (questionData));
}

// Check if "pasapalabra" was given as answer in any word
checkPasapalabra = (questionData) => {
    for (let i = 0; i < index.length; i++) {
        if ( questionData[index[i]].status === 0 ) {
            return true;
        }
    }
    return false;
}

sumPoints = (questionData) => {
    for (let i = 0; i < index.length; i++) {
        if ( questionData[index[i]].status === 1 ) {
            userResults.points ++;
        }
    }
    historyResults.push(userResults);
    
}

restartVars = () => index = []; userResults.user = "Guest"; userResults.points = 0;

printResults = (resultsData) => console.log(resultsData)

pasapalabraMain(questions);

