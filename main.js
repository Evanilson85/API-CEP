const cep = document.querySelector("#cep")

const showData = resultado =>{

    for(const campo in resultado){
        if(document.querySelector("#"+campo)){

            document.querySelector("#"+campo).value = resultado[campo]
            
        }
    }

}

cep.addEventListener("blur", e => {

    let pesquisa = cep.value.replace("-", "")

    const opctions = {

        method: "GET",
        mode: "cors",
        cache: "default"

    }

    fetch(`https://viacep.com.br/ws/${pesquisa}/json/`, opctions)
        .then( response => {
            response.json()
            .then(data => showData(data))
        })
        .catch( (error)=>{
            console.log(error)
        })

})