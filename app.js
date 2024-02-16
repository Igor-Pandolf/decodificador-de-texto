let textoEntrada = document.getElementById("textCriptografia");
let textoSaida = document.getElementById("criptografado");

function criptografar() {
  let mensagem = textoEntrada.value;

  let resultadoCripto = mensagem
    .replace(/e/g, "enter")
    .replace(/i/g, "ines")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  textoSaida.innerHTML = `${resultadoCripto}`;
  document.getElementById("copyBtn").innerHTML = "Copiar";
}

function descriptografar() {
  let mensagemCriptografada = textoSaida.innerHTML;

  let resultadoDescripto = mensagemCriptografada
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/ines/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  textoSaida.innerHTML = resultadoDescripto;
  document.getElementById("copyBtn").innerHTML = "Copiar";
}

function copiarTexto() {
  let copyText = textoSaida.innerHTML;
  navigator.clipboard.writeText(copyText);

  document.getElementById("copyBtn").innerHTML = "Copiado!";
}
