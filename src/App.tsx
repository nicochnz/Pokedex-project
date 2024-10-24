import "./app.css";

import PokemonCard from "./components/PokemonCard";
import "./app.css";

function App() {
	return (
		<div>
			{}
			<PokemonCard pokemon={pokemonList[1]} />
		</div>
	);
}

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "mew",

		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
	},
];

export default App;
