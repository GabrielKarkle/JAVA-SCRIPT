
 function contar() {
    var n1 = document.getElementById('txti')
    var n2 = document.getElementById('txtf')
    var n3 = document.getElementById('txtp')
    var r = document.getElementById('res')
    if (n1.value.length == 0 && n2.value.length == 0 && n3.value.length == 0 ) {
    window.alert('[ERROR] verifique os seus valores')
    } else {
        res.innerHTML = 'Contando... <br/>'
        var i = Number(n1.value)
        var f = Number(n2.value)
        var p = Number(n3.value)
        if(p <= 0) {
            window.alert('paso invalido, considerando paso = 1')
            p = 1
        }
        if ( i < f )
            //contagem crescente
            for(var c = i; c <= f; c += p) {
            r.innerHTML += ` \u{1F449}  ${c} `  
        }else { (i > f)
            //contagem decrescente
            for(var c = i ; c >= f ; c-= p) {
             r.innerHTML += ` \u{1F449}  ${c} `  
            }
        }
    } 
    r.innerText += `\u{1F3C1}` 


}


