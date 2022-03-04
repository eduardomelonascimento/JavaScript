function adicionar() {
    let cont = 0
    let txtnum = document.getElementById('txtnum')
    let num = Number(txtnum.value)
    let numarray = []
    numarray[cont](num)
    alert(`${num}`)
    alert(`${numarray}`)
    cont++
}