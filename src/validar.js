window.validar=(valor) => {
console.log(valor)
console.log("Ejemplo")

if (window.document.getElementById("ctitulo").value != "" && window.document.getElementById("cdescripcion").value != ""&& window.document.getElementById("cprecio").value != "")
{
    window.document.getElementById("cpublicar").disabled=false

}else{
    window.document.getElementById("cpublicar").disabled=true

}


}