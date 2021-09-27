//no JS as chaves referÊncia um tipo chamado objeto, no objeto é possivel ter vários elementos de diferentes tipos
//          chave / valor
var rafa = { nome: "Rafa", vitorias: 2, empates: 2, derrotas: 1, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 2, empates: 2, derrotas: 3, pontos: 0 };

var jogadores = [rafa, paulo];
//Acesso de um item dentro do objeto
//console.log(rafa.nome)

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);

//Tudo oque for de HTML no JS precisa ser trata como texto

function exibeJogadoresNaTela(lista) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + lista[i].nome + "</td>";
    elemento += "<td>" + lista[i].vitorias + "</td>";
    elemento += "<td>" + lista[i].empates + "</td>";
    elemento += "<td>" + lista[i].derrotas + "</td>";
    elemento += "<td>" + lista[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

exibeJogadoresNaTela(jogadores);