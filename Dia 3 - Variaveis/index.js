/* DIA 3
----- Jeito que eu fiz ------
let nome = prompt('Digite seu nome')
let idade = (prompt('Digite sua idade'))
let altura = (prompt('Digite sua altura'))
let peso = (prompt('Digite seu peso'))
let ano = (2023 - (idade))
let IMC = Number(peso/(altura * altura))

console.log(nome)
console.log(idade)
console.log(altura)
console.log(peso)

console.log("Olá " + nome + ', você tem ' + idade + ' anos, nasceu em ' + ano + ', tem ' + altura + 'cm de altura, pesa ' + peso + 'kg e seu IMC é ' + IMC + 'kg/m2');
*/
/* 
//Jeito do professor:
//Declaração de Variaveis - jeito do Giovanni

let nome = ""
let idade = 0
let altura = 0
let peso = 0

//Solicirando informação ao usuario e atribuindo os valores as variasveis

nome = prompt('Digite seu nome: ')
idade = (prompt('Digite sua idade: '))
altura = (prompt('Digite sua altura: '))
peso = (prompt('Digite seu peso: '))

//Calculando o ano que a pessoa nasceu e o IMC

let anoNasc = 0
anoNasc = 2023 - idade

let imc = 0
imc = peso/(altura * altura)

//Exibindo as imformações mo console

console.log("Olá " + nome + ', você tem ' + idade + ' anos, nasceu em ' + anoNasc + ', tem ' + altura + 'cm de altura, pesa ' + peso + 'kg e seu IMC é ' + imc + 'kg/m2');
*/
