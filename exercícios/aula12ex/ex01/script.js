function carregar() {
    var msg = document.querySelector('p#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas</p>`
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#7F8A68'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#F9BD90'
    } else {
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#254E80'
    }
}