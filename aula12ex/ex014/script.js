function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  var minutos= data.getMinutes()
  var segundos= data.getSeconds()
  msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos}`

  if (hora >= 0 && hora < 12) {
    //BOM DIA
    img.src = '../imagens/manhã-p.png'
    document.body.style.background = '#f7e896'
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    img.src = '../imagens/tarde-p.png'
    document.body.style.background = '#fea90c'
  } else {
    //BOA NOITE
    img.src = '../imagens/noite-p.png'
    document.body.style.background = '#543d5e'
  }
}

