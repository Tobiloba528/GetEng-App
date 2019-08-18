import React from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import Input from "./common/input";
import Form from "./form";
import "./signUp.css";

class SignUp extends Form {
  state = {
    data: { username: "", email: "", password: "", retypedPassword: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),

    email: Joi.string()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    //call server
    console.log("submitted");
  };
  render() {
    return (
      <div id="login">
        <form id="form" onSubmit={this.handleSubmit}>
          <div id="top">
            <button className="btn btn-primary" id="forCompany">
              For Company
            </button>
          </div>
          <h1 className="text-center">Sign Up</h1>
          <Input
            type="text"
            onChange={this.handleChange}
            placeholder="Username"
            name="username"
            value={this.state.data.username}
          />
          <Input
            type="email"
            onChange={this.handleChange}
            placeholder="Enter Email"
            name="email"
            value={this.state.data.email}
          />
          <Input
            type="password"
            onChange={this.handleChange}
            placeholder="********"
            name="password"
            value={this.state.data.password}
          />
          <Input
            type="password"
            onChange={this.handleChange}
            placeholder="********"
            name="retypedPassword"
            value={this.state.data.retypedPassword}
          />
          <div id="button">
            <button type="submit" className="btn" id="submit">
              Sign Up
            </button>
          </div>
          <Link className="link" to="/login">
            login
          </Link>
        </form>
      </div>
    );
  }
}

export default SignUp;
