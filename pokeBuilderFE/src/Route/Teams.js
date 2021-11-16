import "./Teams.css";
import TeamList from "../Component/TeamList";

const Teams = ({currentUser}) => {
    return (
        <div className={"Teams"}>
            <TeamList currentUser={currentUser}/>
        </div>
    );
}

export default Teams;