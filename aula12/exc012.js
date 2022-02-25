var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <= 12 && hora >6){
  console.log(`Está de manhã!`)
}
else if (hora<=18 && hora>12){
  console.log('Está de tarde!')
}
else if (hora<=23 && hora>18){
  console.log('Está de noite!')
}
else{
  console.log('Está de madrugada!')
}