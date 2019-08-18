import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Homepage from "./components/homepage";
import Login from './components/login';
import SignUp from './components/signUp';
import Dashboard from "./components/dashboard";
import Jobs from "./components/jobs";
import JobDetails from './components/jobDetails';
import Applications from './components/applications';
import Project from "./components/project";
import Profile from './components/profile';
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main>
          <Switch>
            <Route path="/profile" component={Profile} />
            <Route path="/project" component={Project} />
            <Route path="/applications" component={Applications} />
            <Route path="/jobs/:id" component={JobDetails} />
            <Route path="/jobs" component={Jobs} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Homepage} />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
