var meuAudio = document.querySelector('#bing');
meuAudio.loop = true; 

meuAudio.oncanplay = function () {
    meuAudio.play();
}

