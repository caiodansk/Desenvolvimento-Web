var input = require('readline-sync');
var dateFns = require('date-fns');
var vagas = new Array(10);
var clientes = new Array(); 
const VALOR_HORA = 10;

function menu(){
    console.log("1 Registrar entrada\n2 Registrar saida\n3 exibir carros\n4 exibir cliente\n5 relatorio\n0 Sair")
}

function registrarEntrada(){
    var vagaLivre = vagas.findIndex((vaga) => vaga === undefined);
    if (vagaLivre !== -1){
        var placa  = input.question("Digite a placa: ");
        var horaEntrada = new Date();

        var carro = {
            placa: placa,
            horaEntrada: horaEntrada,
            horaSaida: null,
            vaga: vagaLivre + 1
        }
        vagas[vagaLivre] = carro;
        console.log("Carro adicionado...")
    } else {
        console.log("O estacionamento está cheio")
    }

    
}

function registrarSaida(){
    var placa  = input.question("Digite a placa: ");
    var horaSaida = new Date();
    var index = vagas.findIndex((carro) => carro && carro.placa === placa)
    
    if (index !== -1) {
    var carro = vagas[index];
        carro.horaSaida = horaSaida
        var diferenca = Math.ceil((carro.horaSaida - carro.horaEntrada) / 1000 / 60)
        var valorPago = (diferenca/60) * VALOR_HORA
        var carroRemovido = vagas.splice(index,1,undefined)[0]
        carroRemovido.valorPago = valorPago;
        clientes.push(carroRemovido)
        console.log(`Carro de placa ${placa} deve pagar ${valorPago.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
    } else {
        console.log("Carro não encontrado")
    }
}

function exibirCarros(){
    vagas.forEach((carro) => {
        if(carro){
            console.log(`placa: ${carro.placa} `)
            console.log(`Hora entrada: ${
                dateFns.format(carro.horaEntrada, "dd/mm/yyyy - HH:mm:ss")
            }`)
            console.log(`Vaga: ${carro.vaga} `)
        }
    });
}

function exibirClientes(){
    clientes.forEach((carro) => {
        console.log(`placa: ${carro.placa} `)
        console.log(`Hora entrada: ${
            dateFns.format(carro.horaEntrada, "dd/mm/yyyy - HH:mm:ss")
        }`)
        console.log(`Vaga: ${carro.vaga} `)
        console.log(`Valor pago: ${carro.valorPago.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} `)
    });
}

function relatorio(){
    var total = 0
    clientes.forEach((carro) => total += carro.valorPago)
    console.log(`Estacionaram ${clientes.length} carros hoje e o valor apurado foi de ${total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`)
}

menu()
var opcaoEscolhida = Number(input.question("Digite a opcao: "));
while (opcaoEscolhida !== 0){
    

    switch (opcaoEscolhida) {
        case 1:
            registrarEntrada();
            break;
        case 2:
            registrarSaida();
            break;
        case 3:
            exibirCarros()
            break;
        case 4:
            exibirClientes()
            break;
        case 5:
            relatorio()
            break;
    }
    input.question("contiuar... ")
    menu();
    var opcaoEscolhida = Number(input.question("Digite a opcao: "));
}
