// Variáveis para armazenar o nome e a XP do herói
let nomeDoHeroi = "Link"; // Você pode mudar o nome do herói aqui
let xpDoHeroi = 8500;   // Você pode mudar a quantidade de XP aqui

// Variável para armazenar o nível do herói
let nivelDoHeroi;

// Estrutura de decisão para classificar o nível do herói
if (xpDoHeroi < 1000) {
    nivelDoHeroi = "Ferro";
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    nivelDoHeroi = "Prata";
} else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
    nivelDoHeroi = "Platina";
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
} else { // XP maior ou igual a 10.001
    nivelDoHeroi = "Radiante";
}

// Exibe a mensagem final
console.log(`O Herói de nome **${nomeDoHeroi}** está no nível de **${nivelDoHeroi}**`);
