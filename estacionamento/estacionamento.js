var input = require('readline-sync')
var vagas=[]

function menu(){
   console.log ("1 Registrar entrada\n2 Registrar saida\n0 Sair")
}



function registrarEntrada(){

var placa =(input.question('placa'))
var entrada = new Date()
var carro ={placa:placa,
entrada:entrada,
saida:null
}
vagas.push (carro);}


function registrarSaida(){
    console.log("receber a placa do carro e marcar como não estacionado e vai cobrar o valor devido")
}

menu()
var opcaoEscolhida = Number(input.question("Digite a opcao "));
while (opcaoEscolhida !== 0){
    

    switch (opcaoEscolhida) {
        case 1:
            registrarEntrada( );
            break;
        case 2:
            registrarSaida();
            break;
    }
    input.question("contiuar... ")
    menu();
    var opcaoEscolhida = Number(input.question("Digite a opcao "));}