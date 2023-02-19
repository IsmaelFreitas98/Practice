const resetButton = document.getElementById("new-game");
const tryButton = document.getElementById("try-combination");

const firstElement = document.getElementById("firstball");
const secondElement = document.getElementById("secondball");
const thirdElement = document.getElementById("thirdball");
const fourthElement = document.getElementById("fourthball");
const gameStatus = document.getElementById("game-status");

const gameBoard = document.getElementById("game-board");

let masterKey;
let rowCount = 0;
let isRunning = false;

function generateKey(difficulty) {
    let key = [];
    let codeLength;

    switch (difficulty) {
        case `easy`:
            codeLength = 4;
            break;
        case `normal`:
            codeLength = 5;
            break;
        case `hard`:
            codeLength = 6;
            break;
        default:
            console.log("Invalid difficulty.");                
    }

    for(let i = 0; i < codeLength; i++) {
        let code = Math.floor(Math.random() * 4) + 1;
        key.push(code);
    }
    return key;
}

function updateBoard (combination) {

    const triesTable = document.getElementById("tries-table");
    const resultsTable = document.getElementById("results-table");

    let correctPosition = 0;
    let correctSymbol = 0;

    let masterCopy = masterKey.slice(0);
    let combinationCopy = combination.slice(0);


    for(let i = 0; i < 4; i++){

        switch (combination[i]){
            case 1:
                triesTable.rows[9 - rowCount].cells[i].innerHTML = "<img src=\"./Images/gryffindorball.png\" alt=\"gryffindorball\">";
                break;
            case 2:
                triesTable.rows[9 - rowCount].cells[i].innerHTML = "<img src=\"./Images/slytherinball.png\" alt=\"slytherinball\">";
                break;
            case 3:
                triesTable.rows[9 - rowCount].cells[i].innerHTML = "<img src=\"./Images/hufflepuffball.png\" alt=\"hufflepuffball\">";
                break;
            case 4:
                triesTable.rows[9 - rowCount].cells[i].innerHTML = "<img src=\"./Images/ravenclawball.png\" alt=\"ravenclawball\">";
                break;
            default:
                console.log("Error: Invalid Option");
        }

    }

    for (let i = 0; i < combinationCopy.length; i++){
        if(combinationCopy[i] === masterCopy[i]){
            correctPosition++;
            combinationCopy.splice(i, 1);
            masterCopy.splice(i, 1);
            i--;
        }
    }

    resultsTable.rows[9 - rowCount].cells[0].innerHTML = `<span class=\"correct-positions\"> ${correctPosition} x </span><img src=\"./Images/hogwartscrest.jpeg\" alt=\"hogwartscrest\"></img>`;

    for (let i = 0; i < combinationCopy.length; i++) {
        for(let j = 0; j < masterCopy.length; j++){
            if (combinationCopy[i] === masterCopy[j]){
                correctSymbol++;
                combinationCopy.splice(i, 1);
                masterCopy.splice(j, 1);
                i--;
                j--;
            }
        }
    }

    resultsTable.rows[9 - rowCount].cells[1].innerHTML = `<span class=\"correct-positions\"> ${correctSymbol} x </span><img src=\"./Images/hogwartscrestinvert.png\" alt=\"hogwartscrestinvert\"></img>`;

    if(correctPosition === triesTable.rows[0].cells.length){
        setVictory();
    }
}

function setVictory(){
    gameStatus.innerText = "YOU WIN!!!"
    isRunning = false;
}

function checkResult(combination){

    console.log(masterKey);
    console.log(combination);

    if(combination !== masterKey && rowCount === 9){
        gameStatus.innerText = "You Lose! :("
        isRunning = false;
    }
}


tryButton.onclick = function () {
    let triedCombination = [];

    triedCombination.push(parseInt(firstElement.value));
    triedCombination.push(parseInt(secondElement.value));
    triedCombination.push(parseInt(thirdElement.value));
    triedCombination.push(parseInt(fourthElement.value));

    if(rowCount === 0 && isRunning){
        gameStatus.innerText = "Game Running";
    }

    if(rowCount <= 9 && isRunning){
        updateBoard(triedCombination);
        checkResult(triedCombination);
        rowCount++;
    }else{
        console.log("No more tries available. Reset the Game!");
    }

}

