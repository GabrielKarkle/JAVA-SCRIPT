
function contando(){
    var n1 = document.getElementById('num1')
    var n2 = document.getElementById('num2')
    var r  = document.getElementById('res')
        if (n1.value.length == 0 && n2.value.length == 0) {
            window.alert('[ERROR] nao tem nenhum numero')
        }
        else {
            var n1 = Number(n1.value)
            var n2 = Number(n2.value)
            r.innerHTML = ''
           
            if(n1 >= n2) {
                do { r.innerHTML +=  `${n1} `
                 n1-- 
                } while (n1 >= n2);
            } else {
                for(var c = n1 ; c <= n2 ; c++) {
                    r.innerHTML += `${c} `
                }
            }
        
}}