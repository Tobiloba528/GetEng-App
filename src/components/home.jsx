import React, { Component } from "react";
import Particles from "react-particles-js";
import { Link } from "react-scroll";
import "./home.css";

const particleOpt = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

class Home extends Component {
  state = {};
  render() {
    return (
      <div id="home">
        <Particles className="particles" params={particleOpt} />
        <div id="content">
          <h2>Are you a world-class dev?</h2>
          <h3>Get a job at top tech companies!</h3>
          <Link
            to="new"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn text-light button"
          >
            <span style={{ fontSize: "20px" }}>Get Started</span>{" "}
            <i className="fa fa-arrow-down" style={{ fontSize: "20px" }} />
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
