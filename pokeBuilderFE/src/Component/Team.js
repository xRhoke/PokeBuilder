import {starterData} from "../data/starterData";
import TeamSlot from "./TeamSlot";
import "./Team.css";

const Team = ({ team }) => {

    return (
        <div className={"Team"}>
            <TeamSlot pokemon={starterData[team.poke1id - 1]}/>
            <TeamSlot pokemon={starterData[team.poke2id - 1]}/>
            <TeamSlot pokemon={starterData[team.poke3id - 1]}/>
            <TeamSlot pokemon={starterData[team.poke4id - 1]}/>
            <TeamSlot pokemon={starterData[team.poke5id - 1]}/>
            <TeamSlot pokemon={starterData[team.poke6id - 1]}/>
        </div>
    );
}

export default Team;