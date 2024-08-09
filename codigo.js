// Función para buscar el Pokémon
async function buscarPokemon() {
    let nombrePokemon = document.querySelector('#pokemonInput1').value.trim().toLowerCase();
    let urlApi = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

    try {
        let response = await fetch(urlApi);
        

        let datosPokemon = await response.json();
        mostrarNombreYImagen(datosPokemon);
        mostrarInformacion(datosPokemon);
    } catch (error) {
        mostrarError();
    }
}

// Función para mostrar el nombre y la imagen del Pokémon en la primera tarjeta
function mostrarNombreYImagen(datosPokemon) {
    let nombreYImagen = document.querySelector('#pokemonNYM');

    //let nombre = datosPokemon.name ? datosPokemon.name.toUpperCase() : 'Desconocido';
    //let imgSrc = datosPokemon.sprites?.other?.['official-artwork']?.front_default || 'default_image.png'; 
    //let imgSrc = datosPokemon.sprites.other['official-artwork'].front_default; 
    nombreYImagen.innerHTML = `
        <h2 class="pk-name">${datosPokemon.name.toUpperCase()}</h2>
        <img class="pk-img" src="${datosPokemon.sprites.other['official-artwork'].front_default}">
    `;
}

// Función para mostrar la información detallada del Pokémon en la segunda tarjeta
function mostrarInformacion(datosPokemon) {
    let infoDivId = 'pokemonInfo';
    let infoDiv = document.getElementById(infoDivId);

   
    //let nombre = datosPokemon.name ? datosPokemon.name.toUpperCase() : 'Desconocido';
    //let id = datosPokemon.id || 'Desconocido';
    //let peso = datosPokemon.weight ? (datosPokemon.weight / 10) + 'kg' : 'Desconocido';
   // let altura = datosPokemon.height ? (datosPokemon.height / 10) + 'm' : 'Desconocido';
    //let tipo = datosPokemon.types?.[0]?.type?.name || 'Desconocido';

    infoDiv.innerHTML = `
        <h1 class='info'>INFORMACIÓN DE ${datosPokemon.name.toUpperCase()}</h1>
        <p class="p">Número: ${datosPokemon.id}</p>
        <p class="p">Peso: ${datosPokemon.weight/10}kg</p>
        <p class="p">Altura: ${datosPokemon.height/10}m</p>
        <p class="p">Tipo: ${datosPokemon.types["0"]["type"].name}</p>
        <p class='p'>Habilidad: ${datosPokemon.abilities["0"]["ability"].name}
    `;
}

// Función para mostrar el error
function mostrarError() {
    let nombreYImagen = document.querySelector('#pokemonNYM');
    let infoDiv = document.querySelector('#pokemonInfo');
    
    nombreYImagen.innerHTML = `
        <p class="pk-ms">Pokémon No Encontrado <br> </p>
    `;
    
    infoDiv.innerHTML = ''; // Limpiar la información 
}


const btn=document.querySelector('#searchButton1'); 
btn.addEventListener('click',()=>{
    buscarPokemon()
})
