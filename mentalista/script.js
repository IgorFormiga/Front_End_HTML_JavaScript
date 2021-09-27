// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
// https://www.alura.com.br/artigos/operadores-matematicos-em-javascript
var numeroSecreto = parseInt(Math.random() * 11);
var elementoResultado = document.getElementById("resultado");
var comparaResultado = document.getElementById("compara");
var tentativas = 0;

function Chutar() {
  //Pegar o valor que está sendo informado no input do HTML e trasformalo para número
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    //Colocar uma informação dentro de Tag no HTML
    elementoResultado.innerHTML = "Acertou!";
    comparaResultado.innerHTML = "";
  } else if (chute > 10 || chute < 0) {
    //Caso fosse colocado outro if a linguagem entenderia como sendo um outro bloco separado
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else {
    elementoResultado.innerHTML = "Número errado, tente novamente!";
    if (chute < numeroSecreto) {
      comparaResultado.innerHTML =
        "Número errado, o número secreto é maior do que " + chute + "!";
    } else {
      comparaResultado.innerHTML =
        "Número errado, o número secreto é menor do que " + chute + "!";
    }
    tentativas = tentativas + 1;
    if (tentativas == 3) {
      comparaResultado.innerHTML =
        "Você perdeu! O número certo é " + numeroSecreto;
    }
  }
}

function Reiniciar() {
  numeroSecreto = parseInt(Math.random() * 11);
  tentativas = 0;
  elementoResultado.innerHTML =
    "O jogo foi reiniciado! Tente adivinhar o novo número";
  comparaResultado.innerHTML = "Boa sorte!";
}