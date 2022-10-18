export const searchPokemon = async (pokemon) =>{
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url); //nos permite que desde el navegador obtener informacion de la URL
        /*
        estamos yendo a la URL y estamos remplazando $[] y una ves que hagamos el fetch nos regresara un response
        */
        const data = await response.json(); //nos regresara el cuerpo del response como data
        return data;
    }
    catch(err){

    }
}

export const getPokemons = async (limit = 151, offset = 0) => {
    try{
        
        let url =  ` https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch(err){

    }
}

export const getPokemonData = async (url) => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch(err){

    }
}

export const getPokemonJohto = async () => {
    try{
        let url = `https://pokeapi.co/api/v2/pokedex/3`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch(err){

    }
}