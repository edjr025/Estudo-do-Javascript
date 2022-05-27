//pegar todas as teclas
const keys = document.querySelectorAll('.key')

function playNote(event){
    //console.log(event.type)//para ver se é um clique ou pressionar uma tecla

    let audiokeyCode = getkeyCode(event)

    //console.log(audiokeyCode)
    
    const key = document.querySelector(`.key[data-key="${audiokeyCode}"]`)

    const isKeyExists = key
    if(!isKeyExists){
        return
    }
    addplayingClass(key)
    playAudio(audiokeyCode)
  
}

function playAudio(audiokeyCode){
    const audio = document.querySelector(`audio[data-key="${audiokeyCode}"]`)
    audio.currentTime = 0
    audio.play()
}

function addplayingClass(key){
    key.classList.add('playing')
}

function getkeyCode(event){
    let keyCode;

    const isKeyboard = event.type === 'keydown'
    if(isKeyboard){
        keyCode = event.keyCode
    }else{
        keyCode = event.target.dataset.key
    }
    
    return keyCode
    // console.log(event.type)
    // console.log(keyCode)
}

function removePlayingClass(event){
    event.target.classList.remove('playing')
}

function init(){
    keys.forEach(function(key){
        key.addEventListener('click', playNote)
        key.addEventListener('transitionend', removePlayingClass)
     })
     
     window.addEventListener('keydown', playNote)
}

window.addEventListener('load', init)