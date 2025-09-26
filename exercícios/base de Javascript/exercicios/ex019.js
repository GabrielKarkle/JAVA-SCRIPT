/*
function factorial(n) {
    var fat = 1
    for( var c = n ; c > 1 ; c--){
       fat *= c
    } 
    return fat
}
console.log(factorial(5))
*/

function factorial(n) {
    if ( n == 1){
        return 1
    }else {
        var fac = n * factorial(n-1)
        return fac
    }
}
console.log(factorial(5))