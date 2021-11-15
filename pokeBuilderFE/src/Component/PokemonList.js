import "./PokemonList.css";
import Pokemon from "./Pokemon";

const PokemonList = ({viewingPokemon, setCurrentPokemon, currentTeam, setCurrentTeam}) => {

    const pokeList = viewingPokemon.map(pokemon => {
        return <Pokemon key={pokemon.id} pokemon={pokemon} setCurrentPokemon={setCurrentPokemon}
                        currentTeam={currentTeam} setCurrentTeam={setCurrentTeam}/>;
    });

    return (
        <div id={"PokemonList"}>
            {pokeList}
        </div>
    )
}


export default PokemonList;