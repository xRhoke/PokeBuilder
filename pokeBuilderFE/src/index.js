import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import Teams from "./Route/Teams";
import Build from "./Route/Build";
import Login from "./Route/Login";
import LandingPage from "./Route/LandingPage";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path={"app/*"} element={<App/>}/>
                <Route
                    path="*"
                    element={
                        <main style={{padding: "1rem", color: "white"}}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>,
    </React.StrictMode>,
    document.getElementById('root')
);
