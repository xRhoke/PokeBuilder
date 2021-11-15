import "./FilledTeamSlot.css";
import {useEffect} from "react";

const FilledTeamSlot = ({pokemon, currentTeam, setCurrentTeam}) => {

    useEffect(() => {
        console.log(currentTeam)
    }, [currentTeam]);

    return (
        <div className={"filledTeamSlot"}
             onClick={() => setCurrentTeam(currentTeam.filter(selected => pokemon.name !== selected.name))}>
            <img className={"filledSlotImage"} src={pokemon.smallImage} alt={pokemon.name}/>
        </div>
    );
}

export default FilledTeamSlot;