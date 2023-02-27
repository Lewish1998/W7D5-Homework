import React from "react";
import InfoDropdown from "./InfoDropDown";
import PokemonItem from "./PokemonItem";
import SpecificPokemon from "./SpecificPokemon";

const PokemonList = ({pokemon, getSpecificPokemon, selectedPokemon}) => {
  const PokemonItems = pokemon.map((pokemonObject, index) => {
    return <PokemonItem getSpecificPokemon={getSpecificPokemon} pokemonObject={pokemonObject} key={index}/>
  });

  return(
    <div>
        <ol id="list">
            {PokemonItems}
        </ol>
    </div>
  )
}

export default PokemonList