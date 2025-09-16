function carregar() {
var img = window.document.getElementById('imagem')
var msg = window.document.getElementById('msg')
//var data = new Date ()
var hora = 20
msg.innerText = `agora sao as ${hora} horas `
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src ='imagens/demanha.jpg'
        document.body.style.background = '#F2C744'
    } else if ( hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'imagens/detarde.jpg'
        document.body.style.background ='#D4993D'
        //BOA TARDE
    } else { 
        img.src = 'imagens/denoite.jpg'
        document.body.style.background ='#203763'
    }

}