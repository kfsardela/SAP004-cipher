import cipher from './cipher.js';

const botaoCifrar = document.getElementById("botaoCifrar");
const botaoDecifrar = document.getElementById("botaoDecifrar");

function encode() {
    const msgDigitada = document.getElementById("mensagemDigitada").value;
    const deslocamento = parseInt(document.getElementById("deslocamento").value);

    const encodeMsg = cipher.encode(deslocamento, msgDigitada)

    document.getElementById("codificacao").innerText = "cifrada"
    document.getElementById("novaMsg").innerText = encodeMsg;
    document.getElementsByClassName("msgCifrada")[0].classList.add("visivel")

}
botaoCifrar.addEventListener('click', encode)

function decode() {
    const msgDigitada = document.getElementById("mensagemDigitada").value;
    const deslocamento = parseInt(document.getElementById("deslocamento").value);

    const decodeMsg = cipher.decode(deslocamento, msgDigitada)

    document.getElementById("codificacao").innerText = "decifrada"
    document.getElementById("novaMsg").innerText = decodeMsg;
    document.getElementsByClassName("msgCifrada")[0].classList.add("visivel")

}
botaoDecifrar.addEventListener('click', decode)


