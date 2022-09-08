import React from "react";
import './Home.css';
import Resume from '../../assets/resume.pdf';
import data from "../../components/data/data";
import StockTicker from "../../components/stockTicker/stock-ticker";


function Home() {
    return (
        <div>
            <StockTicker />
            <div className="container">
                <br />
                <br />
                <div className="container text-center">
                    <div class="row align-items-center">
                        <div className="col">
                            <br />
                            <h1 class="display-3">Hello, I'm</h1>
                            <h1 class="display-1">Madeline Watts.</h1>
                            <br/>
                            <h5 className="display-7">
                                Welcome to my website! I graduated from Colorado State Univeristy in May 2022 with majors in Computer Science and Economics and a minor in Statistics. 
                                During college, I was a research assistant, teaching assistant, leader in student organizations, and advocate for underrepresented populations in computer science. 
                                Through these experiences, I cemented my passion for computing and my life long mission of ensuring everyone has a place in tech. 
                            </h5>
                            <br/>
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