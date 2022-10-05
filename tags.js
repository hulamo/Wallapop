window.agregarTags = (tag) => {
    if(tag.length>0){
    var tags = JSON.parse(localStorage.getItem("tags"))
    console.log("Agregar Tag")
    console.log(tag)
    window.document.getElementById("ctags").value=""
    if (! tags.includes(tag)){
    tags.push(tag)
    localStorage.setItem("tags", JSON.stringify(tags));
    pintarTags(tags)
}
    }}

window.removerTag = (tag) => {
    var tags = JSON.parse(localStorage.getItem("tags"))
var temptags=[]
    for (const element of tags) {
       if (element != tag) {
temptags.push(element)

       }
    }
    localStorage.setItem("tags", JSON.stringify(temptags));
    pintarTags(temptags)

}

window.onload=(function(){

let tags=[]
localStorage.setItem("tags", JSON.stringify(tags));


pintarTags(tags)
        
    })

function pintarTags(tags) {

    console.log("Paso por otra")
        let i=0
        let valor=""
        let textoboton="No hay tags"
        while (i<tags.length){
        if(i===0){textoboton=""}
            valor=tags[i]
        textoboton=textoboton+"&nbsp"+"<button id="+valor+ " onclick=removerTag('"+valor+"') class='btn btn-primary' type='submit'>"+valor+" X</button>"
        
    i++}
    window.document.getElementById("cbotones").innerHTML=textoboton
}