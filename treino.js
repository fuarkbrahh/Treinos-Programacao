

function torneio (str1,str2,str3,str4) {
    let chave1 = (str1,str3);
    let chave2 = (str2,str4);

    console.log("o jogo da chave 1 é",str1,"e",str3);
    console.log("o jogo da chave 2 é",str2,"e",str3);
}

function jogos (num1,num2,num3,num4) {


if (num1 > num2) {
    console.log("O time1 venceu!")
}
else {
    console.log("O time 2 Venceu!")
}
}
console.log(torneio ("palmeiras","vasco","botafogo","gremio"));

console.log(jogos(1,1,4,2))


