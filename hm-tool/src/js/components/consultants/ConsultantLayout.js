import React from "react";
import { Link } from "react-router";

import ConsultantNav from "./ConsultantNav"

export default class ConsultantLayout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    console.log(this.props);
    return (
      <div>

        <ConsultantNav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">

                {this.props.children}

            </div>
          </div>
        </div>
      </div>

    );
  }
}
