function tabuada(){
  let numero = document.getElementById('txtnum')
  let tab = document.getElementById('seltab')

  if (numero.value.length == 0 ){
    window.alert('Por favor digite um número!')
  }else{
    let n = Number(numero.value)
    tab.innerHTML = `` 
    for(let c = 1;c<=10;c++){
      let item = document.createElement('option')
      let resultado = n*c
      item.text= `${n} x ${c} = ${resultado}`
      tab.appendChild(item)
    }
  }
  
}