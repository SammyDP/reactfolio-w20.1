import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Sammy</h2>
        <div className="prompt">
          <p>A softwar developer with a passion for learning and creating.</p>
          {/* <LinkedinIcon />
          <EmailIcon />
          <GithubIcon /> */}
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End </h2>
            <span></span>
          </li>
          <li className="item">
            <h2> Back-End </h2>
            <span></span>
          </li>
          <li className="item">
            <h2> Languages </h2>
            <span></span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
