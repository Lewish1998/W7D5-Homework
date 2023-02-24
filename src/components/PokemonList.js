import React from "react";
import PokemonItem from "./PokemonItem";


// Song item is imported and the accessed in the return part of the songs list
const PokemonList = ({pokemon}) => {
  const PokemonItems = pokemon.map((pokemonObject, index) => {
    return <PokemonItem pokemonObject={pokemonObject} key={index}/>
  });

  return(
    <div id='song-list'>
        <ol id='ordered-song-list'>
            {PokemonItems}
        </ol>
    </div>
  )
}

export default PokemonList