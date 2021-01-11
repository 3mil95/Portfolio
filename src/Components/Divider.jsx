import React, { useRef } from 'react';

function Divider(props) {
    const ref = useRef()
    if (props.setRef) {
        props.setRef(ref, props.title)
    }
    let classString = "divider"
    if (props.fullScreen) {
        classString = "divider-full-screen"
    }

    return ( 
        <div ref={ref} className={classString} style={{background: props.bgColor, color: props.color}}>
            {props.children}
        </div>
    );
    
}
 
export default Divider;