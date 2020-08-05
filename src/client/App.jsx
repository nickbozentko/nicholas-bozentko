import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as firebase from 'firebase/app';
import 'firebase/analytics';

import Home from './Home/Home.jsx';

const firebaseConfig = {
    apiKey: "AIzaSyBOfET4gtgseFHV1R9PBbVvv5LWxBuHQig",
    authDomain: "nicholas-bozentko-website.firebaseapp.com",
    databaseURL: "https://nicholas-bozentko-website.firebaseio.com",
    projectId: "nicholas-bozentko-website",
    storageBucket: "nicholas-bozentko-website.appspot.com",
    messagingSenderId: "649589843622",
    appId: "1:649589843622:web:cfaecbc555b53f1a327667",
    measurementId: "G-71HZ9FY43R"
}
firebase.initializeApp(firebaseConfig);
firebase.analytics();

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
