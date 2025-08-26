
function validarFormulario() {

  let valorA = Number(document.getElementById("campoA").value);
  let valorB = Number(document.getElementById("campoB").value);


  if (valorB > valorA) {
   
    document.getElementById("mensagem").textContent = "Tudo certo!";
    document.getElementById("mensagem").style.color = "green";
  } else {
    // Exibe mensagem negativa
    document.getElementById("mensagem").textContent = "O valor de B precisa ser maior do que o de A!";
    document.getElementById("mensagem").style.color = "red";
  }
}