import "./FilterBar.css"
import {useEffect, useState} from "react";
import {MdOutlineFilterList} from "react-icons/md";
import {starterData} from "../data/scripts/starterData";

const FilterBar = ({pokemonData, setPokemonData, setPageNumber}) => {

    const [filterString, setFilterString] = useState("");
    const [selectedGeneration, setSelectedGeneration] = useState("all");
    const [selectedType, setSelectedType] = useState("all");

    useEffect(() => {
        setPageNumber(1);
        setPokemonData(pokemonData.filter(pokemon => pokemon.name.includes(filterString.toLowerCase())));
    }, [filterString]);

    useEffect(() => {
        setPageNumber(1);
        if (selectedGeneration === "all") {
            setPokemonData(starterData);
        }
        if (selectedGeneration === "I") {
            setPokemonData(pokemonData.filter(pokemon => (pokemon.id >= 1 && pokemon.id <= 151)));
        }
        if (selectedGeneration === "II") {
            setPokemonData(pokemonData.filter(pokemon => (pokemon.id >= 152 && pokemon.id <= 251)));
        }
        if (selectedGeneration === "III") {
            setPokemonData(pokemonData.filter(pokemon => (pokemon.id >= 252 && pokemon.id <= 386)));
        }
        if (selectedGeneration === "IV") {
            setPokemonData(pokemonData.filter(pokemon => (pokemon.id >= 387 && pokemon.id <= 493)));
        }
        if (selectedGeneration === "V") {
            setPokemonData(pokemonData.filter(pokemon => (pokemon.id >= 494 && pokemon.id <= 649)));
        }
        if (selectedGeneration === "VI") {
            setPokemonData(pokemonData.filter(pokemon => (pokemon.id >= 650 && pokemon.id <= 721)));
        }
        if (selectedGeneration === "VII") {
            setPokemonData(pokemonData.filter(pokemon => (pokemon.id >= 722 && pokemon.id <= 809)));
        }
        if (selectedGeneration === "VIII") {
            setPokemonData(pokemonData.filter(pokemon => (pokemon.id >= 810 && pokemon.id <= 898)));
        }
    }, [selectedGeneration]);

    const handleFilterChange = event => {
        document.getElementById("PokemonList").scrollTop = 0;
        setFilterString(event.target.value);
    }

    const handleResetFilter = () => {
        setPageNumber(1);
        setPokemonData(starterData);
        document.getElementById("PokemonList").scrollTop = 0;
        setFilterString("");
        setSelectedGeneration("all");
        setSelectedType("all");
    }

    const handleSelectGenerationChanged = event => {
        setPageNumber(1);
        document.getElementById("PokemonList").scrollTop = 0;

        setSelectedGeneration(event.target.value);
    }

    const handleTypeValueChanged = event => {
        setPageNumber(1);
        document.getElementById("PokemonList").scrollTop = 0;
        setSelectedType(event.target.value);
        if (event.target.value === "all") {
            setPokemonData(pokemonData);
        } else {
            setPokemonData(pokemonData.filter(pokemon => pokemon.types.map(typeSlot => typeSlot.type.name).includes(event.target.value)));
        }

    }

    return (
        <div className={"FilterBar"}>
            <div className={"filterTitle"}>
                <MdOutlineFilterList className={"filterIcon"}/>
                <div>
                    Filters
                </div>
            </div>
            <div className={"filterRow"}>
                Name:
                <input
                    className={"filterInput"}
                    type={"text"}
                    value={filterString}
                    onChange={event => handleFilterChange(event)}
                />
            </div>
            <div className={"filterRow"}>
                Generation:
                <select className={"filterInput"} value={selectedGeneration}
                        onChange={event => handleSelectGenerationChanged(event)}>
                    <option>all</option>
                    <option>I</option>
                    <option>II</option>
                    <option>III</option>
                    <option>IV</option>
                    <option>V</option>
                    <option>VI</option>
                    <option>VII</option>
                    <option>VIII</option>
                </select>
            </div>
            <div className={"filterRow"}>
                Type:
                <select className={"filterInput"} value={selectedType}
                        onChange={event => handleTypeValueChanged(event)}>
                    <option>all</option>
                    <option>bug</option>
                    <option>dark</option>
                    <option>dragon</option>
                    <option>electric</option>
                    <option>fairy</option>
                    <option>fire</option>
                    <option>fighting</option>
                    <option>flying</option>
                    <option>ghost</option>
                    <option>grass</option>
                    <option>ground</option>
                    <option>ice</option>
                    <option>normal</option>
                    <option>poison</option>
                    <option>psychic</option>
                    <option>rock</option>
                    <option>steel</option>
                    <option>water</option>
                </select>
            </div>
            <button className={"resetButton"} onClick={() => handleResetFilter()}>reset</button>
        </div>
    );
}

export default FilterBar;