import React from "react";
import {IndexLink, Link} from "react-router";

import PageNav from './../layout/PageNav';
import Employee from './Employee';

require("./design.css");

export default class ConsultantNav extends React.Component {
    render() {
        const {location} = this.props;
        const overviewClass = location.pathname.match ("/consultant/overview") ? "active" : "";
        const poDetailsClass = location.pathname.match("/consultant/poDetails") ? "active" : "";
        const rfsClass = location.pathname.match("/consultant/rfs") ? "active" : "";
        const rrClass = location.pathname.match("/consultant/rr") ? "active" : "";
        const onOffBoardClass = location.pathname.match("/consultant/onOffBoard") ? "active" : "";
        const workPermitClass = location.pathname.match("/consultant/workPermit") ? "active" : "";

        return (
            <div>
                <header>
                    <PageNav location={location} />
                </header>

                <main>
                    <div class="container" >
                        <h3>Tabs</h3>

                        <div>
                            <Employee/>
                        </div>

                        <ul class="nav nav-tabs">
                            <li class={overviewClass}>
                                <Link to="/consultant/overview"><span class="glyphicon glyphicon-info-sign"></span> Info</Link>
                            </li>
                            <li class={poDetailsClass}>
                                <Link to="/consultant/poDetails"><span class="glyphicon glyphicon-align-center"></span> Po Details</Link>
                            </li>
                            <li class={rfsClass}>
                                <Link to="/consultant/rfs"><span class="glyphicon glyphicon-link"></span> RFS</Link>
                            </li>
                            <li class={rrClass}>
                                <Link to="/consultant/rr"><span class="glyphicon glyphicon-question-sign"></span> RR</Link>
                            </li>
                            <li class={onOffBoardClass}>
                                <Link to="/consultant/onOffBoard"><span class="glyphicon glyphicon-transfer"></span> On-Off-Board</Link>
                            </li>
                            <li class={workPermitClass}>
                                <Link to="/consultant/workPermit"><span class="glyphicon glyphicon-plane"></span> Work Permit</Link>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>



        );
    }
}
