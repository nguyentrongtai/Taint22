import "./App.css";
import Dashboard from "./dashboard";
import  Login  from "./login";
import Preferences from "./preferences";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";

function App() {
    const [token, setToken] = useState();
    if (!token) {
        return <Login setToken={setToken} />;
    }
    return (
        <div className="wrapper">
            <h1> Application </h1>
            <BrowserRouter>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/login">
                        <Preferences />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
