 /*ESAFIO 01 - DoDev school (WHILE)

Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando a estrutura WHILE, e pergunte ao usuario se ele deseja cadastrar outra nota. No final, exiba no console:
 - A média geral dos alunos
 - Quantos homens enviaram as notas
 - Quantas mulheres tiveram nota acima de 7
 - Qual a maior nota entre os homens
    *Obs.: para obter a média geral deve somar todas as notas e dividir pelo número de alunos!
*/

//------------------DESAFIO 01-------------
/*
let mediaGeral=0
let contHomem=0
let contMulherMaiorQue7=0
let maiorNotaHomen=0;
let contador = 1

while(contador <= 10){
  nota = parseFloat(prompt('Digite a nota do ' + contador + 'º aluno'))
  sexo = prompt('Digite  o sexo do aluno (m/f)')
  if(sexo == "m"){
    contHomem++
    let notaAtual = Number(nota)
    if(maiorNotaHomen < notaAtual){
      maiorNotaHomen = notaAtual
    }
  }else if(sexo=="f" && nota >7){
     contMulherMaiorQue7 ++  
  }
  mediaGeral += nota
  contador++
}
//mediaGeral /= 10
mediaGeral = sexo / 10

console.log('RESULTADOS FINALIZADOS!')
console.log('A média geral das notas é: '+ mediaGeral + '.')
console.log('Foram cadastrados' + contHomem + 'Homens.')
console.log('Foram cadastradas ' + contMulherMaiorQue7 + 'Mulheres com nota superior a  7.')
console.log('A maior nota entre os homens foi de '+ maiorNotaHomen + '.')

*/

//----------------DESAFIO 02------------------



//let saldo = Math.floor(Math.random() * 100);
let saldo = 1000
let maiorValorInserido = 0
let somaValorInserido = 0
let totalTransacoes = 0
let continuar = false

do{
  const nome = prompt('Qual é o seu nome? ')
  const cpf = prompt("Qual seu CPF?")
  const valor = Number(prompt("Digite o valor da transação: "))
  const operacao = prompt("Qual operação deseja fazer? s/d")

  if(valor < 0){
    console.log("Valor inválido. A transação não foi realizada.")
  }else if(operacao == "s" && valor > saldo){
    console.log(`Saldo insuficiente. A transação não foi realizada`)
  }else if(operacao == "s") {
    console.log(`Bem vindo ${nome}, Seu CPF é (${cpf}) e você  possui R$${saldo}.`)
    saldo -= valor;
    totalTransacoes++;
    somaValorInserido += valor
    if (valor > maiorValorInserido) {
        maiorValorInserido = valor
    }
    console.log("Transação realizada com sucesso. Seu saldo atual é  de R$"+ saldo)
  }

  const opcao = prompt("Deseja continuar? (1 para continuar, 2 para parar):")
  if(opcao === "1"){
    continuar = true
  } else if(opcao === "2") {
    continuar = false
  }else {
    console.log( 'Opção Inválida!')
    continuar = false
  }
}while(continuar)

console.log(`Saldo final: R$${saldo}`);
console.log(`Maior valor inserido: R$${maiorValorInserido}`);
console.log(`Media dos valores inseridos: R$${(somaValoresInseridos/ totalTransacoes)}`);