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
    let precio=datos[x].precio
    let compra=datos[x].compra
    let tags=datos[x].tags
    let foto=datos[x].nombrefoto
    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        useGrouping: false,
    }); 

texto=texto+`<a href='./public/detalle.html?id=${id}' >${titulo}<a>`
texto=texto+ `<p>${descripcion}<p>`
texto=texto+ `<p>Precio ${compra} :  ${ dollarUS.format(precio)}<p>`
texto=texto+ `<p>${tags}<p>`
texto=texto+ `<p></p>`
console.log(foto)
if (foto != "sinFoto" ){
    texto = texto+`<img src="${foto}" alt="Sin Foto" width="200">`

}


texto=texto+ `<p>------------------------</p>`

    

} } return texto
}