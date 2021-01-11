import React from 'react';
import { projects } from '../../Content/Projects';

function Project(props) {
    const { index, curentIndex } = props;
    const { title, description, git, link, image } = props.project

    let classProject = "project"
    if (props.isVisible) {
        classProject += " project-visible" 
    }
    if (index === curentIndex) {
        classProject += " project-activ" 
    }

    const nextIndex = (curentIndex+1 === projects.length) ? 0 : curentIndex+1;
    const prevIndex = (curentIndex-1 < 0) ? projects.length-1 : curentIndex-1;


    if (index === prevIndex) {
        classProject += " project-activ-left" 
    }
    if (index === nextIndex) {
        classProject += " project-activ-right" 
    }



    return ( 
        <div className={classProject}>
            <div className="project-img">
                <img src={image} alt=""/>
            </div>
            <div className="project-text">
                <div>
                    <h2> { title} </h2>
                    <p> { description } </p>
                </div>
                <div>
                    {(link) ? <a href={link}>See project</a> : null } 
                    {(git) ? <a href={git}> Git</a> : null }
                </div>
            </div>
        </div>
    );
}
 
export default Project;