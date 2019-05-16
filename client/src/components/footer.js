import React, { Component } from "react";
import "./footer.css";
const linkedInIcon = require("../assets/linkedin.svg");
const githubIcon = require("../assets/githubGrey.svg");

const footerIcons = [
  { logo: linkedInIcon, id: "1" },
  { logo: githubIcon, id: "2" }
];

class Footer extends Component {
  state = {};
  render() {
    return (
      <div
        className="text-center container-fluid "
        style={{
          position: "relative",
          padding: "2px",
          color: "#ffffff"
        }}
      >
        <div>
          <div className="my-2 mx-2 d-inline align-middle">
            <a href="https://www.github.com/FrancescoCommisso">
              <img
                className="my-2 mx-2"
                style={{ height: "30px" }}
                src={githubIcon}
              />
            </a>

            <div className="my-2 mx-2 footimg d-inline align-middle">
              Francesco Commisso © 2019
            </div>
            <a href="https://www.linkedin.com/in/francesco-commisso-a1b560164/">
              <img
                className="my-2 mx-2"
                style={{ height: "30px" }}
                src={linkedInIcon}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
