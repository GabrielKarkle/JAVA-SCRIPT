var num = [1,2,3,8,4]
/*
for(var pos = 0 ; pos < num.length ; pos++) {
    console.log(num[pos])
}*/
/*
for(var pos in num) { //isso aqui e a mesma coisa que o de cima
    console.log(`${num[pos]}`)
}
*/
 var pos = num.indexOf(9)
 if(pos == -1 ) {
    console.log('este numero nao existe na variavel')
 } else { 
    console.log(`o valor de numero 8 esta na ${pos} posiçao`)
}

