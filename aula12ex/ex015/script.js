function verificar(){
  var data= new Date()
  var ano = data.getFullYear()
  var fano= document.getElementById('txtano')
  var res= document.getElementById('res')
  if(fano.value.length ==0 || Number(fano.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente')
  }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero= ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if (fsex[0].checked){
      genero='Homem'
      if(idade>=0 && idade <10){
        //Criança
        img.setAttribute('src', 'imagens/bebe-homem.jpg')
      }else if (idade >=10 && idade <21){
        //Jovem
        img.setAttribute('src', 'imagens/homem-jovem.jpg')
      }else if(idade>=21 && idade <64){
        //Adulto
        img.setAttribute('src', 'imagens/homem.jpg')
      }else if(idade>=64){
        //Idoso
        img.setAttribute('src', 'imagens/homem-idoso.jpg')
      }
    }else if (fsex[1].checked){
      genero='Mulher'
      if(idade>=0 && idade <10){
        //Criança
        img.setAttribute('src', 'imagens/bebe-mulher.jpg')
      }else if (idade >=10 && idade <21){
        //Jovem
        img.setAttribute('src', 'imagens/mulher-jovem.jpg')
      }else if(idade>=21 && idade <64){
        //Adulto
        img.setAttribute('src', 'imagens/mulher.jpg')
      }else if(idade>=64){
        //Idoso
        img.setAttribute('src', 'imagens/mulher-idosa.jpg')
      }
    }
    res.style.textAlign='center'

    res.innerHTML= `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos`
    res.appendChild(img)
  }
}