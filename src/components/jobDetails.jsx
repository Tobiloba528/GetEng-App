import React, { Component } from "react";
import { getVacancy } from "../services/fakeVacancyService";
import {
  saveApplication,
  getApplcations
} from "../services/fakeApplicationService";
import logo from "../joblogo.svg";
import "./jobDetails.css";

class JobDetails extends Component {
  state = {
    vacancy: {
      _id: "",
      label: "",
      location: "",
      firstPrice: "",
      secondPrice: "",
      info: "",
      note: "",
      tags: "",
      responsibility: [],
      skills: []
    }
  };

  componentDidMount() {
    const vacancyId = this.props.match.params.id;

    const vacancy = getVacancy(vacancyId);
    // console.log(vacancy);

    this.setState({ vacancy: this.mapToViewModel(vacancy) });
  }

  mapToViewModel(vacancy) {
    return {
      _id: vacancy._id,
      label: vacancy.label,
      location: vacancy.location,
      firstPrice: vacancy.firstPrice,
      secondPrice: vacancy.secondPrice,
      info: vacancy.info,
      note: vacancy.note,
      tags: vacancy.tags,
      responsibility: vacancy.responsibility,
      skills: vacancy.skills
    };
  }

  handleCheck = () => {
    const applications = getApplcations();
    const check = applications.find(app => app._id === this.state.vacancy._id);
    if (check) {
      return true;
    } else {
      return false;
    }
  };

  handleApply = () => {
    saveApplication(this.state.vacancy);
    console.log(getApplcations());

    this.props.history.push("/applications");
  };

  render() {
    const check = this.handleCheck();
    const {
      _id,
      label,
      location,
      firstPrice,
      secondPrice,
      info,
      note,
      tags,
      responsibility,
      skills
    } = this.state.vacancy;

    // console.log(responsibility);
    return (
      <div>
        <div id="det" key={_id}>
          <div className="text-center" id="intro">
            <img src={logo} alt="job-logo" width="90px" height="80px" />
            <h2>{label}</h2>
            <div className="location">
              <i className="fa fa-map-marker" /> <span>{location}</span>
              <p className="text-danger" style={{ marginTop: "5px" }}>
                ₦ {firstPrice} - ₦ {secondPrice}
              </p>
            </div>
            <p id="info" style={{ color: "black" }}>
              {info}
            </p>
            <h6 style={{ fontWeight: "bold", textAlign: "left" }}>
              Attention: {note}
            </h6>
          </div>

          <div id="apply">
            <button
              className="btn"
              onClick={this.handleApply}
              disabled={check}
            >
              Apply
            </button>
          </div>

          <div id="stacks">
            <h4 className="text-center">Tech Stacks</h4>
            <p style={{color: "black"}}>{tags}</p>
          </div>

          <div id="details">
            <div id="res">
              <h4 className="text-center">Responsibility</h4>
              <ul>
                {responsibility.map(resp => (
                  <li key={responsibility.indexOf(resp)}>{resp}</li>
                ))}
              </ul>
            </div>
            <div id="skills">
              <h5>Skills/Qualifications:</h5>
              <ul>
                {skills.map(skill => (
                  <li key={skills.indexOf(skill)}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobDetails;
