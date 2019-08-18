import React from "react";
import "./project.css";

const Project = () => {
  return (
    <div id="project-main">
      <div id="project">
        <h4>Project</h4>
        <p>
          We want to ensure you are not ONLY booksmart but also can get things
          done! Attempt the project below, the earlier you completed them, the
          higher your rating.
        </p>
        <h5>Task</h5>
        <div id="task">
          <p>
            Convert the attached mockup to a functional responsive website in
            plain HTML, CSS, Javascript and Jquery.
          </p>
        </div>

        <h6>
          <span style={{ fontWeight: "bold" }}>Submission Date:</span>{" "}
          Saturday, 6th July 2019
        </h6>
        <h6>
          <span style={{ fontWeight: "bold" }}>Countdown:</span> Timeout!
        </h6>

        <button
          className="btn btn-primary"
          style={{ borderRadius: "0", height: "50px", display: "block" }}
        >
          Download Attachment
        </button>

        <button
          className="btn btn-danger"
          style={{float: "right"}}
        >
         Submit
        </button>
      </div>
    </div>
  );
};

export default Project;
