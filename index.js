//Variavel jogador
let jogador = {
    nome: "Likizin",
    xp: 1000,
    vida: 10,
    ranker: ""
};
//funciton = função
//variavel rank
//if = se
//else if = se não
function rankerHeroi() {
   if (jogador.xp === 1000) {
        jogador.ranker = "Ferro";
    }else if (jogador.xp >= 1.001 && jogador.xp <= 2000){
        jogador.ranker = "Bronze";
    }else if (jogador.xp >= 2001 && jogador.xp <= 5000){
        jogador.ranker = "Prata";
    }else if (jogador.xp >= 6001 && jogador.xp <= 7000){
        jogador.ranker = "Ouro";
    } else if (jogador.xp >= 7001 && jogador.xp <= 8000){
        jogador.ranker = "Platina";
    } else if (jogador.xp >= 8001 && jogador.xp <= 9000){
        jogador.ranker = "Ascendente";
    } else if (jogador.xp >= 9001 && jogador.xp <= 10000){
        jogador.ranker = "Imortal";
    } else if (jogador.xp >= 10001){
        jogador.ranker = "Radiante";
    }
}

//Verifica o rank atual do jogador

rankerHeroi();

//Aleatorizar o inimigo.
function gerarInimigo() {

    //Math.ramdom retorna um numero entre 0 e 1
    //const não pode ser alterado apos atributo inicial
    const probabilidade = Math.random();

    const comun = 0.5;
    const incomun = 0.3;
    const raro = 0.2;

    let tipoDeInimigo;
    let xpM;
    let vidaM = 10; 


    if(probabilidade <= comun) {
        tipoDeInimigo = "Goblin";
        xpM = 2400;
    }else if (probabilidade <= comun + incomun) {
        tipoDeInimigo = "King";
        xpM = 6700;
        vidaM = 15;
    }else if (probabilidade <= comun + incomun + raro){
        tipoDeInimigo = "Ganon";
        xpM = 12000;
        vidaM = 20;

}

//return pengando o tipo, xp e vida
        return { tipoDeInimigo, xpM, vidaM };


}
//While é para executar uma ação varias vezes
function combate() {
    console.log("Combate iniciado: " + jogador.nome + " vs " + monstro.tipoDeInimigo);

    while(jogador.vida > 0 && monstro.vidaM > 0) {
    console.log(jogador.nome + " ataca " + monstro.tipoDeInimigo);
    monstro.vidaM -= 1;

    if (monstro.vidaM <= 0) {
        console.log(jogador.nome + " derrotou " + monstro.tipoDeInimigo);
        jogador.xp += monstro.xpM;
        console.log(jogador.nome + " ganhou " + monstro.xpM + " de XP.");
        //Atualizar o rank
        rankerHeroi();

        console.log("O Herói de nome " + jogador.nome + " está no nivel de " + jogador.ranker);

        
    }

    }
}
//Armazenar o montro do ferarInimigo
let monstro = gerarInimigo();
console.log("Monstro aparece: " + monstro.tipoDeInimigo);
combate();
