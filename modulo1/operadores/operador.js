const idade = prompt ("Digite sua idade:")
const tempo = prompt ("Digite a idade de seu melhor amigo")
console.log("Diferença de idades:", idade - tempo)

let result = idade >= tempo
console.log("Diferença de idades:", result)

const par = prompt("digite um número")
console.log("resultado da divisão:", par / 2)

const n1 = prompt("Digite um número")
const n2 = prompt("escreva um número")
const final = n1 >= n2
console.log("O primeiro é maior ou igual o segundo?", final)

const n3 = prompt("1° number")
const n4 = prompt("2° number")
const rest = n3 === n4
console.log("é igual ao primeiro?", rest)
const n5 = prompt("primeiro número")
const n6 = prompt("segundo número")
const res = n5 >= n6
console.log("é maior ou igual o primeiro?", res)

const n7 = prompt("1 número")
const n8 = prompt("outro número")
const reso = n7 % n8
console.log("é divisível pelo segundo?", reso)
const n9 = prompt("Digite um número")
const n0 = prompt("escreva um número")
const ret = n0 % n9
console.log("é divisível pelo primeiro?", ret)

const userAge =prompt("Qual sua idade?")
console.log("Idade em meses", userAge / 12)
console.log("idade em dias", userAge / 365)
console.log("idade em horas", userAge / 8760)
