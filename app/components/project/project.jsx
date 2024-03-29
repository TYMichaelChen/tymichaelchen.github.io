import React from 'react';
import './project.scss';

// Project Images
import BrainHub from '../../static/images/projects/brain.png';
import Packhire from '../../static/images/projects/packhire.jpg';
import SEAM from '../../static/images/projects/seam.jpg';
import Twitter from '../../static/images/projects/twitter.jpg';
import Frontend from '../../static/images/projects/front.jpg';
import Data from '../../static/images/projects/data.jpg';


class Project extends React.Component {
  get projects() {
    return [
      {
        name: "BrainHub",
        role: "Software Engineer (Full Stack)",
        technology: ['Swift', 'Django', 'PostgreSQL'],
        technologyClasses: ['Swift', 'Django', 'PostgreSQL'],
        image: BrainHub,
        className: 'brainhub',
      },
      {
        name: "PackHire",
        role: "Software Engineer (Full Stack)",
        technology: ['Ruby on Rails', 'Javascript', 'PostgreSQL'],
        technologyClasses: ['Ruby', 'Javascript', 'PostgreSQL'],
        image: Packhire,
        className: 'packhire',
      },
      {
        name: "SEAM",
        role: "Software Engineer (Full Stack)",
        technology: ['Node.JS', 'Javascript', 'MongoDB'],
        technologyClasses: ['Node', 'Javascript', 'MongoDB'],
        image: SEAM,
        className: 'seam',
      },
      {
        name: "Data Science",
        role: "Software Engineer (Full Stack)",
        technology: ['Python', 'Java'],
        technologyClasses: ['Python', 'Java'],
        image: Data,
        className: 'data',
      },
      {
        name: "Frontend",
        role: "Software Engineer (Full Stack)",
        technology: ['Javascript', 'HTML5/CSS3', 'SASS'],
        technologyClasses: ['Javascript', 'HTML5', 'SASS'],
        image: Frontend,
        className: 'frontend',
      },
      {
        name: "Twitter",
        role: "Software Engineer (Full Stack)",
        technology: ['Javascript', 'HTML5/CSS3'],
        technologyClasses: ['Javascript', 'HTML5'],
        image: Twitter,
        className: 'twitter',
      },
    ];
  }
  get projectsComponent() {
    const projectsObj = this.projects;
    const projects = _.map(projectsObj, (project) => {
      const tags = _.map(project.technology, (tech, idx) => (
        <div key={tech} className={`${project.technologyClasses[idx]}-tag`}>{tech}</div>
      ));
      return (
        <div className="col-md-4" key={project.name}>
          <a href={`/project?project=${project.className}`}>
          <div className="project-card">
            <figure className={`effect-sadie ${project.className}-bg`}>
              <img src={project.image} alt="img01"/>
              <figcaption>
                <div className="tag-container">
                  {tags}
                </div>
              </figcaption>
            </figure>
          </div>
          </a>
        </div>
      );
    });
    return  (
      <div className="list-container">
        <div className="row">
          {projects}
        </div>
      </div>
    );
  }
  render() {
    return (
      <div id="projects" className="project-container">
        <div className="page-title-box">
          <h1>PROJECTS</h1>
          <h2>My latest engineering venture projects</h2>
        </div>
        {this.projectsComponent}
      </div>
    );
  }
};

export default Project;
