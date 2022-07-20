import React from "react";

function Research() {
    return (
        <div className="container">
            <br />
            <h1>Research</h1>
            <br />
            <nav id="research-scroll" className="navbar navbar-inverse navebar-fixed-top">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="#research1-heading">First</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#research2-heading">Second</a>
                    </li>
                </ul>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#research-scroll" data-bs-root-margin="0px 0px">
                <h4 id="research1-heading">First heading</h4>
                <p>jihugfdfhgjkljihugyftdrsetdfyguhijlokiugyftdrstrdtfghjko;jihugy</p>
                <br/>
                <h4 id="research2-heading">Second heading</h4>
                <p>...</p>

            </div>
        </div>

    );
}

export default Research;