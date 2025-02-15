//get all keys
const keys = document.querySelectorAll('.key');


//play notes
function playNote(event){
    //get keyCode
    let audioKeyCode = getKeyCode(event);

    //typed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`);
    console.log(key);

    //verify if key exists
    const cantFoundAnyKey = !key;

    if(cantFoundAnyKey){
        return;
    }

    //play audio
    addPlayindClass(key);
    playAudio(audioKeyCode);

}

function addPlayindClass(key){
    key.classList.add('playing');
}

function removePlayingClass(event){
    event.target.classList.remove('playing');
}

function getKeyCode(event){
    let keyCode;

    const isKeyboard = event.type === 'keydown'; //verdadeiro ou falso (boolean)
    if(isKeyboard){
        keyCode = event.keyCode;
    } else {
        keyCode = event.target.dataset.key;
    }

    return keyCode;
}

function playAudio(audioKeyCode){
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
    audio.currentTime = 0;
    audio.play();
}

//click with mouse
keys.forEach(function(key){
    key.addEventListener('click', playNote);
    key.addEventListener('transitionend', removePlayingClass)
})

//keyboard type
window.addEventListener('keydown', playNote);