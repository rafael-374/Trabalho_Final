let audio = new Audio('https://hinomp3.com/hinos/c/hino-cruzeiro.mp3');

function play()
{
    audio.play()
}
function pause()
{
    audio.pause()
}

alert("Site não oficial, feito por um torcedor, para um trabalho educacional. Mais informações no final da página")
let botao = document.querySelector("#botao")
let p = document.querySelector("#pause")
botao.addEventListener(('click'), play);
p.addEventListener(('click'), pause);