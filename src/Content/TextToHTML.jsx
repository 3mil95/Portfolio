import React from 'react';


const about = `I am at the end of my studies in the media technology program at KTH, where I am studying a master's degree in computer science, with a focus on computer graphics and visualization.

I like to be creative and create things. During my studies, I have done many of my own projects. Among other things, I have made some games with Unity. I have also created some websites with React.js with associated backends in Flask and Node.js and some basic mobile apps with Java and React-native.

In my spare time I play music. I have been playing guitar for several years and also compose a bit. I am also interested in cooking and preferably without a recipe as I like to invent and test new flavors.`


function createHTML(text) {
    const iner = []
    const lines = text.split("\n");
    for (let i = 0; i < lines.length; i++) {
        if (lines[i] !== "")
            iner.push(lines[i])
        iner.push(<br key={i}/>)
    }

    return <p> { iner } </p>;
}


export function TextToHTML(text) {

    switch(text) {
        case("about"):
            return createHTML(about);
        default:
            return null;
    }
    
}