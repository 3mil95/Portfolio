import React from 'react';


const about = `Jag läser sjätte terminen på medieteknikprogrammet på KTH. Jag har under tiden på KTH läst kurser inom programmering (python, java, go och matlab) och har fått ett intresse för det. Jag har också gjort en del egna projekt vid sidan av studierna, bland annat har jag gjort lite spel med Unity och musikapplikationer med JUCE och C++. Jag är lättlärd speciellt när det kommer till saker jag är intresserad av. Till sommaren skulle jag vilja pröva på hur det är att jobba med programmering, för att se hur det jag har lärt mig kan användas i arbetslivet och för att jag hoppas på att mina kunskaper ska kunna var till nytta för er.

På fritiden håller jag på med musik. Jag har spelat gitarr i flera år och komponerar också lite grann. Jag är också intresserad av matlagning och helst utan recept då jag gillar att hitta på och testa nya smaker. Jag gillar att göra saker där jag kan var kreativ. 

Jag har inte så mycket erfarenhet av webbprogrammering, men nyligen har börja testa på det med lite egna projekt. Jag skulle därför vara intresserad av att jobb hos er under sommaren. Om det är något du tycker jag ska kolla upp lite om, t.ex. något programmeringsspråk, innan göra jag gärna det. Här gärna av dig om det är något mer du undra över.`


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