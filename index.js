//* Iteración #1: Fetch

console.log("");
console.log("- - - - - ITERATION # 1 - - - - -");

// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.


function getMichael() {   
    fetch('https://api.agify.io?name=michael')      //* pedimos la información
        .then(function (response) { 
            console.log("recibo la información")    //* recibimos el paquete
            return response.json();
        })
        .then(function (result) {                   //* ya tenemos el resultado
            // renderMichael(result);
            console.log("abro la información");
            console.log(result);
        })
        .catch(function (error) {
            console.log("ERROR EN LA RECEPCIÓN DE DATOS");
            console.log(error);
        });
};

function init(){
    getMichael();
};


// 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.

const baseUrl = 'https://api.nationalize.io/?name=';

// mostramos datos por pantalla en el HTML creando la estructura
function renderBase(base){

    //creamos el container para imprimirlo en el HTML
    const container = document.createElement("div");
    document.body.appendChild(container);

    // creamos una línea en el HTML para mostrar la estadística
    for (let i = 0; i < base.country.length; i++){

        const p = document.createElement("p");
        p.textContent = "El nombre -" + base.name + "- tiene un: " + (base.country[i].probability*100) + "% de ser " + base.country[i].country_id;
        container.appendChild(p);

        // creamos el botón para borrar línea, lo introducimos en el HTML y le damos un eventListener
        const button = document.createElement("button");
        button.setAttribute("style", "background-color: red; margin-left: 10px; cursor: pointer;");
        button.textContent = "X";
        p.appendChild(button);
        button.addEventListener("click", removeLine);
    };

    // creo un separador para cada consulta
    const separator = document.createElement("span");
    separator.textContent = "- - - - - - - - - - End Of " + base.name + " - - - - - - - - - -";
    container.appendChild(separator);
};

function getInput(event){
    const inputText = document.querySelector("input").value;
    // console.log(inputText);
    const fullUrl = baseUrl + inputText;
    // console.log(fullUrl);
    return fullUrl;
};

function getBase() {   
    fetch(getInput())      //* pedimos la información
        .then(function (response) { 
            console.log("recibo la información")    //* recibimos el paquete
            return response.json();
        })
        .then(function (result) {                   //* ya tenemos el resultado
            console.log("abro la información");
            // console.log(result);
            renderBase(result);
        })
        .catch(function (error) {
            console.log("ERROR EN LA RECEPCIÓN DE DATOS");
            console.log(error);
        });
};

document.querySelector("button").addEventListener("click",getBase);

// 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
// de MZ.

    //? Hecho en el código del 1.2 

// 1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
// de los p que hayas insertado y que si el usuario hace click en este botón 
// eliminemos el parrafo asociado.

    //? creamos el botón y el eventListener en el código del ejercicio 1.2
    //? creamos la función para remover la línea deseada
    function removeLine (event) {
        event.path[1].remove();
    };



//* Iteración #2: async-await

console.log("");
console.log("- - - - - ITERATION # 2 - - - - -");

// 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando 
// async-await.
// const runTimeOut = () => {
//     const promise = new Promise((resolve) => {
//         setTimeout(function () {
//             resolve();
//         }, 2000);
//     })

//     promise.then(() => {console.log('Time out!')})
// };

// runTimeOut();

// 2.2 Convierte la siguiente función con un fetch utilizando async-await. 
// Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;
// function getCharacters () {
//     fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
// }

// getCharacters();













window.onload = init;