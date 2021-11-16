import "./Login.css";
import {useEffect, useState} from "react";
import axios from "axios";

const Login = ({currentUser, setCurrentUser}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (username, password) => {
        let user = {
            username: username,
            password: password,
        };

        axios.post("/user/login", user).then(response => {
            sessionStorage.setItem("currentUser", username);
            setCurrentUser(username);
        })
            .then(() => setUsername(""))
            .then(() => setPassword(""));

    };

    const handleCreateUser = (username, password) => {
        axios.post("/user", {
            username: username,
            password: password,
        }).then(() => setUsername(""))
            .then(() => setPassword(""));
    };

    const handleUsernameChange = event => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }

    if (currentUser) {
        return (
            <div className={"loginConfirmation"}>{currentUser} is logged in</div>
        );
    }

    return (
        <div className={"Login"}>
            <div className={"formRow"}>
                <label>Username </label>
                <input type={"text"} name={"username"} value={username}
                       onChange={event => handleUsernameChange(event)}/>
            </div>
            <div className={"formRow"}>
                <label>Password </label>
                <input type={"password"} name={"password"} value={password}
                       onChange={event => handlePasswordChange(event)}/>
            </div>
            <button
                className={"loginButton"}
                name={"login"}
                onClick={() => handleLogin(username, password)}
            >Login
            </button>
            <button
                className={"createButton"} name={"create"}
                onClick={() => handleCreateUser(username, password)}
            >Create
            </button>
        </div>
    );
}

export default Login;