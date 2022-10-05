

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  
    
    console.log("LSnombre")
    const LSnombre= localStorage.getItem("nombre")
   
    let logueado =1
    try {
      
    if(LSnombre){
            logueado =1
            const texto=`Wallapop  Usuario  (${LSnombre})`
            window.document.getElementById("nombre").innerHTML=texto
            window.document.getElementById("navbarsalir").style.display = "block"
            window.document.getElementById("navbarlogin").style.display = "none"
            window.document.getElementById("navbarcrear").style.display = "block"
        
        }else{
            logueado=0
            window.document.getElementById("nombre").innerHTML="Wallapop"
            window.document.getElementById("navbarsalir").style.display = "none"
            window.document.getElementById("navbarlogin").style.display = "block"
            window.document.getElementById("navbarcrear").style.display = "none"
        }
    
        
    } catch (error) {
        
    }
    
});
        
        
    
   