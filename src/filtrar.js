



export const filtrar2 = async (valor) => {
   
    const textofetch= "http://localhost:8000/api/anuncios?titulo_like="+valor
   
    const getResponse = await fetch(textofetch);

    const data = await getResponse.json()

    const textofetch2= "http://localhost:8000/api/anuncios?descripcion_like="+valor
   
    const getResponse2 = await fetch(textofetch2);

    const data2 = await getResponse2.json()

   
    const textofetch1= "http://localhost:8000/api/anuncios?compra_like="+valor
   
    const getResponse1 = await fetch(textofetch1);

    const data1 = await getResponse1.json()



   
   
    const data33 = data.concat(data2);

    const data3 = data33.concat(data1)

   var result = [];

   for (var i = 0; i < data3.length; i++) {
     var found = false;
     for (var j = 0; j < result.length; j++) {
       if (result[j].id == data3[i].id) {
         found = true;
         console.log(data3[i])
         result[j] = data3[i];
         break;
       }
     }
     if (!found) {
       result.push(data3[i]);
     }
   }

/*
const data3= Object.values(data.concat(data2).reduce((r,o) => {
    r[o.studentId] = o;
    return r;
  },{}));
  
  */

    return result
    

}


