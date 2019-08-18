import React from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import Input from "./common/input";
import Form from './form';
import "./login.css";

class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };

  schema = {
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
          <h1 className="text-center">Login</h1>
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
          <Link className="link" to="/">
            Forgot Password?
          </Link>
          <div id="button">
            <button type="submit" className="btn" id="submit">
              Login
            </button>
          </div>
          <Link className="link" to="/sign-up">
            Sign Up
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
