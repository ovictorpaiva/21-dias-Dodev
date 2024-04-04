//DESAFIO 01
/* 
let numeroUm = Number(prompt("Escolha um número:"))
let numeroDois = Number(prompt('Escolha outro número:'))
let opcao = parseInt(prompt('Escolha uma operação: +, -, * ou /'))

switch(opcao) {
  case 1:
    console.log("A soma entre " + numeroUm + " e " + numeroDois + " é " + (numeroUm + numeroDois));
    break;
  case 2:
    console.log("A subtração entre " + numeroUm + " e " + numeroDois + " é " + (numeroUm - numeroDois));
    break;
  case 3:
    console.log("A multiplicação entre " + numeroUm + " e " + numeroDois + " é " + (numeroUm * numeroDois));
    break; 
  default:
      console.log("A divisão entre " + numeroUm + " e " + numeroDois + " é " + (numeroUm / numeroDois));
    break;

}*/

//DESAFIO 02

let valor 
let quantidade
let opcao = prompt("Qual dos nossos serviços te atenderia? n1 Gasolina, n2 Álcool e n3 Calibrar o Pneu")


switch(opcao){
  case "1":
    valor = parseInt(prompt("Qual o valor que você deseja abastecer?")) 
    quantidade = valor * 5
    console.log("Você ira abastecer com gasolina "+ quantidade+ " litos")
    break;
  case '2':
    valor =parseInt(prompt("Qual o valor que você deseja abastecer??")) 
    quantidade = valor * 3
    console.log("Você ira abastecer com álcool "+ quantidade + " litros")
    break;
  default:
    console.log("Calibragem bem sucedida!!")
    break;
}