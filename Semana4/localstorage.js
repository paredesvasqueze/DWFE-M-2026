const botonbuscar = document.getElementById("mostrar");
const pokemon = document.getElementById("pokemon");
const nombre = document.getElementById("nombre");
const experiencia = document.getElementById("experiencia");
const imagen = document.getElementById("imagenpokemon");

 async function buscarpokemon()
 {
        let response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.value}`);
        let data = await response.json()
         console.log(data);
        
        nombre.value = data.name;
        experiencia.value = data.base_experience;
        imagen.src = data.sprites.front_default;

}

