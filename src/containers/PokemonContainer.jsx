import React, { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
import SpecificPokemon from "../components/SpecificPokemon";
import './container.css'

const PokemonContainer = () => {

    const [pokemon, setPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState([])
    

    useEffect(() => {
      getPokemon();
    }, [])
    

    const getPokemon = function(){
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        .then(result => result.json())
        .then(pokemon => setPokemon(pokemon.results))
    }

    const getSpecificPokemon = function (pokemon) {
      fetch(pokemon.url)
      .then(res=> res.json())
      .then(selectedPokemon => setSelectedPokemon(selectedPokemon))
    }

    const nextClick = function () {
      fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
      .then(result => result.json())
      .then(pokemon => setPokemon(pokemon.results))
    }



    return (
        <div>
          <div id="buttons">
            <button id="previous-button">Previous</button>
            <button onClick={nextClick} id="next-button">Next</button>
          </div>
          <PokemonList pokemon={pokemon} getSpecificPokemon={getSpecificPokemon}/>
          <ul>{selectedPokemon ? <SpecificPokemon selectedPokemon={selectedPokemon}/> : null }</ul>
        </div>
    )
}

export default PokemonContainer;