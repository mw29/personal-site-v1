import React from "react";
import { Button } from "react-bootstrap";
import './Home.css';
import Resume from '../../assets/resume.pdf';
function Home() {
    return (
        <div className="container">
            <br/>
            <h1>Hi, I'm Madeline Watts.</h1>
            <h2>Researcher and Developer</h2>
            <br/>
            <div>
                <p>
                    I graduated from Colorado State University in May 2022 with majors in Computer Science and Economics and a minor in Statistics.  
                </p>
            </div>
            <span span type='button'>
                <a href={Resume} target="_blank" className="button">Resume</a>
            </span>
        </div>

    );
}

export default Home;