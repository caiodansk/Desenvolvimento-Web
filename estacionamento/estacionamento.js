var input = require("readline-sync");
var listavagas = new Array(10);
function menu() {
  console.log("1 Registrar entrada\n2 Registrar saida\n3 vagas\n0 Sair");
}

function registrarEntrada() {
  var placa = input.question("placa");
  var entrada = new Date();
  var carro = { placa: placa, entrada: entrada, saida: null };
  listavagas.push(carro);
}

function registrarSaida() {
  console.log(
    "receber a placa do carro e marcar como não estacionado e vai cobrar o valor devido"
  );
}

function listavagass() {
  console.log(listavagas);
}
menu();
var opcaoEscolhida = Number(input.question("Digite a opcao "));
while (opcaoEscolhida !== 0) {
  switch (opcaoEscolhida) {
    case 1:
      registrarEntrada();
      break;
    case 2:
      registrarSaida();
      break;
    case 3:
      listavagass();
      break;
  }
  input.question("contiuar... ");
  menu();
  var opcaoEscolhida = Number(input.question("Digite a opcao "));
}
