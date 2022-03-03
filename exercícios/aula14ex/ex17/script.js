function calcular () {
    var txtnum = document.getElementById('txtnum')
    var num = Number.parseInt(txtnum.value)
    if (txtnum.value.length == 0) {
        alert('Digite um valor')
    }
    res.innerHTML = `${num}`
}