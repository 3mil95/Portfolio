import React, { Component } from 'react';
import { competence } from '../../Content/Competence';
import './Competence.css'



class Competence extends Component {
    state = { 
        isVisible: false
    }

    componentDidMount() {
        const config = { rootMargin: '10000% 0px 0px 0px' };
        const carousel = document.getElementById('competence');
        let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.setState({ isVisible: true})
                } else if (this.state.isVisible) {
                    this.setState({ isVisible: false})
                }
            });
        }, config)
        observer.observe(carousel);
    }

    render() {
        let classString = "content-padding competence"
        if (this.state.isVisible) {
            classString += " competence-visible" 
        }
        
        return (
            <div className={classString} id="competence">
                <h1>Education</h1>
                <div style={{width: '100%' ,maxWidth:'1200px'}}>
                    { competence.map((comp, i) => {

                        let classString = "competence-div competence"
                        if (i % 2 === 0) {
                            classString += " competence-div-left"
                        } else {
                            classString += " competence-div-right"
                        }
                        if (i === competence.length-1) {
                            classString += " competence-div-last"
                        }
                        if (this.state.isVisible) {
                            classString += " competence-visible" 
                        }
                    
                        return (
                            <div key={i} className={classString} style={{transitionDelay: `${100 * i}ms`}}>
                                {this.state.isVisible}
                                <h2>{comp.title}</h2>
                                <h3>{comp.description}</h3>
                            </div>
                        )}
                        ) }
                </div>
            </div>
        );
    }
}
 
export default Competence;