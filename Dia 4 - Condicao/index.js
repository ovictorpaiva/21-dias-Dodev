// DESAFIO 01
/*
const temFome = prompt('Você está com fome? Sim ou Não')
const temDinheiro = prompt('Você tem dinheiro? Sim ou Não')
const restAberto = prompt('O restaurante esta aberto? Sim ou Não')

if( temFome === "não" || temDinheiro == "não") {
  console.log("Hoje o jantar será em casa");
} else if (temDinheiro === "sim" && restAberto == "sim") {
    console.log("Hoje o jantar será no seu restaurante preferido!")   
  } else {
    console.log("Peça um delivery")
}
*/

//DESAFIO 02
/*
let nome = ""
let idade = 0
let carta = ""
let carro = ""

nome = prompt("Qual é o seu nome? ")
idade = prompt("Qual é a sua idade?")
carta = prompt("Você tem carteira de motorista?")
carro = prompt("Você tem algum carro?")

if(idade  < 18 || carta === "não") {
  console.log(nome + ", você não pode dirigir.")
}else if(idade >= 18 && carta === "sim" && carro === "não"){
   console.log(nome + ", você pode dirigir mas não tem um carro!")
  }else if(idade >= 18 && carta === "sim" && carro === "sim"){
    console.log(nome + ", você será o motorista da rodada!")

}
*/

//-----------Jeito do Professor---------
//Criando Variáveis
let nome
let idade
let temCarro = false
let temCarta = false

//Pedindo informações ao usuário
nome  = prompt('Digite o seu nome: ')
idade = parseInt(prompt('Digite a sua idade: '))
let opcaoCarta = prompt("Você tem carta de motorista? (s/n)")
if(opcaoCarta == 's'){
  temCarta = true
}
let opcaoCarro = prompt("Você tem um carro? (s/n)")
if(opcaoCarro == 's'){
  temCarro = true
}
//Exibindo mensagem no console
if(idade < 18 || !temCarta){
  console.log(`Olá ${nome}, você não pode dirigir.`)
} else if(idade >= 18 && temCarta && !temCarro){
  console.log(nome + ", você pode dirigir mas não tem carro")
} else {
    console.log(nome + ", você será o motorista da rodada!")
}