resetButton.onclick = function() {
    gameBoard.innerHTML = "<table class=\"game-table\"><tbody id=\"tries-table\"><tr><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td></tr><tr><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td></tr><tr><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td></tr><tr><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td></tr><tr><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td></tr><tr><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td></tr><tr><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td></tr><tr><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td></tr><tr><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td></tr><tr><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td><td class=\"balls-container\"><img src=\"./Images/emptyball.png\" alt=\"empty\"></td></tr></tbody></table><table class=\"game-table\" id=\"results-table\"><tbody><tr><td><span class=\"correct-positions\">0 x </span><img src=\"./Images/hogwartscrest.jpeg\" alt=\"hogwartscrest\"></td><td><span class=\"correct-positions\">0 x </span><img src=\"./Images/hogwartscrestinvert.png\" alt=\"hogwartscrestinvert\"></td></tr><tr><td><span class=\"correct-positions\">0 x </span><img src=\"./Images/hogwartscrest.jpeg\" alt=\"hogwartscrest\"></td><td><span class=\"correct-positions\">0 x </span><img src=\"./Images/hogwartscrestinvert.png\" alt=\"hogwartscrestinvert\"></td></tr><tr><td><span class=\"correct-positions\">0 x </span><img src=\"./Images/hogwartscrest.jpeg\" alt=\"hogwartscrest\"></td><td><span class=\"correct-positions\">0 x </span><img src=\"./Images/hogwartscrestinvert.png\" alt=\"hogwartscrestinvert\"></td></tr><tr><td><span class=\"correct-positions\">0 x </span><img src=\"./Images/hogwartscrest.jpeg\" alt=\"hogwartscrest\"></td><td><span class=\"correct-positions\">0 x </span><img src=\"./Images/hogwartscrestinvert.png\" alt=\"hogwartscrestinvert\"></td></tr><tr><td><span class=\"correct-positions\">0 x </span><img src=\"./Images/hogwartscrest.jpeg\" alt=\"hogwartscrest\"></td><td><span class=\"correct-positions\">0 x </span><img src=\"./Images/hogwartscrestinvert.png\" alt=\"hogwartscrestinvert\"></td></tr><tr><td><span class=\"correct-positions\">0 x </span><img src=\"./Images/hogwartscrest.jpeg\" alt=\"hogwartscrest\"></td><td><span class=\"correct-positions\">0 x </span><img src=\"./Images/hogwartscrestinvert.png\" alt=\"hogwartscrestinvert\"></td></tr><tr><td><span class=\"correct-positions\">0 x </span><img src=\"./Images/hogwartscrest.jpeg\" alt=\"hogwartscrest\"></td><td><span class=\"correct-positions\">0 x </span><img src=\"./Images/hogwartscrestinvert.png\" alt=\"hogwartscrestinvert\"></td></tr><tr><td><span class=\"correct-positions\">0 x </span><img src=\"./Images/hogwartscrest.jpeg\" alt=\"hogwartscrest\"></td><td><span class=\"correct-positions\">0 x </span><img src=\"./Images/hogwartscrestinvert.png\" alt=\"hogwartscrestinvert\"></td></tr><tr><td><span class=\"correct-positions\">0 x </span><img src=\"./Images/hogwartscrest.jpeg\" alt=\"hogwartscrest\"></td><td><span class=\"correct-positions\">0 x </span><img src=\"./Images/hogwartscrestinvert.png\" alt=\"hogwartscrestinvert\"></td></tr><tr><td><span class=\"correct-positions\">0 x </span><img src=\"./Images/hogwartscrest.jpeg\" alt=\"hogwartscrest\"></td><td><span class=\"correct-positions\">0 x </span><img src=\"./Images/hogwartscrestinvert.png\" alt=\"hogwartscrestinvert\"></td></tr></tbody></table>";
    gameStatus.innerText = "New Game";
    isRunning = true;
    rowCount = 0;
    masterKey = generateKey("easy");    
}