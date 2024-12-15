var peso = Number(prompt("Digite seu peso para descobrir o seu IMC"))
var altura = Number(prompt("Agora digite sua altura"))
var imc = peso / (altura ** 2)

if(imc < 18.5) {
    alert("Você está abaixo do peso")
}
else if(imc > 18.5 && imc < 24.9 ) {
    alert("Peso normal")
}
else if(imc > 25 && imc < 29.9) {
    alert("Você está sobre peso")
}
else{
    alert("Você está Obeso :o")
}