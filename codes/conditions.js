// condição simples
console.log("------ conferindo a velocidade ------");
let velo = 300;
console.log(`A velocidade de seu carro é ${velo}km/h`);

if (velo > 60) {
    console.log("Você ultrapassou a velocidade permitida. MULTADO!");
}
console.log("Dirija sempre usando cinto de segurança!");
console.log(" ");

// condição composta
console.log("------ conferindo a nacionalidade ------");
let country = "EUA";
console.log(`Vivendo em ${country}`);

if (country != "Brasil") {
    console.log("Você é estrangeiro");
} else {
    console.log("Você é brasileiro");
}
console.log(" ");

// condição aninhada
console.log("------ conferindo a idade ------");
let idade = 16;
console.log(`Você tem ${idade} anos;`);

if (idade < 16) {
    console.log("Não vota.");
} else if (idade < 18 || idade > 65) {
    console.log("Voto opcional. ")
} else {
    console.log("Voto obrigatório.");
}
/*
situação da condição
if (idade < 16) { --> se a idade não for menor que 16
    console.log("Não vota")
} else if (idade >= 16 && idade < 18) { ---> obviamente a idade vai ser maior que 16, então não precisa colocar 'idade >= 16'
    console.log("Voto opcional")
} else {
    console.log("Voto é obrigatório")
}

// else if simplificado pega mais um bloco, veja:
if (idade < 16) {
    console.log("Não vota")
}
else {
    if (idade < 18 || idade > 65) {
        console.log("Voto opcional")
    }
}
else {
    console.log("Voto obrigatório")
}
*/