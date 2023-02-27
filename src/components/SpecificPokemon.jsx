import './specificPokemon.css'

const SpecificPokemon = ({selectedPokemon}) => {
    
    return(
        <div id='box'>
        <div id='specific-pokemon'>
            <h4>Pokemon Information:</h4>
            

            <li>Weight: {selectedPokemon['weight']} lbs</li>
        </div>
        </div>
    )
}

export default SpecificPokemon