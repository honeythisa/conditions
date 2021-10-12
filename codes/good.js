// Bom dia, Boa tarde e Boa noite conforme a hora
let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 12) {
    console.log("Boa dia")
} else if (hora <= 18) {
    console.log("Boa tarde")
} else {
    console.log ("Boa noite Bruno")
}
console.log(" ")
// Escrever o dia da semana conforme o dia
let hoje = new Date()
let diaSem = hoje.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabádo
*/

switch (diaSem) {
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sexta")
        break
    case 6:
        console.log("Sabádo")
        break
    default:
        console.log("[ERRO] DIA INVÁLIDO")
}
console.log(" ")
// caso seja uma cor especifica...
let cor = "cinza"

switch (cor) {
    case "azul escuro":
        console.log("cor sorteada")
        break
    case "azul claro":
        console.log("cor sorteada")
        break
    case "amarelo":
        console.log("cor sorteada")
        break
    case "preto":
        console.log("cor sorteada")
        break
    default:
        console.log("[fail] Errou as cores que estão sorteadas")
}