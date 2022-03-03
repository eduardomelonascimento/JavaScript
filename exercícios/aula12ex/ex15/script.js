function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.querySelector('img#img-receive')
    if (fano.value.length == 0 || Number.parseInt(fano.value) < 1900 || Number.parseInt(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number.parseInt(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
            if (idade <= 3) {
                genero = 'bebê'
                img.src = 'imagens/baby-boy.jpg'
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
            } else if (idade <= 11) {
                genero = 'garoto'
                img.src = 'imagens/children-boy.jpg'
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
            } else if (idade < 18) {
                genero = 'adolescente'
                img.src = 'imagens/teenager-boy.jpg'
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
            } else if (idade < 30) {
                genero = 'adulto'
                img.src = 'imagens/young-adult-man.jpg'
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
            } else if (idade < 40) {
                genero = 'adulto'
                img.src = 'imagens/adult-man.jpg'
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
            } else if (idade < 55) {
                genero = 'adulto'
                img.src = 'imagens/adult-man2.jpg'
                res.innerHTML = `Detectamos um ${genero} com ${idade} anos.`
            } else {
                genero = 'idoso'
                img.src = 'imagens/old-man.jpg'
                res.innerHTML `Detectamos um ${genero} com ${idade} anos.`
            }
        } else if (fsex[1].checked) {
            if (idade <= 3) {
                genero = bebê
                img.src = 'imagens/baby-girl.jpg'
                res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
            } else if (idade <= 11) {
                genero = 'garota'
                img.src = 'imagens/children-girl.jpg'
                res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
            } else if (idade < 18) {
                genero = 'adolescente'
                img.src = 'imagens/teenager-girl.jpg'
                res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
            } else if (idade < 30) {
                genero = 'adulta'
                img.src = 'imagens/young-adult-woman.jpg'
                res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
            } else if (idade < 40) {
                genero = 'adulta'
                img.src = 'imagens/adult-woman2.jpg'
                res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
            } else if (idade < 55) {
                genero = 'adulta'
                img.src = 'imagens/adult-woman.jpg'
                res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
            } else {
                genero = 'idosa'
                img.src = 'imagens/old-woman.jpg'
                res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
            }
        }
    }   
}