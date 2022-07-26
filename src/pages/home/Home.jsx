import React from "react";
import './Home.css';
import Resume from '../../assets/resume.pdf';
import data from "../../components/data/data";


function Home() {
    return (
        <div>
            <div className="container">
                <br />
                <br />
                <div className="container text-center">
                    <div class="row align-items-center">
                        <div className="col">
                            <br />
                            <br />
                            <h1 class="display-3">Hello, I'm</h1>
                            <h1 class="display-1">Madeline Watts.</h1>
                            <br />
                            <span span type='button'>
                                <a href={Resume} target="_blank" className="button">Resume</a>
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home; 