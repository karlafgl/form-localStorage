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
    // console.log("form enviada")

    //leer el valor del textarea
    const textTweet = document.getElementById("tweet").value
    // console.log(textTweet)

    //crear elemento y anadir el elemento a la lista 
    const li = document.createElement('li')
    //crear boton borrar 
    const botonBorrar = document.createElement('a')
    //agrega el input en el li
    li.textContent = textTweet
    //agrega la clase a la X 
    botonBorrar.classList = 'borrar-tweet'
    botonBorrar.innerText = 'X'
    listaTweets.appendChild(li)
    li.appendChild(botonBorrar)
}
