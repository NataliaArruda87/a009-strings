const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log(frase)

const novaFrase = frase.replace("verde", "rosa").replace("azul", "laranja")
console.log(novaFrase)

console.log(`${novaFrase.includes("verde") && novaFrase.includes("laranja")}`)

const frasePlaca = "\"BOAS VINDAS, mas não deixe o gato sair\""
console.log(`Jorge tem uma casa verde e com portão azul, com os dizeres: ${frasePlaca.toUpperCase()}`)

