var agora = new Date ()
var hora = agora.getHours
if (hora < 6 ) {
    console.log('boa madrugada')
 }
 else if ( hora < 12 ) {
    console.log('bom dia')
 }
else if (hora < 18 ) { 
    console.log ('boa tarde')
 }
 else { ( hora > 18 )  
    console.log ('boa noite')

 }