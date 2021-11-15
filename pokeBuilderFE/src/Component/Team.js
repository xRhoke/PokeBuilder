import {starterData} from "../data/scripts/starterData";
import TeamSlot from "./TeamSlot";
import "./Team.css";
import {MdDelete} from "react-icons/md";
import {IoMdStats} from "react-icons/io";

const Team = ({team, onTeamDeleted, setCurrentPokemon}) => {

    return (
        <div className={"teamContainer"}>
            <div className={"teamName"}>
                {team.name}
            </div>
            <div className={"Team"}>
                <TeamSlot pokemon={starterData[team.poke1id - 1]} setCurrentPokemon={setCurrentPokemon}/>
                <TeamSlot pokemon={starterData[team.poke2id - 1]} setCurrentPokemon={setCurrentPokemon}/>
                <TeamSlot pokemon={starterData[team.poke3id - 1]} setCurrentPokemon={setCurrentPokemon}/>
                <TeamSlot pokemon={starterData[team.poke4id - 1]} setCurrentPokemon={setCurrentPokemon}/>
                <TeamSlot pokemon={starterData[team.poke5id - 1]} setCurrentPokemon={setCurrentPokemon}/>
                <TeamSlot pokemon={starterData[team.poke6id - 1]} setCurrentPokemon={setCurrentPokemon}/>
            </div>
            <div className={"teamButtonRow"}>
                <IoMdStats className={"statsButton"}/>
                <MdDelete className={"deleteButton"} onClick={() => onTeamDeleted(team)}/>
            </div>
        </div>
    );
}

export default Team;