function confirmar() {
    var inicio = document.getElementById('inicio')
    var i = Number(inicio.value)
    var fim = document.getElementById('fim')
    var f = Number(fim.value)
    var msg = document.getElementById('msg')
    
while (i > f){
    msg.innerHTML = ('Comendo uma fatia de pizza')
}


//for (let pos in valores) {  // para cada posição dentro de valores, mostre o valores[pos]
 //   console.log(valores[pos])
//}