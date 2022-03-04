function calcular () {
    var txtnum = document.getElementById('txtnum')
    var num = Number.parseInt(txtnum.value)
    var tab = document.getElementById('seltab')
    
    if (txtnum.value.length == 0) {
        alert('Digite um valor')
    } else {
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
        }
    }
    
}