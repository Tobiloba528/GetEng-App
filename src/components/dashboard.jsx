import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div id="sections">
      <h1 className="text-center">Dashboard</h1>
      <div id="dashboard">
        <div className="row" style={{ margin: "0" }}>
          <div
            className="col-md-4 text-center section"
            style={{
              borderRight: "1px solid rgb(195, 194, 194)",
              borderBottom: "1px solid rgb(195, 194, 194)"
            }}
          >
            <Link to="/profile" className="content">
              <i
                className="fa fa-user-circle icon"
                style={{ fontSize: "60px" }}
              />
              <h6>Profile</h6>
            </Link>
          </div>
          <div
            className="col-md-4 text-center section"
            style={{
              borderRight: "1px solid rgb(195, 194, 194)",
              borderBottom: "1px solid rgb(195, 194, 194)"
            }}
          >
            <Link to="/" className="content">
              <i className="fa fa-edit icon" style={{ fontSize: "60px" }} />
              <h6>Assessment</h6>
            </Link>
          </div>
          <div
            className="col-md-4 text-center section"
            style={{ borderBottom: "1px solid rgb(195, 194, 194)" }}
          >
            <Link to="/project" className="content">
              <i className="fa fa-edit icon" style={{ fontSize: "60px" }} />
              <h6>Project</h6>
            </Link>
          </div>
        </div>

        <div className="row" style={{ margin: "0" }}>
          <div
            className="col-md-4 text-center section section2"
            style={{ borderRight: "1px solid rgb(195, 194, 194)" }}
          >
            <Link to="/" className="content">
              <i
                className="fa fa-comment icon"
                style={{ fontSize: "60px" }}
              />
              <h6>My articles</h6>
            </Link>
          </div>
          <div
            className="col-md-4 text-center section section2"
            style={{ borderRight: "1px solid rgb(195, 194, 194)" }}
          >
            <Link to="/applications" className="content">
              <i
                className="fa fa-briefcase icon"
                style={{ fontSize: "60px" }}
              />
              <h6>Applied Jobs</h6>
            </Link>
          </div>
          <div className="col-md-4 text-center section section2">
            <Link to="/" className="content">
              <i className="fa fa-key icon" style={{ fontSize: "60px" }} />
              <h6>Change Password</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
