let nome1 = "Murilo Voigt "
let nome2 = " Loni Voigt "
let nome3 = "NIvaldo Schlickmann "

function formatar(nome){
 nome = nome.toLowerCase()
 nome = nome.replaceAll(" ", "-")

 return nome
}

const nomeUser1 = formatar(nome1)
const nomeUser2 = formatar(nome3)
const nomeUser3 = formatar(nome2)

console.log(nomeUser1)
console.log(nomeUser2)
console.log(nomeUser3)
