document.addEventListener("DOMContentLoaded", () => {



    var getBrowserInfo = function() {
        var ua= navigator.userAgent, tem, 
        M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1])){
            tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE '+(tem[1] || '');
        }
        if(M[1]=== 'Chrome'){
            tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
            if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
        return M.join(' ');
    };

    
    
    console.log(getBrowserInfo());    // mostrarTweets();
    console.log(bowser.name);
    // variables
    const inputTweet = document.querySelector("#tweet")
    const formulario = document.querySelector("#formulario");
    const listaTweets = document.querySelector("#lista-tweets");

    let tweets = [];
    let tweet = "";

    // eventos
    inputTweet.addEventListener("blur", validar);
    formulario.addEventListener("submit", enviarTweet);



    // localStorage

    
    // funciones
    function mostrarTweets(){
        // tweets = JSON.parse(localStorage.getItem("tweets"));
        tweets.forEach((tweet) =>{
            const divTweet = document.createElement("DIV");
            divTweet.classList.add("tweet")
            const pTweet = document.createElement("P") ;
            pTweet.textContent = `${tweet}`;
            pTweet.classList.add("pTweet")
            const btnEliminar = document.createElement("BUTTON");
            btnEliminar.classList.add("borrar-tweet", "button");
            btnEliminar.textContent = "x"
            divTweet.appendChild(pTweet);
            divTweet.appendChild(btnEliminar);

            listaTweets.appendChild(divTweet);

        })
    }
    function validar(event) {
        tweet = event.target.value;
        const parentElement = event.target.parentElement
        if (validarTweet(tweet)) {
            mostrarAlerta(validarTweet(tweet), parentElement)
            return;
        }
        borrarAlerta(parentElement);
    }

    // esta funcion es usada por la funcion que activa el evento blur y por el boton de enviar
    function validarTweet(tweet) {
        return tweet.length < 20 || tweet === ""
    }

    //funcion que muestra alerta
    function mostrarAlerta(value, parentElement) {
        borrarAlerta(parentElement);

        if (value == true) {
            const alerta = document.createElement("DIV");
            if (alerta) alerta.remove;
            alerta.classList.add("error")
            alerta.textContent = `No sea ha validado el tweet, asegurate que no este vacío y que sea mayor a 15 caracteres`;
            parentElement.appendChild(alerta);
        } else {}
    }

    //funcion elimina la alerta cuando ya existe o cuando pasa la validacion
    // se debe llamar antes de mostrar un a alerta en caso de que ya exista una
    function borrarAlerta(parentElement) {
        const alerta = parentElement.querySelector(".error")
        if (alerta) alerta.remove()
    }




    function enviarTweet(e) {
        e.preventDefault();
        if(validarTweet(tweet)){
            mostrarAlerta(validarTweet(tweet), formulario)
            return 
        }

        tweets.push(tweet);
        localStorage.setItem("tweets", JSON.stringify(tweets))
        console.table(tweets);
        mostrarTweets();
    }
})