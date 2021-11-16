import './App.css';
import {Link, NavLink, Route, Routes} from "react-router-dom";
import {CgPokemon} from "react-icons/cg";
import {useState} from "react";
import Build from "./Route/Build";
import Teams from "./Route/Teams";
import Login from "./Route/Login";

const App = () => {

    const [loggedIn, setLoggedIn] = useState(JSON.parse(sessionStorage.getItem("loggedIn")));
    const [currentUser, setCurrentUser] = useState(sessionStorage.getItem("currentUser"));

    return (
        <div className={"App"}>
                    <header className={"header"}>
                        <div className={"title"}>
                            <CgPokemon/>
                            <Link to={"/"} className={"titleLink"}>PokéBuilder</Link>
                        </div>
                        <div className={"navBar"}>
                            <NavLink className={({isActive}) => isActive ? "activeLink" : "inactiveLink"}
                                     to={"/app/build"}>Build</NavLink>
                            <NavLink className={({isActive}) => isActive ? "activeLink" : "inactiveLink"}
                                     to={"/app/teams"}>Teams</NavLink>
                            <NavLink className={({isActive}) => isActive ? "activeLink" : "inactiveLink"}
                                     to={"/app/login"}>Login</NavLink>
                        </div>
                    </header>
                    <Routes>
                        <Route path={"build"} element={<Build currentUser={currentUser}/>}/>
                        <Route path={"teams"} element={<Teams currentUser={currentUser}/>}/>
                        <Route
                            path={"login"}
                            element={<Login currentUser={currentUser}
                                            setCurrentUser={setCurrentUser}/>}/>
                    </Routes>
            }
        </div>
    );
}

export default App;
