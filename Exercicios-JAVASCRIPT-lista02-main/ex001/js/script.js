var valor = Number(prompt("Digite um valor:"))

alert(`Em reais fica ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)

/* colocar a moeda do valor digitado */