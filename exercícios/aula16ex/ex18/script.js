let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('res')
let valores = []

function isnumber(n) {
    if (Number(n) > 0 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}


function inlist(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isnumber(num.value) && !inlist(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já inserido.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
        num.focus()
    } else {    
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]       
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            media = soma/tot
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        res.innerHTML = `<p>Ao todo, ${tot} valores foram adicionados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }

}