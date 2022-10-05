export function pintarError(error){
console.log("paso por el error")
document.getElementById("errores").style.display="block"
document.getElementById("diverror").style.display="block"   
document.getElementById("error").innerHTML=error
document.body.scrollTop=0;
document.documentElement.scrollTop = 0

}

export function pintarMensaje(mensaje){
    console.log("paso por el Mensaje ", mensaje)
    
    window.document.getElementById("mensajes").style.display="block"
    window.document.getElementById("divmensaje").style.display="block"   
    window.document.getElementById("mensaje").innerHTML=mensaje
    document.body.scrollTop=0;
    document.documentElement.scrollTop = 0
    
    }