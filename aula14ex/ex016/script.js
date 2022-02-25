function contar(){
  let ini= document.getElementById('txtinicio')
  let fim= document.getElementById('txtfim')
  let pas= document.getElementById('txtpasso')
  let res = document.getElementById('res')

  if (ini.value.length==0||fim.value.length==0){
    res.innerHTML= 'Impossivel contar!'
  }else if (pas.value==0){
    window.alert('O Passo não poder ser 0, modificado para 1!')
    pas.value=1
  }else{
    res.innerHTML = 'Contanto: <br>'

    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pas.value)

    if (i < f){
      for (let c = i; c <= f; c=c+p) {
        res.innerHTML += ` ${c} \u{1F449}`
      }
    }else{
      for (let c = i; c>=f;c-=p){
        res.innerHTML += ` ${c} \u{1F449}`
      }
    }
    res.innerHTML += ` \u{1F3C1}`
  }
}