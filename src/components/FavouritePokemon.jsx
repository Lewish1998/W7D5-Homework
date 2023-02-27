const FavouritePokemon = ({pokemon, onPokemonSelected}) => {
  
    const favouritePokemon = pokemon.filter(favPokemon => favPokemon.isFavourite)


    return (
        <div>
            <h3>Favourites</h3>
            <ul>
                {pokemon.map (favPokemon => {
                    return (
                        <li>
                            <button onClick={() => onPokemonSelected(pokemon.name)}>{pokemon.name}</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FavouritePokemon