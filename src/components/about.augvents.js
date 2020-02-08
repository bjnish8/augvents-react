import React from 'react';
import marble from '../marble.jpg'
import './styles/about.augvents.scss'

const About = () => {
    return ( 
        <div className="about" style={{ backgroundImage: `url(${marble})` }}>
        <div className="title">
            <p> about </p>
            <hr />
        </div>
        <div className="about-content">
            <p><b>augvents</b> is a social technology company supporting creative places and public place-making.  </p>

            <p>The company's technology integrates advertising of events with improved awareness of local activities and the encouragement to participate.</p>

            <p><b>augvents</b> assists in building healthy, functional, and productive localities through place-making and enhancement of the individual's
            sense of community by their increased participation in events. </p>
        </div>
    </div>
     );
}
 
export default About;