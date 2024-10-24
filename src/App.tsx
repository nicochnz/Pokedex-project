import { useState } from "react";
import "./app.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		name: "mew",
	},
];

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);

	const prevClick = () => {
		setPokemonIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
	};

	const nextClick = () => {
		setPokemonIndex((prevIndex) =>
			prevIndex < pokemonList.length - 1 ? prevIndex + 1 : prevIndex,
		);
	};

	return (
		<>
			<PokemonCard
				name={pokemonList[pokemonIndex].name}
				imgSrc={pokemonList[pokemonIndex].imgSrc}
			/>
			<button type="button" onClick={prevClick}>
				Précédent
			</button>
			<button type="button" onClick={nextClick}>
				Suivant
			</button>
		</>
	);
}

export default App;
