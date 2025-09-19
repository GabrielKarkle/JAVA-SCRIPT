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
        var genero = '' 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'masculino'
            if (idade >= 0 && idade < 10){
             //bebe 
             img.setAttribute('src', 'imagens/bebe-homem-m.jpg')
            }else if (idade <= 21) {
             //jovem
             img.setAttribute('src', 'imagens/jovem-homem-m.jpg')
            }else if ( idade <= 45) {
             //adulto
             img.setAttribute('src', 'imagens/adult-homem-m.jpg')
            }else {
            //vovo
            img.setAttribute('src', 'imagens/vovo-homem-m.jpg')
            } 
            
        } else if (fsex[1].checked) {
            genero = 'feminino'
            if (idade >= 0 && idade < 10){
             //bebe 
             img.setAttribute('src', 'imagens/bebe-mulher-f.jpg')
            }else if (idade <= 21) {
             //jovem
             img.setAttribute('src', 'imagens/jovem-mulher-f.jpg')
            }else if ( idade <= 45) {
             //adulto
             img.setAttribute ('src', 'imagens/adult-mulher-f.jpg')
            }else {
            //vovo
            img.setAttribute('src', 'imagens/vovo-mulher-f.jpg')} 

        }
        res.style.textAlign = 'center'
        res.innerHTML = `sexo : ${genero} - idade : ${idade}`
        res.appendChild(img)
        
     }
}