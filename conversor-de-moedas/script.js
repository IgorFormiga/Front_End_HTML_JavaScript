function ConverterReal() {
  // Para pegar as informações de um elemento do HTML utiliza-se a funçãodocument.getElementById(<Id_do_elemento)
  //Todo valor recebido pelo imput é uma str
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  //parseFloat é utilizado para converter uma str em float
  var valorEmDolar = parseFloat(valor);
  // Se passar apenas a variável valorElemento é impresso todo o elemento <input type="number" id="valor" size="2" />

  var valorEmReal = valorEmDolar * 5.22;
  var valorEmBitcoin = valorEmDolar / 48008.9;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$" + valorEmReal;

  var elementoValorConvertidoBitcoin = document.getElementById(
    "valorConvertidoBitcoin"
  );
  var valorConvertidoBitcoin = "O resultado em Bitcoin é " + valorEmBitcoin;

  // innerHTML é utilizado para colocar algo dentro do elemento
  elementoValorConvertido.innerHTML = valorConvertido;
  elementoValorConvertidoBitcoin.innerHTML = valorConvertidoBitcoin;
}

function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolar = parseFloat(valor);

  var valorEmEuro = valorEmDolar * 0.85;
  var valorEmBitcoin = valorEmDolar / 48008.9;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Euro é " + valorEmEuro + " Euros";

  var elementoValorConvertidoBitcoin = document.getElementById(
    "valorConvertidoBitcoin"
  );
  var valorConvertidoBitcoin = "O resultado em Bitcoin é " + valorEmBitcoin;

  elementoValorConvertido.innerHTML = valorConvertido;
  elementoValorConvertidoBitcoin.innerHTML = valorConvertidoBitcoin;
}