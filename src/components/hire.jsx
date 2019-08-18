import React from "react";
import Fade from "react-reveal/Fade";
import "./hire.css";

const Hire = () => {
  return (
    <div id="new">
      <div id="header" className="text-center">
        <h3>Hire a qualified developer!</h3>
        <p>
          Hire pre-qualified developers with the right skills to take your
          company to the next level
        </p>
      </div>
      <Fade bottom>
        <div className="card-deck" id="hire">
          <div className="card" style={{ borderRadius: "0", border: "0" }}>
            <div className="card-body text-center">
              <p className="card-text">
                Need a developer to join your firm{" "}
                <span style={{ color: "rgb(42, 12, 12)" }}>permanently?</span>
              </p>
              <button href="/" className="btn btn-danger">
                Get Started
              </button>
            </div>
          </div>
          <div className="card" style={{ borderRadius: "0", border: "0" }}>
            <div className="card-body text-center">
              <p className="card-text">
                Need a developer to join your firm{" "}
                <span style={{ color: "rgb(42, 12, 12)" }}>temporarily?</span>
              </p>
              <button href="/" className="btn btn-danger">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Hire;
