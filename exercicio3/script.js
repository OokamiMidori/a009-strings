//Crie a const para a frase aqui

const frase = (`Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"`)
const novaFrase = frase.replace("verde", "rosa").replace("azul", "laranja")

console.log (novaFrase)

const temCor = novaFrase.includes("verde")
const temCor2 = novaFrase.includes("laranja")

console.log (temCor, temCor2)


console.log (frase.substr(0, 73) + frase.slice(74).toUpperCase())

//Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair