//Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:



//a) Crie um novo array que contenha apenas o nome dos doguinhos
/* ArrayPets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]
let nomes = [
    { nome: "Lupin"},
    { nome: "Polly"},
    { nome: "Madame"},
    { nome: "Quentinho"},
    { nome: "Fluffy"},
    { nome: "Caramelo"},
]
console.log(nomes)*/
//b) Crie um novo array apenas com os [cachorros salsicha]
/*ArrayPets=[
{ nome: "Lupin", raca: "Salsicha"},
{ nome: "Polly", raca: "Lhasa Apso"},
{ nome: "Madame", raca: "Poodle"},
{ nome: "Quentinho", raca: "Salsicha"},
{ nome: "Fluffy", raca: "Poodle"},
{ nome: "Caramelo", raca: "Vira-lata"},
]
let racaSalsicha = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Quentinho", raca: "Salsicha"},
]
console.log(racaSalsicha)*/
//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.
//A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
/*ArrayPets=[
    { nome: "Madame", raca: "Poodle"},
    { nome: "Fluffy", raca: "Poodle"},
]
let desconto = [
    nome1 = "Madame",
    nome2 = "Fluffy",
]
console.log(`Você ganhou um cupom de desconto de 10% para tosar a ${nome1}`)
console.log(`Você ganhou um cupom de desconto de 10% para tosar o ${nome2}`)*/
//EX-02:
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 //A) Crie um novo array que contenha apenas o nome de cada item
// console.log("Alface Lavada") 
// console.log("Guaraná 2l")
// console.log("Veja Multiuso")
// console.log("Dúzia de Banana") 
// console.log("Leite")
// console.log("Cândida")
// console.log("Detergente Ypê") 
// console.log("Vinho Tinto")
// console.log("Berinjela kg") 
// console.log("Sabão em Pó")

//B) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
/*console.log( { nome: "Alface Lavada", preço: 2.38 },
{ nome: "Guaraná 2l", preço: 7.13 },
{ nome: "Veja Multiuso", preço: 11.97 },
{ nome: "Dúzia de Banana", preço: 5.42 },
{ nome: "Leite", preço: 2.84 },
{ nome: "Cândida", preço: 3.14 },
{ nome: "Detergente Ypê", preço: 2.09 },
{ nome: "Vinho Tinto", preço: 52.25 },
{ nome: "Berinjela kg", preço: 8.54 },
{ nome: "Sabão em Pó Ypê", preço: 10.26 })*/

//C) Crie um novo array que contenha apenas os objetos da categoria Bebidas
/*console.log("Bebidas:",   { nome: "Guaraná 2l", categoria: "Bebidas", preço: 7.8 },
{ nome: "Leite", categoria: "Bebidas", preço: 2.99 },
{ nome: "Vinho Tinto", categoria: "Bebidas", preço: 55 })*/

//D)  Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
/*console.log("Limpeza",{ nome: "Detergente Ypê", categoria: "Limpeza", preço: 2.2 },
{ nome: "Sabão em Pó Ypê", categoria: "Limpeza", preço: 10.80 })*/

//E) rie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
//Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
/*console.log("Promoção!!!") 
console.log("Compre Detergente Ypê por R$2,20",
"Compre Sabão em Pó Ypê por R$10,80")*/