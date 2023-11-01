document.addEventListener("DOMContentLoaded", () => {
    // if(JSON.parse(localStorage.getItem("tweets"))){
    //     console.log("si hay")
    //     mostrarTweets(JSON.parse(localStorage.getItem("tweets")));
    // }

    var getBrowserInfo = function () {
        var ua = navigator.userAgent,
            tem,
            M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE ' + (tem[1] || '');
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
        return M.join(' ');
    };



    console.log(getBrowserInfo()); // mostrarTweets();
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
    inputTweet.addEventListener("blur", validar);
    formulario.addEventListener("submit", enviarTweet);
    listaTweets.addEventListener("click", eliminarTweet);


    // localStorage
    if (JSON.parse(localStorage.getItem("tweets"))) {
        tweets = JSON.parse(localStorage.getItem("tweets"))
        mostrarTweets(tweets);
    }

    // funciones
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
            console.log(div)
            listaTweets.appendChild(div);
        })
    }

    function validar(event) {
        tweetObject.text = event.target.value;
        tweetObject.id = Date.now();
        const parentElement = event.target.parentElement
        if (validarTweet(tweetObject.text)) {
            mostrarAlerta(validarTweet(event.target.value), parentElement)
            return;
        }
        borrarAlerta(parentElement);
    }

    // esta funcion es usada por la funcion que activa el evento blur y por el boton de enviar
    function validarTweet(tweet) {
        return tweet.length < 1 || tweet === ""
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

    //funcion elimina la alerta cuando ya existe o cuando pasa la validacion
    // se debe llamar antes de mostrar un a alerta en caso de que ya exista una
    function borrarAlerta(parentElement) {
        const alertaError = parentElement.querySelector(".error")
        if (alertaError) alertaError.remove()
        const alertaExito = parentElement.querySelector(".success");
        if (alertaExito) alertaExito.remove()
    }




    function enviarTweet(e) {
        e.preventDefault();
        if (validarTweet(tweetObject.text)) {
            mostrarAlerta(validarTweet(tweetObject.text), formulario)
            return
        }

        tweets = [...tweets, tweetObject]
        localStorage.setItem("tweets", JSON.stringify(tweets))
        console.table(tweets);
        // limpiarHtml();
        mostrarTweets(tweets);
        mostrarAlerta(validarTweet(tweetObject.text), formulario);
        setTimeout(() => {
            borrarAlerta(formulario)
        }, 3000);
    }

    function eliminarTweet(event){
        if(event.target.classList.contains("borrar-tweet")){
            console.log("eliminando tweet");
            id = event.target.getAttribute("data-id");
            tweets = JSON.parse(localStorage.getItem("tweets"))
            tweets = tweets.filter((tweet) => tweet.id != id)
            localStorage.setItem("tweets", JSON.stringify(tweets))
            mostrarTweets(tweets);
        }
    }
    const limpiarHtml = () => {
        while (listaTweets.firstChild) {
            listaTweets.removeChild(listaTweets.firstChild)
        }
    }

})