const cipher = {
  encode: function (deslocamento, msg) {

    if (deslocamento == "" || msg.length == 0 || deslocamento < 0) {
      throw new TypeError()

    }

    let mensagemCifrada = "";
    for (let i = 0; i < msg.length; i++) {

      const resultado = ((msg.toUpperCase().charCodeAt(i) - 65 + deslocamento) % 26) + 65;
      mensagemCifrada += String.fromCharCode(resultado);
    }
    return mensagemCifrada;
  },
  decode: function (deslocamento, msg) {
    if (deslocamento == "" || msg.length == 0 || deslocamento < 0) {
      throw new TypeError()
    }

    let mensagemCifrada = "";
    for (let i = 0; i < msg.length; i++) {

      const resultado = ((msg.toUpperCase().charCodeAt(i) + 65 - deslocamento) % 26) + 65;
      mensagemCifrada += String.fromCharCode(resultado);
    }
    return mensagemCifrada;

  }
};

export default cipher;
