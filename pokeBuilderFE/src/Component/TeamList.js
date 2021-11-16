import "./TeamList.css";
import Team from "./Team";
import axios from "axios";
import {useEffect, useState} from "react";
import PokeDetails from "./PokeDetails";


const TeamList = ({currentUser}) => {

    const [teams, setTeams] = useState([]);
    const [userTeams, setUserTeams] = useState([]);
    const [currentPokemon, setCurrentPokemon] = useState({});

    const fetchTeams = () => {
        if (currentUser) {
            axios.get("/teams/" + currentUser)
                .then(response => setUserTeams(response.data));
        }

        axios.get("/teams")
            .then(response => setTeams(response.data));
    }

    const handleTeamDeleted = team => {
        axios.delete("/teams/" + team.id)
            .then(response => console.log(response.data))
            .then(() => fetchTeams());
    }

    useEffect(() => {
        fetchTeams();
        console.log(teams);
    }, []);

    const teamList = teams.map(team => {
        return <Team key={team.id} team={team} onTeamDeleted={handleTeamDeleted}
                     setCurrentPokemon={setCurrentPokemon}/>
    });

    const userTeamList = userTeams.map(team => {
        return <Team key={team.id} team={team} onTeamDeleted={handleTeamDeleted}
                     setCurrentPokemon={setCurrentPokemon}/>
    });

    return (
        <div className={"wrapper"}>
            {currentUser &&
            <div className={"teamsContainer"}>
                <div className={"teamsListTitle"}>My Teams</div>
                <div className={"TeamsList"}>
                    {userTeamList}
                </div>
            </div>
            }
            <div className={"teamsContainer"}>
                <div className={"teamsListTitle"}>All Teams</div>
                <div className={"TeamsList"}>
                    {teamList}
                    {currentPokemon.name &&
                    <PokeDetails currentPokemon={currentPokemon}
                                 setCurrentPokemon={pokemon => setCurrentPokemon(pokemon)}/>}
                </div>
            </div>
        </div>
    )
        ;
}

export default TeamList;