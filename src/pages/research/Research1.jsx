import React from "react";
import './Research.css';

function Research1() {
    return (
        <div className="container">
            <br />
            <h1>Research</h1>
            <br />
            
            <div className="p-3 border">
                <div className="card-body">
                    <h3>
                        Geometry of Learning
                    </h3>
                    <h6 className="research-project-list">list of tools</h6>
                    <h5>Description of project</h5>

                </div>
            </div>
            <br/>
            <div className="p-3 border">
                <div className="card-body">
                    <h3>
                        Microgesture Dataset
                    </h3>
                    <h6 className="research-project-list">list of tools</h6>
                    <h5>Description of project</h5>

                </div>
            </div>
            <br/>
            <div className="p-3 border">
                <div className="card-body">
                    <h3>
                        Microgesture Elicitation
                    </h3>
                    <h6 className="research-project-list">list of tools</h6>
                    <p>I was tasked with thoroughly reviewing the state-of-the-art research, designing and implementing a study, and collectively analyzing the results. I became extremely curious about how microgesture interaction compares to mid-air interaction in an AR environment, specifically in the context of manipulating 3D objects or completing a sequential multi-step task. I designed an elicitation study to investigate the comparison of microgestures and mid-air gestures across a multitude of AR interfaces.</p>


                </div>
            </div>
            <br/>
            <div className="p-3 border">
                <div className="card-body">
                    <h3>
                        AR/VR Data Visualization
                    </h3>
                    <h6 className="research-project-list">list of tools</h6>
                    <p>I implemented interactive data visualizations, created and optimized ways to update data sources in real-time, developed spatial anchors, configured a Photon server to host the project, optimized the server connection, connected input devices (keyboard, VR pen), configured HTC Vive sensors to work with a HoloLens 2, helped with fundamental experiment design decisions, and provided feedback on the project\'s implementation process. </p>


                </div>
            </div>
        </div>

    );
}

export default Research1;