//Variables
const listaTweets = document.getElementById("lista-tweets")


//Event Listeners

eventListeners()

function eventListeners(){
    //Cuando se envia el formulario 
    document.querySelector('#formulario').addEventListener('submit', agregarTweet)
}

//Funciones


//Agregar tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    console.log("form enviada")
}


