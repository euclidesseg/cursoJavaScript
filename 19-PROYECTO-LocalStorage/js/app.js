document.addEventListener("DOMContentLoaded", () => {

    console.log(bowser.name);
    // variables
    const inputTweet = document.querySelector("#tweet")
    const formulario = document.querySelector("#formulario");
    const listaTweets = document.querySelector("#lista-tweets");
    let tweets = [];

    let tweetObject = {
        id: "",
        text: ""
    };

    // eventos
    formulario.addEventListener("submit", enviarTweet);
    listaTweets.addEventListener("click", eliminarTweet);


    // localStorage
    if (JSON.parse(localStorage.getItem("tweets"))) {
        tweets = JSON.parse(localStorage.getItem("tweets"))
        mostrarTweets(tweets);
    }

    // funciones
    
    function enviarTweet(event) {
        event.preventDefault();

        const tweet = document.querySelector("#tweet").value;
        if (tweet < 5 || tweet === ""){
            mostrarAlerta(true, formulario);
            return;
        }

        tweetObject = {
            id : Date.now(),
            text : tweet
        }

        tweets.push(tweetObject);
        console.log(tweetObject);
        console.table(tweets);
        mostrarTweets(tweets)

        agregarLocalStorage(tweets);

        mostrarAlerta(false, formulario);
        setTimeout(() => {
           borrarAlerta(formulario); 
        }, 3000);
    }








    //funcion que muestra alerta
    function mostrarAlerta(value, parentElement) {
        borrarAlerta(parentElement);
        const alerta = document.createElement("DIV");
        if (value == true) {
            if (alerta) alerta.remove;
            alerta.classList.add("error")
            alerta.textContent = `No se ha validado el tweet, asegurate que no este vacío y que sea mayor a 15 caracteres`;
        } else if (value == false) {
            alerta.classList.add("success")
            alerta.textContent = `tweet enviado`;
        }
        parentElement.appendChild(alerta);
    }


    function borrarAlerta(parentElement) {
        const alertaError = parentElement.querySelector(".error")
        if (alertaError) alertaError.remove()
        const alertaExito = parentElement.querySelector(".success");
        if (alertaExito) alertaExito.remove()
    }





    function mostrarTweets(tweets) {
        if(listaTweets.firstChild){
            limpiarHtml();
        }
        tweets.forEach((tweet) => {
            const div = document.createElement("DIV");
            div.classList.add("tweet");
            div.innerHTML = `
            <p class = "pTweet">"${tweet.text}"</p>
            <buttton class="borrar-tweet button" data-id="${tweet.id}">x</buttton>
            `;
            listaTweets.appendChild(div);
        })
    }



    function eliminarTweet(event){
        if(event.target.classList.contains("borrar-tweet")){
            console.log("eliminando tweet");
            id = event.target.getAttribute("data-id");
            tweets = tweets.filter((tweet) => tweet.id != id)
            agregarLocalStorage(tweets)
            mostrarTweets(tweets);
        }
    }

    function agregarLocalStorage(tweets){
        if(!tweets.length){
            localStorage.clear();
            return
        }
        localStorage.setItem("tweets", JSON.stringify(tweets))
    }

    const limpiarHtml = () => {
        while (listaTweets.firstChild) {
            listaTweets.removeChild(listaTweets.firstChild)
        }
    }

})