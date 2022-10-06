const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const id = urlParams.get('id')

console.log(id);

const mostrardetalle= async (id) => {

    
    const textofetch= "http://localhost:8000/api/anuncios?id="+id
   
    const getResponse = await fetch(textofetch);

    const data = await getResponse.json()

    return data
}
//const datos = await mostrar()
const datosd =await mostrardetalle(id)
const iduser=localStorage.getItem("id")

function pintardatosd(datos,iduser)  {
let texto ="<p></p>"
for (var x in datos) {
    console.log(datos[x].id);
    let id=datos[x].id
    let idu=datos[x].idu
    let titulo=datos[x].titulo
    let precio=datos[x].precio
    let descripcion=datos[x].descripcion
    let tags=datos[x].tags

texto=texto+`<a  >${titulo}<a>`
texto=texto+ `<p>${descripcion}<p>`
texto=texto+ `<p>${precio}<p>`
texto=texto+ `<p>${tags}<p>`
texto=texto+ `<p></p>`
console.log(iduser)
console.log(id)

if(iduser == idu){
    texto=texto+ `<p><button type="button" class="btn btn-danger" onclick='confirmar(${id})'>Eliminar</button></p>`
}


texto=texto+ `<p>------------------------</p>`

    

} return texto
}

window.confirmar = async (id) => {

if(    window.confirm("Deseas Borrar?")){
    console.log("Borrar Elemento")
     await borrar(id)
     window.document.getElementById("datadetalle").innerHTML="Elemento Borrado"

}else {

    
    console.log(" No Borrar Borrando")
}

}

window.document.getElementById("datadetalle").innerHTML=pintardatosd(datosd,iduser)

const borrar = async (ida) => {
    let token=localStorage.getItem("token")
    console.log(ida)
    const rawResponse = await fetch(`http://localhost:8000/api/anuncios/${ida}`, {
      method: 'DELETE',
      headers: {

        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({id: ida})
    });
    const content = await rawResponse.json();
    return content
    console.log(content);
}