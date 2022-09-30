// API
const API_ENDPOINT = 'https://yesno.wtf/api';
let btnAnswer = document.getElementById("button");
let pregunta = document.getElementById("input");
let answer = document.getElementById("answer");

btnAnswer.addEventListener("click", function(e){

    if(pregunta.value.length > 0 && pregunta.value != ""){
        
        getData();

        setTimeout(() => {pregunta.value = "", answer.innerHTML = ""

            }, 5000);
    }
 
}); 



const getData = () => {
    let promesa = fetch(API_ENDPOINT, {
        method : "GET"
    });
    promesa.then((response) => {
        response.json().then ((data) => {
            console.log(data);
        answer.innerHTML = data.answer; 

        }).catch((error) => {
            console.error("Problema con la respuesta "+ error);
        });
    }).catch((error) => {
        console.log("Error en la solicitud: " + error);
    });
}//get data


