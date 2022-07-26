import React from "react";
import './Home.css';
import Resume from '../../assets/resume.pdf';



function Home() {
    return (
        <div>
            <div className="container">
                <br />
                <h1>Hi, I'm Madeline Watts.</h1>
                <br />
                <div>
                    <p>
                        I graduated from Colorado State University in May 2022 with majors in Computer Science and Economics and a minor in Statistics.
                    </p>
                </div>
                <br />
                <span span type='button'>
                    <a href={Resume} target="_blank" className="button">Resume</a>
                </span>
            </div>
        </div>

    );
}

export default Home; 