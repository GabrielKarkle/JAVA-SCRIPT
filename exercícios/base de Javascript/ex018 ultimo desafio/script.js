var num = document.getElementById('numeros')
var lista = document.querySelector('select#flista')
var resp = document.querySelector('div#res')
var valores = []

function  valnumeros(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else {
        return false
    }
}
function listnumeros(n , l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }

}
function enviar () {
    if (valnumeros(num.value) && !listnumeros(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option') 
        item.text = `o valor ${num.value} foi adicionado`
        lista.appendChild(item)
        resp.innerHTML = ''
    } else {
        window.alert('valor invalido ou nao encontrado na lista')
    }
num.value = ''
num.focus()
}

function finalizar() {
    if( valores.length == 0 ) {
        window.alert('nao tem nenhum numero aqui, adicione os valores')
    } else {
        var tot =  valores.length 
        var maior = valores[0]
        var menor = valores[0]
        var media = 0 
        var soma = 0

        for( var pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior ) 
                maior = valores[pos]
            if (valores[pos] < menor )
                menor = valores[pos]
        }
        media = soma / tot
        resp.innerHTML += `o total de valores e de : ${tot} <br/>` 
        resp.innerHTML += `o maior valor da lista e : ${maior} <br/>`
        resp.innerHTML += `o menor valor da lista e : ${menor} <br/>`
        resp.innerHTML += `a soma de todos os numeros e igual a : ${soma} <br/>`
        resp.innerHTML += `a media dos valores e de : ${media}`
    }

}