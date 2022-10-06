
import { pintarError, pintarMensaje } from "./mensajes.js";

import { filtrar2} from "./filtrar.js";
import { pintardatos } from "./pintardatos.js";

window.filtrar = async (valor) =>{
  const datos = await filtrar2(valor)
  console.log("datos;",datos)
  window.document.getElementById("dataanuncios").innerHTML=pintardatos(datos)
}


const LSnombre= localStorage.getItem("nombre")

//window.onload = ()=> {
  window.addEventListener('load', function() {
  var base_url = window.location.origin;
  console.log("Prueba Log")
  console.log(base_url)
  let crear=base_url+"/public/crear.html"
  let home=base_url+"/index.html"
  window.document.getElementById('navbarcrear').setAttribute('href', crear);
  window.document.getElementById('navbarhome').setAttribute('href', home);
  })


console.log("LsNombre",LSnombre)
if (!LSnombre && ! window.location.href.includes("login") && ! window.location.href.includes("register"))
{
    window.location.replace("../public/login.html")
}

let logueado =1 
console.log("Paso por aqui")
//console.log(window.document.getElementById("nombre").innerHTML)





window.logout = () => {

    localStorage.clear()
    window.location.replace("../public/login.html")
}

const consola =  () => {
    email = document.getElementById("lemail").value
    password = document.getElementById("lpassword").value
   
    localStorage.setItem("usuario", email);
    console.log(email)



}

window.registrarusuario = () => {

document.getElementById("diverror").style.display="none"  
document.getElementById("errores").style.display="none"  
document.getElementById("divmensaje").style.display="none"  
document.getElementById("mensajes").style.display="none"  
const nombre=document.getElementById("rnombre").value
const apellido=document.getElementById("rapellido").value
const email=document.getElementById("remail").value
const password=document.getElementById("rpassword").value

console.log("Nombre", nombre)

postear(nombre,apellido,email,password)






}


window.loguear = () => {
    document.getElementById("diverror").style.display="none"  
  
    const email=document.getElementById("lemail").value
    const password=document.getElementById("lpassword").value
    
    console.log(email)
    
    traer(email,password)
    
    
    
    
  
    
    }

window.registraranuncio = () => {
    let token=localStorage.getItem("token")
    let username=localStorage.getItem("usuario")
    let tags=localStorage.getItem("tags")
    let id=localStorage.getItem("id")
    let input = document.getElementById('formFile')
    let foto=input.files[0]
    let nombrefoto=""
    console.log("Foto1",foto)
   
    
    //let username=""
    let titulo=window.document.getElementById("ctitulo").value
    let precio=window.document.getElementById("cprecio").value
    let descripcion=window.document.getElementById("cdescripcion").value
   let compra=""
    
    if (document.getElementById('ccompra').checked) {
        compra = document.getElementById('ccompra').value;
      }
    
      if (document.getElementById('cventa').checked) {
        compra = document.getElementById('cventa').value;
      }

    //let titulo="titulo"
//let descripcion="descripcion"
console.log("Antes de postanuncio")
    
    if(foto){
      nombrefoto=input.files[0].name
      postanuncio(id,username,titulo,descripcion,compra,tags,token,foto,nombrefoto,precio)

      }else{
    
        foto="sinFoto"
        nombrefoto="sinFoto"
        postanuncioSF(id,username,titulo,descripcion,compra,tags,token,foto,nombrefoto,precio)

      }

}

