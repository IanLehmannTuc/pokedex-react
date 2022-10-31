import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
/*
aqui se creara un componente que no tiene estado, es un componente que solo mostrara informacion, no tiene formulario
no necesita continuar una accion, etc. Toda la info proviene de los props
*/

const Pokemon = (props) => {
    const {pokemon} = props;
    return(
        <div className ="pokemon-card ">
            <div className = "pokemon-img-container">
                <img 
                src = {pokemon.sprites.versions["generation-v"]["black-white"].front_default} 
                alt = {pokemon.name}
                />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>
                        #{pokemon.id}
                    </div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, idx) => {
                            return(
                                <div key={idx} className="pokemon-type-text">{type.type.name}</div>
                            )
                        })}
                    </div>
                    <div className="pokemon-favorite">❤️</div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;