const cipher = {
       encode: function (deslocamento, msg) {
        
        let mensagemCifrada = "";
        for (let i=0; i<msg.length; i++){
          
          let resultado = ((msg.toUpperCase().charCodeAt(i) - 65 + deslocamento) % 26) + 65;
          mensagemCifrada += String.fromCharCode(resultado);
        }
        return mensagemCifrada;
      },
     decode: function (deslocamento, msg) {
     
      let mensagemCifrada = "";
      for (let i=0; i<msg.length; i++){
        
        let resultado = ((msg.toUpperCase().charCodeAt(i) - 65 - deslocamento) % 26) + 65;
        mensagemCifrada += String.fromCharCode(resultado);
      }
      return mensagemCifrada;
        
      }
};

export default cipher;
