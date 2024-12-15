var maca = Number(prompt("Digite quantas maçãs você quer comprar"))
var precoUm = 1.30
if (maca >= 12) {
    precoUm = 1
    var calculo = maca * precoUm
    alert(`Voce comprou ${maca} de maçãs e saiu na promo total = ${calculo}`)
}
else {
    var calculo = maca * precoUm
    alert(`Voce comprou ${maca} de maçãs. total = ${calculo}`)
}