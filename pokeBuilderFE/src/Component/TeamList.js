import "./TeamList.css";
import Team from "./Team";
import axios from "axios";
import {useEffect, useState} from "react";


const TeamList = () => {

    const [teams, setTeams] = useState([]);

    const fetchTeams = () => {
        axios.get("http://localhost:8080/teams")
            .then(response => setTeams(response.data))
    }

    useEffect(() => {
        fetchTeams();
        console.log(teams);
    }, []);

    const teamList = teams.map(team => {
        return <Team key={team.id} team={team}/>
    });

    return (
        <div className={"TeamList"}>
            {teamList}
        </div>
    );
}

export default TeamList;