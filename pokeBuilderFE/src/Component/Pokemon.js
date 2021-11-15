import "./Pokemon.css";
import {CgPokemon} from "react-icons/cg"
import {useState} from "react";

const Pokemon = ({pokemon, setCurrentPokemon, currentTeam, setCurrentTeam}) => {

    const [isSelected, setSelected] = useState(false);

    const handlePokemonSelected = () => {
        setSelected(!isSelected);
    }

    const typeList = pokemon.types.map(typeSlot => {
       return <div key={`${pokemon.id}_${typeSlot.slot}`} className={"type " + typeSlot.type.name}>{typeSlot.type.name}</div>
    });

    return (
        <div className={"Pokemon"} onClick={() => handlePokemonSelected()}>
            <div className={"number"}><CgPokemon/>{pokemon.id} </div>
            <img className={"pokemonImage"} src={pokemon.image} alt={pokemon.name}/>
            <div className={"pokeName"}> {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</div>
            <div className={"typeList"}>{typeList}</div>
            {isSelected &&
            <div className={"actionModal"}>
                <button className={"modalButton"} onClick={() => setCurrentTeam([...currentTeam, pokemon])}>add</button>
                <button className={"modalButton"} onClick={() => setCurrentPokemon(pokemon)}>info</button>
            </div>
            }
        </div>
    )
}

export default Pokemon;