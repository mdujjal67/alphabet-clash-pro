function play(){
    // hide the home section
    const homeSection = document.getElementById('home-section');
    homeSection.classList.add('hidden');

    // show the playground
    const playgroundSection = document.getElementById('playground-section');
    playgroundSection.classList.remove('hidden');

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