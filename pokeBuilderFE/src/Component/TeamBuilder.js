import "./TeamBuilder.css";
import EmptyTeamSlot from "./EmptyTeamSlot";
import FilledTeamSlot from "./FilledTeamSlot";
import axios from "axios";

const TeamBuilder = ({currentTeam, setCurrentTeam}) => {

    const handleSaveTeam = event => {
        axios.post("/teams", {
            name: event.target.teamName.value,
            poke1id: currentTeam[0].id,
            poke2id: currentTeam[1].id,
            poke3id: currentTeam[2].id,
            poke4id: currentTeam[3].id,
            poke5id: currentTeam[4].id,
            poke6id: currentTeam[5].id,
        })
            .then(response => console.log(response.data))
            .then(setCurrentTeam([]));
    };

    return (
        <div className={"teamBuilderContainer"}>
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
            {currentTeam[5] &&
            <form className={"saveTeamForm"} onSubmit={event => handleSaveTeam(event)}>
                <div>Name: </div>
                <input className={"filterInput"} type={"text"} name={"teamName"}/>
                <button className={"saveButton"}
                        type={"submit"}>
                    save
                </button>
            </form>
            }
        </div>
    );
}

export default TeamBuilder;