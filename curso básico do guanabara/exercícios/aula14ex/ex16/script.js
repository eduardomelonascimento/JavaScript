function contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Faltam dados')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerText = 'Contando: '
        var ini = Number(inicio.value)
        var end = Number(fim.value)
        var step = Number(passo.value)
        if (step <= 0) {
            alert('Passo inválido! Considerando passo = 1')
            step = 1
        }
        if (ini < end) {
            for (var c = ini; c <= end; c += step) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (var c = ini; c >= end; c-= step) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } 
        res.innerHTML += '\u{1F3C1}'
    }
}