import React, { Component } from 'react';
import { TextToHTML } from '../../Content/TextToHTML';
import './About.css'

class About extends Component {
    state = { 
        isVisible: false
    }

    componentDidMount() {
        const config = { rootMargin: '10000% 0px 0px 0px' };
        const carousel = document.getElementById('about');
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
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
        let classDiv = "content-padding about"
        if (this.state.isVisible) {
            classDiv += " about-visible" 
        }
        let classText = "about"
        if (this.state.isVisible) {
            classText += "about-visible" 
        }

        return ( 
            <div className={classDiv} id="about">
                <h1>About</h1>
                <div className={classText} style={{transitionDuration: '0.8s'}}>
                    { TextToHTML("about") }
                </div>
            </div>
        );
    }
}
 
export default About;