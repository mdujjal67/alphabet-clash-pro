function play(){
    // hide the home section
    const homeSection = document.getElementById('home-section');
    homeSection.classList.add('hidden');

    // show the playground
    const playgroundSection = document.getElementById('playground-section');
    playgroundSection.classList.remove('hidden');
}
function goBack(){
    // hide the playground section
    const homeSection = document.getElementById('playground-section');
    homeSection.classList.add('hidden');

    // show the home
    const playgroundSection = document.getElementById('home-section');
    playgroundSection.classList.remove('hidden');
}