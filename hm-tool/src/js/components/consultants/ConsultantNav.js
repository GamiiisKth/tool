import React from "react";
import { IndexLink, Link } from "react-router";

export default class ConsultantNav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;

    const overviewClass = location.pathname === "/consultant/overview" ? "active" : "";
    const travelClass = location.pathname.match(/^\/consultant^\/travel/) ? "active" : "";
    const poDetailsClass = location.pathname.match(/^\/consultant^\/poDetails/) ? "active" : "";
    const rfsClass = location.pathname.match(/^\/consultant^\/rfs/) ? "active" : "";
    const rrClass = location.pathname.match(/^\/consultant^\/rr/) ? "active" : "";
    const onOffBoardClass = location.pathname.match(/^\/consultant^\/onOffBoard/) ? "active" : "";
    const workPermitClass = location.pathname.match(/^\/consultant^\/workPermit/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={overviewClass}>{/*TODO change overview class name to Info (same as ) article name*/}
                <IndexLink to="/consultant/overview" onClick={this.toggleCollapse.bind(this)}><span class="glyphicon glyphicon-info-sign"></span> Info</IndexLink>
              </li>
              <li class={travelClass}>
                <Link to="/consultant/travel" onClick={this.toggleCollapse.bind(this)}><span class="glyphicon glyphicon-plane"></span> Travel</Link>
              </li>
              <li class={poDetailsClass}>
                <Link to="/consultant/poDetails" onClick={this.toggleCollapse.bind(this)}><span class="glyphicon glyphicon-align-center"></span> Po Details</Link>
              </li>
              <li class={rfsClass}>
                <Link to="/consultant/rfs" onClick={this.toggleCollapse.bind(this)}><span class="glyphicon glyphicon-link"></span> RFS</Link>
              </li>
              <li class={rrClass}>
                <Link to="/consultant/rr" onClick={this.toggleCollapse.bind(this)}><span class="glyphicon glyphicon-question-sign"></span> RR</Link>
              </li>
              <li class={onOffBoardClass}>
                <Link to="/consultant/onOffBoard" onClick={this.toggleCollapse.bind(this)}><span class="glyphicon glyphicon-transfer"></span> On-Off-Board</Link>
              </li>
              <li class={workPermitClass}>
                <Link to="/consultant/workPermit" onClick={this.toggleCollapse.bind(this)}><span class="glyphicon glyphicon-globe"></span> Work Permit</Link>
              </li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li><Link to="/"><span class="glyphicon glyphicon-home"></span> Home</Link></li>
            </ul>
          </div>

        </div>
      </nav>
    );
  }
}
