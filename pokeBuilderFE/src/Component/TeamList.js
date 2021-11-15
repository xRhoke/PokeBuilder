import "./TeamList.css";
import Team from "./Team";
import axios from "axios";
import {useEffect, useState} from "react";
import PokeDetails from "./PokeDetails";


const TeamList = () => {

    const [teams, setTeams] = useState([]);
    const [currentPokemon, setCurrentPokemon] = useState({});

    const fetchTeams = () => {
        axios.get("/teams")
            .then(response => setTeams(response.data))
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
        return <Team key={team.id} team={team} onTeamDeleted={handleTeamDeleted} setCurrentPokemon={setCurrentPokemon}/>
    });

    return (
        <div className={"TeamList"}>
            {teamList}
            {currentPokemon.name &&
            <PokeDetails currentPokemon={currentPokemon}
                         setCurrentPokemon={pokemon => setCurrentPokemon(pokemon)}/>}
        </div>
    )
        ;
}

export default TeamList;