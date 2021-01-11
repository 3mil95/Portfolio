import React, { Component } from 'react';
import { projects } from '../../Content/Projects';
import Project from './Project';
import './Projects.css'


class ProjectGrid extends Component {
    state = { 
        index: 0,
        isVisible: false
    }

    componentDidMount() {
        const config = { rootMargin: '10000% 0px 0px 0px' };
        const carousel = document.getElementById('projects');
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.setState({ isVisible: true})
                } else if (this.state.isVisible) {
                    this.setState({ isVisible: false})
                }
            }, config);
        })
        observer.observe(carousel);
    }


    changeProdjectHendler = (dir, isIndex=false) => {
        if (isIndex) {
            this.setState({index: dir})
            return;
        }
        let nevIndex = this.state.index - dir;
        if (nevIndex < 0) {
            nevIndex = projects.length - 1
        }
        if (nevIndex >= projects.length) {
            nevIndex = 0
        }
        this.setState({index: nevIndex})
    }


    getDots = () => {
        const elements = []
        
        for (let i = 0; i < projects.length; i++) {
            const style = (i === this.state.index) ? {color:"#870007"} : {color:"#050A30"}
            elements.push(<button onClick={() => this.changeProdjectHendler(i, true)} style={style}>⬤</button>)
        }
        return elements
    }

    render() { 
        //const { title, description, git, link, image, tags } = projects[this.state.index]
        const { isVisible } = this.state;
 
        let classDiv = "content-padding projects"
        if (isVisible) {
            classDiv += " projects-visible" 
        }


        return (  
            <div className={classDiv} id="projects">
                <h1>Project</h1>
                <div className="prodjects-contaner">
                {
                    projects.map((project, i) => {
                       return <Project project={project} isVisible={isVisible} index={i} curentIndex={this.state.index}/>
                    })
                }
                </div>
                <div className="project-nav"> 
                    { this.getDots() }
                </div>
                <button className="project-left-button" onClick={() => this.changeProdjectHendler(1)}>{"<"}</button>
                <button className="project-right-button" onClick={() => this.changeProdjectHendler(-1)}>{">"}</button>
            </div>
        );
    }
}
 
export default ProjectGrid;