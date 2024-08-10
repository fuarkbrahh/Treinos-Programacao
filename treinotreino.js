 /* var idade = "guga";

console.log(idade);
idade = 20;
console.log(idade);
var nome;
console.log(nome);

let nomeVariavel = "Tutunamucu";
console.log(nomeVariavel);

const nomeConstante = 100;
console.log(nomeConstante);

 if (true) {
let numero = 10;
console.log(numero);
}

console.log(numero); */

var numero = 10;
var numerinho = 3;

/* console.log(numero + numerinho);
console.log(numero - numerinho);
console.log(numero * numerinho);
console.log(numero / numerinho);
console.log(numero % numerinho); */

/*
console.log(10 == "10");

console.log(10 != 10);

console.log(10 !== "10");

console.log(10 > 5);

console.log(10 >= 10);

console.log (10 < 11);

console.log (10 <= 10);

// ! NEGAR
console.log(!(10 > 10));

// || OU
console.log((10 == 10 )|| (10 >20 ));
// && E

console.log((10 == 10) && (10 > 20)); */

/* let idade = 60;

if (idade <= 17){
console.log("Sou menos de idade");
} else if (idade > 17 && idade < 60) {
console.log("Sou adulto");
} else {
console.log("Estou na melhor idade");
}

let menu = 1;
switch (menu) {
case 1:
console.log("Cadastrar");
break;
case 2:
console.log("Listar");
break;
case 3:
console.log("Pesquisar");
break;
default:
console.log("Sair");
}
*/

// for
/*
for (var i = 0; i < 10; i++ ) {
    console.log("Olá mundo");
}
*/
// while

/* var j = 0;
while (j < 10 ) {
    console.log("Olá Mundo!");
    j++;
}
var k = 0;
*/

/*
var k = 11;
do {
    console.log("ola mundo");
    k++;
} while (k < 10);
 */


function verificarIdade(idade) {
    if (idade <= 17){
        return "Sou menor de idade";
        } else if (idade > 17 && idade < 60) {
        return "Sou adulto";
        } else {
        return "Estou na melhor idade";
        } 
}

console.log (verificarIdade(11));

console.log (verificarIdade(23));

console.log (verificarIdade(76));