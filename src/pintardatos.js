export function pintardatos(datos)  {
    console.log("Pintando ")
    let texto ="<p></p>"
console.log("Datos:" ,datos)
    if (datos.length==0){
    texto= "No hay elementos"
}else {
for (var x in datos) {
    console.log(datos[x].id);
    let id=datos[x].id
    let titulo=datos[x].titulo
    let descripcion=datos[x].descripcion
    let tags=datos[x].tags

texto=texto+`<a href='./public/detalle.html?id=${id}' >${titulo}<a>`
texto=texto+ `<p>${descripcion}<p>`
texto=texto+ `<p>${tags}<p>`
texto=texto+ `<p></p>`

texto=texto+ `<p>------------------------</p>`

    

} } return texto
}