const postanuncio = async (idu,username,titulo,descripcion,compra,tags,token,foto,nombrefoto,precio)=>{
   
console.log("Entro Aquí")
console.log("FileFoto",foto)

const formData = new FormData();

formData.append('file', foto);


const upload2 = await  fetch('http://localhost:8000/upload', { // Your POST endpoint
method: 'POST',
headers: {
  // Content-Type may need to be completely **omitted**
  // or you may need something
  //'Content-Type':'image/jpeg',
  "Authorization": `Bearer ${token}`
},
body: formData // This is your file object
}) 





//console.log(await upload2.json())
let fotopath=""
if (foto != "sinFoto"){
console.log("Si paso por")
  fotopath= await upload2.json()
fotopath=fotopath.path
} else {
fotopath="sinFoto"

}
const rawResponse  = await fetch('http://localhost:8000/api/anuncios', {
        method: 'POST',
        headers: {
          
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },
        
        body: JSON.stringify({idu:idu,username: username, titulo:titulo,descripcion:descripcion,compra:compra,tags:tags,nombrefoto:fotopath,precio:precio})
      });

      const content = await rawResponse.json();
console.log(content)
/// Subir Foto Si existe
/*if (foto != "sinFoto"){

  const upload = (file) => {
    

    
    console.log("File",file)
    fetch('http://localhost:8000/upload', { // Your POST endpoint
      method: 'POST',
      headers: {
        // Content-Type may need to be completely **omitted**
        // or you may need something
        //'Content-Type':'image/jpeg',
        "Authorization": `Bearer ${token}`
      },
      body: formData // This is your file object
    }).then(
      response => response.json() // if the response is a JSON object
    ).then(
      success => console.log(success.path) // Handle the success response object
    ).catch(
      error => console.log(error) // Handle the error response object
    );
  };
  
  // Event handler executed when a file is selected
  upload(foto);

}*/




let tags2=[]
localStorage.setItem("tags", JSON.stringify(tags2));
window.document.getElementById("cbotones").innerHTML=""
//let username=""
window.document.getElementById("ctitulo").value=""
window.document.getElementById("cdescripcion").value=""
window.document.getElementById("cprecio").value=""
window.document.getElementById('formFile').value=""

window.document.getElementById('ccompra').checked=true
pintarMensaje("Se creó el anuncio con éxito") 


console.log("postanuncio")
}


const postanuncioSF = async (idu,username,titulo,descripcion,compra,tags,token,foto,nombrefoto,precio)=>{
   
  
  const rawResponse  = await fetch('http://localhost:8000/api/anuncios', {
          method: 'POST',
          headers: {
            
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
          },
          
          body: JSON.stringify({idu:idu,username: username, titulo:titulo,descripcion:descripcion,compra:compra,tags:tags,nombrefoto:nombrefoto,precio:precio})
        });
  
        const content = await rawResponse.json();
  console.log(content)
  
  
  
  
  let tags2=[]
  localStorage.setItem("tags", JSON.stringify(tags2));
  window.document.getElementById("cbotones").innerHTML=""
  //let username=""
  window.document.getElementById("ctitulo").value=""
  window.document.getElementById("cdescripcion").value=""
  window.document.getElementById("cprecio").value=""
  window.document.getElementById('formFile').value=""
  
  window.document.getElementById('ccompra').checked=true
  pintarMensaje("Se creó el anuncio con éxito") 
  
  
  console.log("postanuncio")
  }

const traer= async (email,password) => {

    
    const textofetch= "http://localhost:8000/api/users?username=" + email
   
    const getResponse = await fetch(textofetch);
    

  

    const rawResponse = await fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: email, password:password})
    });
    
    const content = await rawResponse.json();
  
    console.log(content);
   
    if (content.accessToken) {
        
        let tempemail=await getResponse.json()
        const usuariotemp = tempemail[0].username
        console.log(usuariotemp)
        const idtemp = tempemail[0].id
        console.log(idtemp)
        const nombretemp = tempemail[0].nombre
        console.log(nombretemp)

        localStorage.setItem("nombre", nombretemp);
        localStorage.setItem("id", idtemp);
        localStorage.setItem("usuario", usuariotemp);
        localStorage.setItem("token", content.accessToken);
        window.location.replace("../index.html")
    } else {
        localStorage.setItem("usuario", "");
        console.log("Hubo un error")
        pintarError(content.message)

}
}




const postear = async (nombre,apellido,email,password) => {
    const rawResponse = await fetch('http://localhost:8000/auth/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({nombre: nombre, username: email, apellido:apellido,password:password})
    });
    const content = await rawResponse.json();
  
    console.log(content);
    
if (content.username) {
    //localStorage.setItem("usuario", content.email);
    document.getElementById("rnombre").value=""
    document.getElementById("rapellido").value=""
    document.getElementById("remail").value=""
    document.getElementById("rpassword").value=""
   let mensaje= "<p><a>Registro exitoso ya puedes hacer </a><a href='./login.html'>Login</a></p>"
    pintarMensaje(mensaje)

   
} else {
    localStorage.setItem("usuario", "");
    console.log("Hubo un error")
    pintarError(content.message)
}

  };