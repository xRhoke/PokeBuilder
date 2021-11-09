import "./TeamBuilder.css";
import EmptyTeamSlot from "./EmptyTeamSlot";
import FilledTeamSlot from "./FilledTeamSlot";

const TeamBuilder = ({currentTeam, setCurrentTeam}) => {
    return (
        <div className={"TeamBuilder"}>
            {currentTeam[0] ?
                <FilledTeamSlot pokemon={currentTeam[0]} currentTeam={currentTeam} setCurrentTeam={setCurrentTeam}/>
                :
                <EmptyTeamSlot/>
            }
            {currentTeam[1] ?
                <FilledTeamSlot pokemon={currentTeam[1]} currentTeam={currentTeam} setCurrentTeam={setCurrentTeam}/>
                :
                <EmptyTeamSlot/>
            }
            {currentTeam[2] ?
                <FilledTeamSlot pokemon={currentTeam[2]} currentTeam={currentTeam} setCurrentTeam={setCurrentTeam}/>
                :
                <EmptyTeamSlot/>
            }
            {currentTeam[3] ?
                <FilledTeamSlot pokemon={currentTeam[3]} currentTeam={currentTeam} setCurrentTeam={setCurrentTeam}/>
                :
                <EmptyTeamSlot/>
            }
            {currentTeam[4] ?
                <FilledTeamSlot pokemon={currentTeam[4]} currentTeam={currentTeam} setCurrentTeam={setCurrentTeam}/>
                :
                <EmptyTeamSlot/>
            }
            {currentTeam[5] ?
                <FilledTeamSlot pokemon={currentTeam[5]} currentTeam={currentTeam} setCurrentTeam={setCurrentTeam}/>
                :
                <EmptyTeamSlot/>
            }
        </div>
    );
}

export default TeamBuilder;