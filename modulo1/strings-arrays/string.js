const nome = prompt("Digite seu nome")
const email = prompt("Digite seu email")
console.log("nome: ",nome )
console.log("email: ", email)
 

let Comidas = ["Café", "Pizza", "Feijoada", "Churrasco", "Pastel"]
console.log(Comidas)
console.log("Essas são minhas comidas preferidas ")
const indice = prompt('Digite o índice da comida que deseja remover da lista [0, 1, 2, 3 ou 4]: ');
Comidas.splice(0, 0);
Comidas.splice(1, 1);
Comidas.splice(2, 2);
Comidas.splice(3, 3);
Comidas.splice(4, 4);
console.log(Comidas)
console.log(Comidas)
