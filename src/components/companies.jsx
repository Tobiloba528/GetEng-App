import React from "react";
import "./companies.css";
import One from "../one.png";
import Two from "../two.png";
import Three from "../three.png";
import Four from "../four.jpg";
import Five from "../five.png";
import Six from "../six.jpg";
import Seven from "../seven.png";
import Eight from "../eight.jpg";
import Nine from "../nine.png";
import Ten from "../ten.png";
import Elenven from "../eleven.png";
import Twelve from "../twelve.jpg";

const Companies = () => {
  return (
    <div id="container">
      <div id="companies">
        <h1 className="text-center">
          Companies Hiring through GetEng Soon!!
        </h1>
        <div className="row">
          <div className="col-lg-2 col-6 col-sm-4">
            <img src={One} alt="one" />
          </div>
          <div className="col-lg-2 col-6 col-sm-4">
            <img src={Two} alt="two" />
          </div>
          <div className="col-lg-2 col-6 col-sm-4">
            <img src={Three} alt="three" />
          </div>
          <div className="col-lg-2 col-6 col-sm-4">
            <img src={Four} alt="four" />
          </div>
          <div className="col-lg-2 col-6 col-sm-4">
            <img src={Five} alt="five" />
          </div>
          <div className="col-lg-2 col-6 col-sm-4">
            <img src={Six} alt="six"/>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-2 col-6 col-sm-4">
            <img src={Seven} alt="Seven" />
          </div>
          <div className="col-lg-2 col-6 col-sm-4">
            <img src={Eight} alt="Eight"  />
          </div>
          <div className="col-lg-2 col-6 col-sm-4">
            <img src={Nine} alt="Nine" />
          </div>
          <div className="col-lg-2 col-6 col-sm-4">
            <img src={Ten} alt="Ten" />
          </div>
          <div className="col-lg-2 col-6 col-sm-4">
            <img src={Elenven} alt="Eleven"/>
          </div>
          <div className="col-lg-2 col-6 col-sm-4">
            <img src={Twelve} alt="six"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
