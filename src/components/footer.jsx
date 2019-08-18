import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="row" id="links">
        <div className="col-md-3">
          <ul>
            <li>
              <h6 className="header">The Company</h6>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Success Story</a>
            </li>
            <li>
              <a href="/">Contact US</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul>
            <li>
              <h6 className="header">Connect</h6>
            </li>
            <li>
              <a href="/">Salary Calculator</a>
            </li>
            <li>
              <a href="/">Refer a friend</a>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul>
            <li>
              <h6 className="header">Need updates on latest jobs?</h6>
            </li>
            <li>
              <p>Sign up to get the latest updates.</p>
            </li>
            <li>
              <div className="input-group mb-3" style={{ height: "55px" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter vaild email"
                  style={{
                    background: "none",
                    height: "55px",
                    fontFamily:
                      "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"
                  }}
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
