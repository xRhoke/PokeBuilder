import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import Teams from "./Route/Teams";
import Build from "./Route/Build";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path={"build"} element={<Build/>}/>
                    <Route path={"teams"} element={<Teams/>}/>
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem", color: "white" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>,
    </React.StrictMode>,
    document.getElementById('root')
);
