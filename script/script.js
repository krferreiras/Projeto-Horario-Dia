function carregar() {
    const msg = document.getElementById('msg')
    const img = document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    const minutes = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutes}.`
    if (hora >= 6 && hora < 13) {
        img.src = '../fotos/manha.png'
        document.body.style.background = 'radial-gradient(circle at top,rgb(166, 220, 243)45%, rgb(138, 196, 220)60%, rgb(54, 78, 88))'
    } else if (hora >= 12 && hora <= 18) {
        img.src = '../fotos/tarde.png'
        document.body.style.background = 'radial-gradient(circle at top,rgb(253, 206, 68)45%, rgb(253, 179, 68)60%, rgb(71, 41, 6))'
    } else {
        img.src = '../fotos/noite.png'
        document.body.style.background = 'radial-gradient(circle at top, rgb(75, 89, 116)45%, rgb(31, 40, 57)70%, black)'
    }
}
