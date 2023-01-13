function encriptar() {
  let text = document.getElementById("textInput").value;
  let textoEncriptado = document.getElementById("texto");
  let mensajeencriptado;
  mensajeencriptado = text;

  mensajeencriptado = mensajeencriptado.replaceAll("e", "enter");
  mensajeencriptado = mensajeencriptado.replaceAll("i", "imes");
  mensajeencriptado = mensajeencriptado.replaceAll("o", "ber");
  mensajeencriptado = mensajeencriptado.replaceAll("a", "ai");
  mensajeencriptado = mensajeencriptado.replaceAll("u", "ufat");

  textoEncriptado.innerHTML = mensajeencriptado;
  document.getElementById("contenedorMuñeco").style.display = "none";
  document.getElementById("contenedorTexto").style.display = "grid";
  document.getElementById("buttomEncriptar").style.background= "#0a3871";
  document.getElementById("buttomEncriptar").style.color= "#d8dfe8";
}

function desencriptar() {
  let text = document.getElementById("textInput").value;
  let textoEncriptado = document.getElementById("texto");
  console.log("texto en p", textoEncriptado);
  let mensajedesencriptado;
  console.log(text);

  mensajedesencriptado = text;

  mensajedesencriptado = mensajedesencriptado.replaceAll("enter", "e");
  mensajedesencriptado = mensajedesencriptado.replaceAll("imes", "i");
  mensajedesencriptado = mensajedesencriptado.replaceAll("ber", "o");
  mensajedesencriptado = mensajedesencriptado.replaceAll("ai", "a");
  mensajedesencriptado = mensajedesencriptado.replaceAll("ufat", "u");

  textoEncriptado.innerHTML = mensajedesencriptado;
  document.getElementById("contenedorMuñeco").style.display = "none";
  document.getElementById("contenedorTexto").style.display = "grid";
  document.getElementById("buttomDesencriptar").style.background= "#0a3871";
  document.getElementById("buttomDesencriptar").style.color= "#d8dfe8";
}


function copy(){
    var content = document.getElementById('texto').innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
 
}