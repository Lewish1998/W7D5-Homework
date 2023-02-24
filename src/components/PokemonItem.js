
const PokemonItem = ({pokemonObject}) => { 

    return(<div>
    <li>Name: {pokemonObject.name}</li>
    <li><a href={pokemonObject.url}>Url for more detail</a></li>
    <br></br>
    </div>
    )
};

export default PokemonItem;