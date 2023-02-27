import './pokemonItems.css'

const PokemonItem = ({pokemonObject, getSpecificPokemon}) => { 

    const handleClick = () => {
        console.log({pokemonObject})
        getSpecificPokemon(pokemonObject)
    }



    return(
    <div id='item'>
    <li>Name: {pokemonObject.name}</li>
        <button id='button' onClick={handleClick}>More Info</button>
        <br></br>
    </div>
    )
};

export default PokemonItem;