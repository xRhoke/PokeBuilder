import "./TeamSlot.css";

const TeamSlot = ({pokemon}) => {
    return (
        <div className={"teamSlot"}>
            <img className={"teamSlotImage"} src={pokemon.image} alt={pokemon.name}/>
        </div>
    );
}

export default TeamSlot;