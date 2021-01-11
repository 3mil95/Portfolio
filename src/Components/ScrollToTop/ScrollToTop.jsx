import React, { Component } from 'react';
import './ScrollToTop.css'

class ScrollToTop extends Component {
    state = { scrollY: 0 }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const scrollY = window.scrollY; 
        this.setState({
            scrollY
        })
    }

    handleClick = () => {
        window.scrollTo({ behavior: 'smooth', top: 0 })
    }

    render() { 
        const { scrollY } = this.state;

        return (  
            
            <button className={(scrollY < 100) ? "scroll-to-top-button scroll-to-top-button-closed" : "scroll-to-top-button scroll-to-top-button-open"}  onClick={this.handleClick}>
                <svg width="100%" height="100%" viewBox="0 0 30 10" style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinecap:'square',strokeMiterlimit:1.5}}>
                    <path d="M0,9L15,2L30,9" className="color-red" style={{fill:'none',strokeWidth:'3px'}}/>
                </svg>
                <p>TOP</p>    
            </button>           
        );
    }
}
 
export default ScrollToTop;