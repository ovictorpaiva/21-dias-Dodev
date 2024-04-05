//for(condição)
//for (let contador = 0; contador <=5; contador++){}

/*let tabuada = Number(prompt("Escolha sua tabuada:"))

console.log(tabuada +" x 0 = " + tabuada*0)
console.log(tabuada +" x 1 = " + tabuada*1)
console.log(tabuada +" x 2 = " + tabuada*2)
console.log(tabuada +" x 3 = " + tabuada*3)
console.log(tabuada +" x 4 = " + tabuada*4)
console.log(tabuada +" x 5 = " + tabuada*5)
*/
//Ultilizando o FOR

/*let tabuada = Number(prompt("Escolha sua tabuada:"))

for(let contador = 0; contador <=10; contador ++){
    console.log(`${tabuada} X ${contador} = ${tabuada * contador}`)        
}*/

//DESAFIO 01 - Faça um algoritmo que receba um valor, inteiro e positivo, e usando a estrutura FOR, mostre no console uma contagem de 0 até o número recebido.

//let numero = parseInt(prompt("Escreva um número maior que 0:"))

//for(let contador = 0; contador <= numero; contador ++){
//  console.log(contador)
//}

/*DESAFIO 02 - Desenvolva um algoritmo que usando a estrutura FOR mostre no console uma contagem de 0 a 50, porém, essa contagem tem que ser feita de 5 em 5. Ex.: 0 5 10 15 … 45 50 Fim!

let  num = 0

for(let i = 0; i <= 50; i+= 5) {
  console.log(i)
}*/

//DESIO 03 - Agora faça com que o algoritmo do exercício anterior exiba a mesma contagem mas na ordem inversa. Ex.: 50 45 40 35 30 25 … 5 0 Fim!

//for(let i = 50; i >= 0; i-= 5) {
//  console.log(i)
//}

/*DESAFIO 04 - Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 número e exiba na tela qual o resultado da sua tabuada e dos próximos 2 números.Ex: Números de entrada:3



   Saída:  Número 3:      Número 4:         Número 5:       

           3 x 1 = 3      4 x 1 = 4         5 x 1 = 5

           3 x 2 = 6      4 x 2 = 8         5 x 2 = 10

           3 x 3 = 9      4 x 3 = 12        5 x 3 = 15          

           3 x 4 = 12     4 x 4 = 16        5 x 4 = 20         
*/

let num = parseInt(prompt("Escolha sua tabuada:"))

for(let tabuada1 = num; tabuada1 <= num + 2; tabuada1++){
    console.log("tabuada do numero: " + tabuada1)
    for(let tabuada2 = 0; tabuada2 <= 10; tabuada2++){
      console.log(tabuada1 + " X " + tabuada2 + " = " + (tabuada1*tabuada2))
    }
}