function confirmar() {
    var i = document.getElementById('inicio')
    var inicio = Number(i.value)
    var f = document.getElementById('fim')
    var fim = Number(f.value)
    var msg = document.getElementById('msg')
    var p = document.getElementById('passo')
    var pulando = Number(p.value)


    if ( i.value.length == 0 || f.value.length == 0 || p.value.length == 0 ) {
        alert('Digite corretamente!')
    }
    else {
        if (inicio <= fim) {
            msg.innerHTML = ('Contando: ')
            while (inicio <= fim) {
                msg.innerHTML += (` ${inicio} &#128073; `)
                inicio += pulando
            } msg.innerHTML += (`Fim !! &#9995;`)
        }
        else if (fim <= inicio) {
            msg.innerHTML = ('Contando: ')
            while (fim <= inicio) {
                msg.innerHTML += (` ${inicio} &#128073; `)
                inicio -= pulando
            } msg.innerHTML += (`Fim !! &#9995;`)

        }
    }

    




    /*
    
    for (;inicio < fim; inicio*pulando;){
        msg.innerHTML += (`<p> Começando por ${inicio} e pulando de ${pulando} </p>`)
    }
    */

}
