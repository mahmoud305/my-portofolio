import React from 'react';
import style from "./Work.module.css";
import Fade from "react-reveal/Fade";
import data from "./../../yourdata";
export default function Work() {
    return (
        <div id="Work" className={`${style.vh_10}`}>
            <div className="container">
                <Fade bottom>
                    <h2 className="h1 pageHeader">Work</h2>
                </Fade>
                <div className="row">
                <Fade bottom cascade >
                    {data.projects.map((project, index) =>
                        <div className="col-md-4 my-2">
                            <div className={`${style.item} position-relative`}>
                                <img src={project.imageSrc} alt="project.title" className={`w-100 h-100`} />
                              
                                <div className={`${style.content} workLayer`}>
                                    <h3 className="header">{project.title}</h3>
                                    <div> 
                                    <p className="text">{project.para}</p>
                                    <a
                                        href={project.url ? project.url : "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="blackBtn btn text-decoration-none"
                                    >
                                        Explore
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                        </Fade>
                </div>
            </div>
        </div>
    )
    /*
       key={index}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
    */
}
