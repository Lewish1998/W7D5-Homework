import './App.css';
import PokemonContainer from './containers/PokemonContainer';

function App() {
  return (
    <div>
      <div id='bg'>
        <img src={require('./background.png')} width=''></img>
      </div>
      <div id='logo'>
      <img src={require('./pokemonLogo.png')} width='500px' alt='Heading Logo'></img>
      </div>
      <hr id='red'></hr>
      <hr id='yellow'></hr>
      <hr id='white'></hr>
      <PokemonContainer/>
    </div>
  );
}

export default App;
