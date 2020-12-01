

function calcular() {
var p1 = window.document.getElementById('prova1')
var p2 = window.document.getElementById('prova2')
var p3 = window.document.getElementById('prova3')
var p4 = window.document.getElementById('prova4')
var med = window.document.getElementById('media')
var res = window.document.getElementById('resp')




p01 = Number(p1.value);
p02 = Number(p2.value);
p03 = Number(p3.value);
p04 = Number(p4.value);
me = Number(med.value);
calc1 = (p01 + p02) *1.5
calc2 = (p03*4)
calc3 = (p04*3)
nota = (calc1 + calc2 +calc3) /10




if(p1.value.lenght == 0 || p2.value.length == 0 || p3.value.lenth == 0 || p4.value.length == 0 || med.value.length == 0) {
  res.style.color = "red"
  res.innerHTML = `❌ Algum campo esta vazio ou incorreto por favor verifique`

  }
  else if(nota >= me) {
    
    res.style.color = 'green'
    res.innerText = ` ✔ Parabens você esta aprovado, sua media final é ${nota}`
    console.log (nota)

   
  }else {
  res.style.color = 'red'
  res.innerText= `Você foi reprovado, sua media final é ${nota}`

}




}


