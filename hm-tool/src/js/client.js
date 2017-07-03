import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";

import ConsultantLayout from './components/consultants/ConsultantLayout';

import {overview,rr,rfs,poDetails,onOffBoard,workPermit} from './components/consultants/ConsultantRoutes';

const app = document.getElementById('app');


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>

            <IndexRoute component={Featured}/>
            <Route path="archives(/:article)" name="archives" component={Archives}/>
            <Route path="login" name="login" component={Login}/>
            <Route path="register" name="register" component={Register}/>


        </Route>
        {/*consultant tab with it's children tabs*/}
        <Route path="/consultant" components={ConsultantLayout}>
            <Route {...overview} />
            <Route {...rfs} />
            <Route {...rr} />
            <Route {...onOffBoard} />
            <Route {...poDetails} />
            <Route {...workPermit}/>
        </Route>
    </Router>,
    app);



