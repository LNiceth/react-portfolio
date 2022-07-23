import React from "react";
import "./Jsprojects.css";
import ProjectData from "../Data/Jsprojects.json";
import githubImg from "../assets/img/github.png";

const Jsprojects = () => {
  return (
    <div className="jsprojects">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <h2>Projects</h2>
            <br />
            <div className="row">
              {ProjectData.map((project, i) => (
                <div className="col-sm-6" key={i}>
                  <img className="card"
                    width="100%"
                    height="300"
                    src={project.projectimg}
                    box-show="11px 11px 22px #b3b3b3,-11px -11px 22px #ffffff"
                    title="img"
                    frameborder="0"
                    
                  ></img>
                  <br />
                  <a
                    href={project.codelink}
                    className="btn btn-default d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repo <img src={githubImg} alt={i} />
                  </a>
                  <a
                    href={project.livelink}
                    className="btn btn-default d-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live 
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jsprojects;
