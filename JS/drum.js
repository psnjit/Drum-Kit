
    function playSound(e)
    {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-class="${e.keyCode}"]`)
        if(!audio) return; //if no audio element(wrong key) is found, return
        audio.currentTime = 0;//rewind to start
        audio.play();
        key.classList.add('playing');
    }

    function removeTransition(e)
    {
        if(e.propertyName !=`transform`) return;//lot of event are finished but transform is the slowest
        this.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))
    window.addEventListener('keydown', playSound);
