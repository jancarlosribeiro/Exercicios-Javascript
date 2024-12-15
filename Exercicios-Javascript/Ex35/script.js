var tempo = Number(prompt("Digite um número e e descubra a Verificação do Tempo"))

if(tempo >= 5 && tempo <= 11 ) {
    alert("É Manhã")
}
else if(tempo >= 12 && tempo <= 17) {
    alert("É Tarde")
}
else {
    alert("Madrugada")
}