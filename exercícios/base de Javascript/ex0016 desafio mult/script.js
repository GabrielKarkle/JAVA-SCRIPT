function calcular() {
    var num = document.getElementById('numT')
    var t = document.getElementById('mult') 
        if (num.value.length == 0) {
            window.alert('[ERROR] verifique de novo os seus dados')
        } else {
            var n = Number(num.value)
            var c = 1
            t.innerHTML= ''
            while (c <= 10) {
                var item = document.createElement('option')
                item.text = `${n} x ${c} =  ${c*n}`
                item.value = (`tab ${c}`)
                t.appendChild(item)
                c++
            }
        }
   
}