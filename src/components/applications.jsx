import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getApplcations } from "../services/fakeApplicationService";
import "./applications.css";

class Applications extends Component {
  state = {
    applications: []
  };

  componentDidMount() {
    this.setState({ applications: getApplcations() });
  }

  handleDelete = app => {
    const applications = this.state.applications.filter(
      application => application._id !== app._id
    );
    this.setState({ applications });
  };

  render() {
    console.log(this.state.applications);
    return (
      <div id="container">
        <div id="inner">
          <h5>Applications</h5>
          <table className="table">
            <thead>
              <tr id="head">
                <th className="first">Job</th>
                <th> Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.applications.map(app => (
                <tr key={app._id}>
                  <td>
                    <Link className="applied-job" to={`/jobs/${app._id}`}>{app.label}</Link>
                  </td>
                  <td>Pending</td>
                  <td>
                    <i
                      className="fa fa-trash"
                      onClick={() => this.handleDelete(app)}
                      style={{ cursor: "pointer", fontSize: "20px" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Applications;
