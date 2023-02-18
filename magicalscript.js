const testButton = document.getElementById("new-game");

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
        let code = Math.floor(Math.random() * 5);
        key.push(code);
    }
    console.log(key);
    return key;
}

testButton.onclick = function() {
    generateKey("easy");
    generateKey("normal");
    generateKey("hard");
}