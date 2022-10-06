



export const filtrar2 = async (valor) => {
   
    const textofetch= "http://localhost:8000/api/anuncios?titulo_like="+valor
   
    const getResponse = await fetch(textofetch);

    const data = await getResponse.json()

    return data
    

}


