function play(){
    // hide the home section
    const homeSection = document.getElementById('home-section');
    homeSection.classList.add('hidden');

    // show the playground
    const playgroundSection = document.getElementById('playground-section');
    playgroundSection.classList.remove('hidden');

       // hide the score section
       const finalScoreSection = document.getElementById('score-section');
       finalScoreSection.classList.add('hidden');

    //    reset score and life
    setTextElementById('current-score', 0);
    setTextElementById('current-life', 5);
    continueGame();
}

function goBack(){
    // hide the playground section
    const homeSection = document.getElementById('playground-section');
    homeSection.classList.add('hidden');

    // show the home section
    const playgroundSection = document.getElementById('home-section');
    playgroundSection.classList.remove('hidden');

    // remove alphabet background color
    removeBackgroundColorById(alphabet); 
}

function continueGame(){
    // generate a random alphabet
    const alphabet = getRandomAlphabet();
    console.log('Your random alphabet:', alphabet);

    // set randomly generated alphabet
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set alphabet background color
    setBackgroundColorById(alphabet);
}



// function for keyboard press related events
document.addEventListener('keyup', function handleKeyboardKeyUpEven(event){
    const playerPressed = event.key;
    console.log('player pressed' ,playerPressed);
    // stop the ame if player press escape button
    if(playerPressed === 'Escape'){
        const playgroundSection = document.getElementById('playground-section');
        playgroundSection.classList.add('hidden');

        // show the score section
        const finalScoreSection = document.getElementById('score-section');
        finalScoreSection.classList.remove('hidden');
    }

    // get expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        // get the score
        // step-1: get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);

        // step-2: increase the score by 1
        const newScore = currentScore + 1;

        // step-3: show the updated score
        currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you lost a life');
        // get the life
        // step-1: get the current life
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        console.log(currentLife);

        // step-2: decrease the life by 1
        const newLife = currentLife - 1;

        // step-3: show the updated life
        currentLifeElement.innerText = newLife;

        if(newLife === 0){
            // hide the playground section
            const playgroundSection = document.getElementById('playground-section');
            playgroundSection.classList.add('hidden');

            // show the score section
            const finalScoreSection = document.getElementById('score-section');
            finalScoreSection.classList.remove('hidden');

            // clear the last selected alphabet
            const currentAlphabetText = this.getElementById('current-alphabet');
            console.log(currentAlphabetText);
            removeBackgroundColorById(alphabet);
        }
    }

});