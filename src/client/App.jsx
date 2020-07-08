import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Home from './Home/Home.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/"
                    component={Home}
                    exact
                />
                <Route
                    path="*"
                    component={Home}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
