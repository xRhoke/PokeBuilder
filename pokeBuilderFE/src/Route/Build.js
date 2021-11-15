import FilterBar from "../Component/FilterBar";
import TeamBuilder from "../Component/TeamBuilder";
import PokemonList from "../Component/PokemonList";
import PokeDetails from "../Component/PokeDetails";
import {starterData} from "../data/scripts/starterData";
import {throttle} from "lodash";
import {useEffect, useState} from "react";

const Build = () => {

    const [pokemonData, setPokemonData] = useState(starterData);
    const [currentPokemon, setCurrentPokemon] = useState({});
    const [currentTeam, setCurrentTeam] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [viewingPokemon, setViewingPokemon] = useState(pokemonData.slice(0, 50));

    useEffect(() => {
        document.getElementById("PokemonList").addEventListener("scroll", throttle(() => {
            const scrollList = document.getElementById("PokemonList");
            if (scrollList.scrollTop + scrollList.clientHeight >= scrollList.scrollHeight) {
                setPageNumber(pageNumber => pageNumber + 1);
            }
        }, 500));
    }, []);

    useEffect(() => {
        setViewingPokemon(pokemonData.slice(0, pageNumber * 50));
        console.log("Page number: " + pageNumber);
    }, [pageNumber, pokemonData]);

    return (
        <div className="App">
            <div className={"content"}>
                <FilterBar pokemonData={pokemonData} setPokemonData={setPokemonData}
                           setPageNumber={setPageNumber}/>
                <TeamBuilder currentTeam={currentTeam} setCurrentTeam={setCurrentTeam}/>
                <PokemonList viewingPokemon={viewingPokemon} setPokemonData={setPokemonData}
                             setCurrentPokemon={setCurrentPokemon} currentTeam={currentTeam}
                             setCurrentTeam={setCurrentTeam}/>
                {currentPokemon.name &&
                <PokeDetails currentPokemon={currentPokemon}
                             setCurrentPokemon={pokemon => setCurrentPokemon(pokemon)}/>
                }
            </div>
        </div>
    );
};

export default Build;