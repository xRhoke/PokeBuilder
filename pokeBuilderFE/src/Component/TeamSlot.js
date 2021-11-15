import "./TeamSlot.css";

const TeamSlot = ({pokemon, setCurrentPokemon}) => {
    return (
        <div className={"teamSlot"} onClick={() => setCurrentPokemon(pokemon)}>
            <img className={"teamSlotImage"} src={pokemon.smallImage} alt={pokemon.name}/>
        </div>
    );
}

export default TeamSlot;