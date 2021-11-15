import './App.css';
import {Link, NavLink, Outlet, Route, Routes} from "react-router-dom";
import {CgPokemon} from "react-icons/cg";
import {useState} from "react";
import Build from "./Route/Build";
import Teams from "./Route/Teams";
import Login from "./Route/Login";

const App = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className={"App"}>
                <div>
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
                        <Route path={"build"} element={<Build/>}/>
                        <Route path={"teams"} element={<Teams/>}/>
                        <Route path={"login"} element={<Login/>} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
                    </Routes>
                </div>
            }
        </div>
    );
}

export default App;
