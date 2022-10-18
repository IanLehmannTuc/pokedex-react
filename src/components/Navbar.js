import React from "react";

const Navbar = () => {
    let imgURL = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" /* nos permite usar variables de JS que no son constantes para poder crear diferentes funciones*/

    return (
        <nav>
            <div/>
            <div>
            <img
            src = {imgURL}
            alt="pokeapi-logo"
            className="navnar-image"
            /> 
            </div>
            <div>
            ❤️
            </div>
            <div/>
        </nav>
    );
};

export default Navbar;