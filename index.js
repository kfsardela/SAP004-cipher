import cipher from './cipher.js';

let botao1 = document.getElementById("botaoCifrar");
let botao2 = document.getElementById("botaoDecifrar");

function encode () {
    let msgDigitada = document.getElementById("mensagemDigitada").value;
    let deslocamento = parseInt(document.getElementById("deslocamento").value);
    
    let encodeMsg = cipher.encode(deslocamento, msgDigitada)

    document.getElementById("codificacao").innerText = "cifrada"  
    document.getElementById("novaMsg").innerText = encodeMsg;
    document.getElementsByClassName("msgCifrada")[0].classList.add("visivel")
 
}
botao1.addEventListener('click', encode)

function decode () {
    let msgDigitada = document.getElementById("mensagemDigitada").value;
    let deslocamento = parseInt(document.getElementById("deslocamento").value);
    
    let decodeMsg = cipher.decode(deslocamento, msgDigitada)

    document.getElementById("codificacao").innerText = "decifrada"  
    document.getElementById("novaMsg").innerText = decodeMsg;
   
  }
  botao2.addEventListener('click', decode)


