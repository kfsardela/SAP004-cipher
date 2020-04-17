const cipher = {
  
    encode: function (deslocamento, msg) {

    if (deslocamento == "" || msg.length == 0 || deslocamento < 0) {
      throw new TypeError()

    }
    msg = msg.toUpperCase()
    let mensagemCifrada = "";
    for (const letra of msg) {
      const resultado = ((letra.charCodeAt() - 65 + deslocamento) % 26) + 65;
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
      const resultado = ((letra.charCodeAt() + 65 - deslocamento) % 26) + 65;
      mensagemCifrada += String.fromCharCode(resultado);
    }
    return mensagemCifrada;

  }
};

export default cipher;
