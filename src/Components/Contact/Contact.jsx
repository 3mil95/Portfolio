import React, { useRef } from 'react';
import linkedin from '../../Content/icons/Linkedin.svg'
import github from '../../Content/icons/Github.svg'
import './Contact.css'

function Contact(props) {
    const ref = useRef()
    if (props.setRef) {
        props.setRef(ref, props.title)
    }

    return ( 
        <div ref={ref} className="contact">
            <div className="contact-left">
                <div className="blue-filter"/>
            </div>
            <div className="contact-right">
                <div>
                    <h1>Contact me</h1>
                    <p>emilcle@gmail.com</p>

                    
                    <a className="contact-link" href="https://www.linkedin.com/in/emil-clemedson-30ab78201">
                            <img height="30px" src={linkedin} alt="github"/>
                            <p>Emil Clemedson</p>
                    </a>
                    
                    <a className="contact-link" href="https://github.com/3mil95">
                            <img height="30px" src={github} alt="github"/>
                            <p>3mil95</p>
                    </a>
                    
                </div>
            </div>
        </div>
    
    );
    
}
 
export default Contact;