var num = [2, 7, 0, 7]
console.log(`Valores do vetor: ${num}`)
num[2] = 6
num.push(9)
console.log(`Valores do vetor: ${num}`)
num.sort()
console.log(`Valores do vetor: ${num}`)
console.log(`O vetor tem ${num.length} posições`)
/* for (var pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`) 
} */
/* for (var pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
} */
var position = num.indexOf(2)
if (position == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição: ${position}`)
}