
import { pintarError, pintarMensaje } from "./mensajes.js";

const LSnombre= localStorage.getItem("nombre")



console.log("LsNombre",LSnombre)
if (!LSnombre && ! window.location.href.includes("login") && ! window.location.href.includes("register"))
{
    window.location.replace("./login.html")
}

let logueado =1 
console.log("Paso por aqui")
//console.log(window.document.getElementById("nombre").innerHTML)





window.logout = () => {

    localStorage.clear()
    window.location.replace("./login.html")
}

const consola =  () => {
    email = document.getElementById("lemail").value
    password = document.getElementById("lpassword").value
   
    localStorage.setItem("usuario", email);
    console.log(email)


//location.replace("/index.html")
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

window.registrar = () => {
    let token=localStorage.getItem("token")
    let username=localStorage.getItem("usuario")
    let tags=localStorage.getItem("tags")
    let id=localStorage.getItem("id")
    //let username=""
    let titulo=window.document.getElementById("ctitulo").value
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
    postanuncio(id,username,titulo,descripcion,compra,tags,token)

}

const postanuncio = async (idu,username,titulo,descripcion,compra,tags,token)=>{
   
console.log("Entro Aquí")
    const rawResponse  = await fetch('http://localhost:8000/api/anuncios', {
        method: 'POST',
        headers: {
          
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({idu:idu,username: username, titulo:titulo,descripcion:descripcion,compra:compra,tags:tags})
      });

      const content = await rawResponse.json();
console.log(content)
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
        window.location.replace("./index.html")
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
   let mensaje= "<p><a>Registro exitoso ya puedes hacer</a><a href='./login.html'>Login</a></p>"
    pintarMensaje(mensaje)
    //window.location.replace("./index.html")
   
} else {
    localStorage.setItem("usuario", "");
    console.log("Hubo un error")
    pintarError(content.message)
}

  };