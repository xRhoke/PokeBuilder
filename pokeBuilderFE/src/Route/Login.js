import "./Login.css";

const Login = ({}) => {
    return (
        <div className={"Login"}>
            <form className={"loginForm"}>
                <div className={"formRow"}>
                    <label>Username </label>
                    <input type={"text"} name={"username"}/>
                </div>
                <div className={"formRow"}>
                    <label>Password </label>
                    <input type={"text"} name={"password"}/>
                </div>
                <button className={"loginButton"} type={"submit"}>Login</button>
            </form>
        </div>
    );
}

export default Login;