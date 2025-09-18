function carregar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoat = document.getElementById('txano')
    var res =  document.querySelector('div#res')
    if (anoat.value.length == 0 || Number(anoat.value) > ano) {
        window.alert('[ERRO] verifique se a sua resposta esta correta')
    } else { 
        var fsex = document.getElementsByName('vtsex')
        idade = ano - Number(anoat.value)
        res.innerHTML = (`idade calculada  ${idade} anos`)
           var genero = ''
        if (fsex[0].checked) {
            genero = 'masculino'
        } else if (fsex[1].checked) {
            genero = 'feminino'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `sexo : ${genero} - idade : ${idade}`
        
     }
}