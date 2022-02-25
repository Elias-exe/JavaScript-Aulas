let num = document.getElementById('txtnum')
let tab= document.getElementById('slcres')
let res = document.getElementById('resultado')
let valores = []

function adicionar(){
  if (isEntre(num.value) && !isRepete(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `O valor ${num.value} foi adicionado`
    tab.appendChild(item)
  }else{
    window.alert('[ERRO] Valor inválido, ou já inserido!')
  }
  num.value= ''
  num.focus()

}

function isEntre(n){
  if (Number(n)<1 || Number(n)>100){
    return false
  }else{
    return true
  }
}

function isRepete(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }
}

function finalizar(){
  if(valores.length ==0 ){
    window.alert('Para finalizar, a lista não deve estar vazia!')
  }else{
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores){
      soma += valores[pos]
      if (valores[pos] > maior){
        maior=valores[pos]
      }
      if (valores[pos] < menor){
        menor = valores[pos]
      }
    }
    media = soma / valores.length
    res.innerHTML =``
    res.innerHTML +=`<p>Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML +=`<p>O maior número é: ${maior}</p>`
    res.innerHTML +=`<p>O menor número é: ${menor}</p>`
    res.innerHTML +=`<p>A soma de todos eles é: ${soma}`
    res.innerHTML +=`<p>A media de todos eles é: ${media}</p>` 
  }
}