
import { pintardatos} from "./pintardatos.js";
const mostrar= async (email,password) => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    var pagina = urlParams.get('pagina')
    
    if (pagina == null){pagina=1}

    console.log("Pagina: ",pagina)


    const textofetch= "http://localhost:8000/api/anuncios?_limit=5&_page="+pagina
   
    const getResponse = await fetch(textofetch);
    
    return getResponse
}



const respuesta =await mostrar()

const total = respuesta.headers.get('X-Total-Count');
    console.log("Total: ",total)
    const datos = await respuesta.json()

const concatena= async (maxpag,textoP) => {
   let x =1
   console.log("maxpag:",maxpag)
    while (x <= maxpag){
        console.log("Paso POr Aqui")

         textoP=textoP + `<a href=index.html?pagina=${x}> ${x} </a>`
        x++}
    
    textoP = textoP+ "</p>"
    console.log("textoP",textoP)
    return textoP
}

const pagina= async () =>{
    console.log("Escucha")
    
let maxpag= Math.ceil(total/5)
let textoP = "<p> Pagina: "

//textoP = await concatena(maxpag,textoP)


window.document.getElementById("paginas").innerHTML=await concatena(maxpag,textoP)
console.log("Texto:" ,textoP)



}

window.addEventListener('load', pagina())


console.log(datos)



window.document.getElementById("dataanuncios").innerHTML=pintardatos(datos)


