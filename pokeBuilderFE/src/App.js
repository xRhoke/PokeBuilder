import './App.css';
import {Link, NavLink, Outlet} from "react-router-dom";
import {CgPokemon} from "react-icons/cg";
import {useState} from "react";

const App = () => {


    return (
        <div className={"App"}>
            <header className={"header"}>
                <div className={"title"}>
                    <Link className={"title"} to={"/"}>
                        <CgPokemon/>
                        <div>PokéBuilder</div>
                    </Link>
                </div>
                <div className={"navBar"}>
                    <NavLink className={({isActive}) => isActive ? "activeLink" : "inactiveLink"}
                             to={"/build"}>Build</NavLink>
                    <NavLink className={({isActive}) => isActive ? "activeLink" : "inactiveLink"}
                             to={"/teams"}>Teams</NavLink>
                    <NavLink className={({isActive}) => isActive ? "activeLink" : "inactiveLink"}
                             to={"/login"}>Login</NavLink>
                </div>
            </header>
            <Outlet/>
        </div>
    );
}

export default App;
