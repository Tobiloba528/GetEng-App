import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Logo from "../joblogo.svg";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import {
  getCategories,
  getLevels,
  getTypes
} from "../services/fakeJobService";
import { getVacancies } from "../services/fakeVacancyService";
import "./jobs.css";

class Job extends Component {
  state = {
    vacancies: [],
    categories: [],
    levels: [],
    types: [],
    vacancies: [],
    pageSize: 5,
    currentPage: 1,
    filterData: { category: "", level: "", type: "" },
    filters: { category: "", level: "", type: "" }
  };

  componentDidMount() {
    this.setState({
      categories: getCategories(),
      levels: getLevels(),
      types: getTypes(),
      vacancies: getVacancies()
    });
  }

  handleChange = ({ currentTarget: input }) => {
    const filterData = { ...this.state.filterData };
    filterData[input.name] = input.value;
    this.setState({ filterData });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handlePrevious = currentPage => {
    if (currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 });
    } else {
      return null;
    }
  };

  handleNext = (currentPage, pagesLength) => {
    if (currentPage < pagesLength) {
      this.setState({ currentPage: currentPage + 1 });
    } else {
      return null;
    }
  };

  handleFilter = () => {
    const filters = { ...this.state.filterData };
    this.setState({ filters, currentPage: 1 });
    console.log(this.state.filters);
  };

  render() {
    const {
      vacancies: allVacancies,
      currentPage,
      pageSize,
      filters
    } = this.state;

    const filtered =
      filters.category && filters.level && filters.type
        ? allVacancies.filter(vacancy => {
            return (
              vacancy.category === filters.category &&
              vacancy.level === filters.level &&
              vacancy.type === filters.type
            );
          })
        : allVacancies;

    const vacancies = paginate(filtered, currentPage, pageSize);

    return (
      <div id="jobs">
        <h1 className="text-center" style={{ width: "100%", margin: "10px 0" }}>
          Jobs
        </h1>
        <div className="row">
          <div className="col-md-3">
            <div id="first">
              <h6 className="text-center">Filter Jobs</h6>
              <div id="filter">
                <div className="form-group">
                  <select
                    className="form-control select"
                    value={this.state.filterData.category}
                    name="category"
                    onChange={this.handleChange}
                  >
                    {this.state.categories.map(item => (
                      <option key={item._id}>{item.category}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <select
                    className="form-control select"
                    value={this.state.filterData.level}
                    name="level"
                    onChange={this.handleChange}
                  >
                    {this.state.levels.map(item => (
                      <option key={item._id}>{item.level}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <select
                    className="form-control select"
                    value={this.state.filterData.type}
                    name="type"
                    onChange={this.handleChange}
                  >
                    {this.state.types.map(item => (
                      <option key={item._id}>{item.type}</option>
                    ))}
                  </select>
                </div>
              </div>
              <i
                className="fa fa-filter"
                id="icon"
                onClick={this.handleFilter}
              />
            </div>
            <div id="works">
              <h5 style={{ margin: "20px 0" }}>How GetDev Works</h5>
              <p>Setup your profile, showcase your skills and expertise</p>
              <p>Test and show off your skill</p>
              <p>Job match: We match you with your skill and expertise</p>
              <p>
                Choose Job: Make a choice from jobs that match yor expectations
              </p>
            </div>
          </div>

          <div className="col-md-9 second">
            {vacancies.map(vacancy => (
              <div key={vacancy._id} className="vacancy">
                <Link
                  to="nav"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <NavLink to={`/jobs/${vacancy._id}`}>
                    <img src={Logo} alt="logo" width="90px" height="80px" />
                    <div className="text">
                      <h3>{vacancy.label}</h3>
                      <p className="price">
                        {" "}
                        &#8358; {vacancy.firstPrice} - &#8358;{" "}
                        {vacancy.secondPrice}
                      </p>
                      <div className="location">
                        <i className="fa fa-map-marker" />{" "}
                        <span>{vacancy.location}</span>
                      </div>
                      <p className="tags">{vacancy.tags}</p>
                    </div>
                  </NavLink>
                </Link>
              </div>
            ))}
            <div style={{ float: "right", margin: "30px 0 10px" }}>
              <Pagination
                pageSize={pageSize}
                itemCount={allVacancies.length}
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
                handlePrevious={this.handlePrevious}
                handleNext={this.handleNext}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Job;
