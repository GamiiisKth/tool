import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
      {/*because of archive, Featured , Login and Register is child of Layout(see the Client.js <Router> )*/}
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    console.log(this.pro);
    return (
      <div>
          {/*send the location to nav  to extract the path of every tabs when it has been clicked to resolve the path */}
          {/*render nav*/}
        <Nav location={location} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
                {/*this props allow the children to render their props */}
              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}
