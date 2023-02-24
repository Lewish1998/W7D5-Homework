import React, { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";

const PokemonContainer = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
      getPokemon();
    }, [])

    const getPokemon = function(){
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(result => result.json())
        .then(pokemon => setPokemon(pokemon.results))
    }


    return (
        <div id='song-container'>
            <PokemonList pokemon={pokemon}/>
        </div>
    )
}

export default PokemonContainer;