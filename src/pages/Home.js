import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Sammy</h2>
        <div className="prompt">
          <p>
            I'm a full stack developer, that has recently completed a coding
            bootcamp through Denver University. In recent years, I have been
            working in the alchohol sales/distribution industry for the past
            decade and looking for new opportunities.
          </p>
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
            <span>
              {" "}
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents{" "}
            </span>
          </li>
          <li className="item">
            <h2> Back-End </h2>
            <span>
              {" "}
              NodeJS, Java Spring, .NET, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, DynamoDB, DigitalOcean, AWS S3, MS SQL{" "}
            </span>
          </li>
          <li className="item">
            <h2> Languages </h2>
            <span> JavaScript, Java, Python, C#, C, C++, TypeScript, Go </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
