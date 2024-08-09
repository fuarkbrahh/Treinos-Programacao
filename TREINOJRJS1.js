function soma (num1,num2) {
    let soma = (num1+num2);
    return soma;

}
console.log(soma(4,2));

function olá () {
    console.log("olá!")
}
olá()

function ola() {
    function mensagem() {
        return 'Olá'
    }
}
ola()


function ola(nome) {
    console.log('Olá', nome)
}
ola('Matheus')

const numeroAleatorio = () => Math.random()
console.log(numeroAleatorio())