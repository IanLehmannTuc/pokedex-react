import React from "react";
import { searchPokemon } from "../Apis/api";
/*
como sabemos que se tendra que agregar algo a la derecha del buscador se agregaran 2 div

cuando esta renderisando la vista hace optimizaciones, es decir, que cuando ocurre un cambio en el DOm,
react no actualizara la vista, hay que ser explicito para que lo haga

esta es la base de como podemos actualizar nuestra vista de react 
cuando estamos utilizando variables que necesitamos cambiar
*/

const {useState} = React //esta variable cada vez que cambie se hara un cambio de estado y se hace que debe renderizar
const Searchbar = () => {

    const [search, setSearch] = useState('')
    const [pokemon, setPokemon] = useState('')
    /*cuando se llama useState nos regresa un array y el index 0 es la variable que estaremos 
    actualizando y el index 1 es una funcion que usamos para cambiar la variable
    */

    const onChange = (evt) =>{
        setSearch( evt.target.value)
    }

    const onClick = async (e) =>{
        const data = await searchPokemon(search)
        setPokemon(data)
        console.log(search)
    }
    
    return(
    <div className="searchbar-container">
        <div className="searchbar">
            <input
            placeholder="Buscar pokemon. . ."
            onChange={onChange}
            />
        </div>
        <div className="searchbar-btn">
            <button onClick={onClick}>
                Buscar
            </button>
        </div>
        <div>
            {pokemon &&
            <div>
                <div>Nombre: {pokemon.name}</div>
                <div>Peso: {pokemon.weight}</div>
                <img src = {pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default} alt = "Sprite"/>
            </div>
            }        
        </div>
    </div>
    )
};
export default Searchbar;