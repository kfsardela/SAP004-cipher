const letraA = "A".charCodeAt()
const letraTotal = "Z".charCodeAt() - "A".charCodeAt() + 1

const cipher = {
  encode: function (deslocamento, msg) {

    if (deslocamento == "" || msg.length == 0 || deslocamento < 0) {
      throw new TypeError()

    }
    msg = msg.toUpperCase()
    let mensagemCifrada = "";
    for (const letra of msg) {

      let resultado = letra.charCodeAt()

      if (letra !== " ")
        resultado = ((letra.charCodeAt() - letraA + deslocamento) % letraTotal) + letraA;

      mensagemCifrada += String.fromCharCode(resultado);
    }
    return mensagemCifrada;
  },
  decode: function (deslocamento, msg) {
    if (deslocamento == "" || msg.length == 0 || deslocamento < 0) {
      throw new TypeError()
    }

    let mensagemCifrada = "";
    msg = msg.toUpperCase()
    for (const letra of msg) {
      let resultado = letra.charCodeAt()

      if (letra !== " ")
        resultado = ((letra.charCodeAt() + letraA - deslocamento) % letraTotal) + letraA;
      
        mensagemCifrada += String.fromCharCode(resultado);
    }
    return mensagemCifrada;

  }
};

export default cipher;
