var numero = Number(prompt("Digite o valor do produto:"))
var desconto = Number(prompt("Digite o código para descobrir o seu desconto:"))

var resultado = (numero - (numero / 100 * 10))

if(desconto == "desc10") {
    alert (`O valor da compra com desconto é de ${resultado}`)
}

else {
    alert (`O Cupom está inválido`)
    alert (`O Valor de compra é de ${numero}`)
}