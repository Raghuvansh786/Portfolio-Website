import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="test">
                <nav className="grid-container portfolio-breadcrumb"><a href="/">← Back</a></nav>
                <article className="grid-container portfolio-intro portfolio-project">
                    <div className="grid-x">
                        <div className="cell small-6 medium-9 large-9">
                            <h1>Raghuvansh Raj Giri</h1>
                            <p className="lead text-light">Software/Full-Stack Developer.</p>
                            <div className="portfolio-bio">
                                <p>Hello, my name is Raghuvansh. I'm a developer who mainly focuses in software, web and mobile app development. I have three years of professional and academic experience in the development field. I am graduated with a Diploma in Computing Studies and Information Systems from Douglas College. I'm currently working as Software Developer at Digital Module Techonologies, providing solutions to the POS clients throughout the Greater Vancouver area. Working with more than 250+ clients to create solutions that cater business needs and transforming ideas into reality.</p>
                            </div>
                        </div>
                        <div className="cell portfolio-meta small-6 medium-2 large-3">
                            <h6>Skills</h6>
                            <ul>
                                <li>Advanced in SQL/NoSQL and .Net Framework.</li>
                                <li>Working in a team helped me improve communication skills</li>
                                <li>Database Creation and Management.</li>
                                <li>Customer-Service Oriented </li>
                                <li>Strong Desire for constant learning and growth.</li>
                                <li>Fluent in English, Hindi and Punjabi.</li>
                            </ul>
                            <h6>Contact Info</h6>
                            <ul>
                                <li>(778)-318-7830</li>
                                <li>raghuvanshraj786@gmail.com</li>
                            </ul>
                            <a className="button expanded" href="https://www.linkedin.com/in/rg786/" target= "_blank" rel = "noreferrer">LinkedIn</a>
                            <a className="button expanded" href="https://github.com/Raghuvansh786" target="_blank" rel= "noreferrer">GitHub</a>
                            <a className="button expanded" href="https://twitter.com/?lang=en" target="_blank" rel = "noreferrer">Twitter</a>
                        </div>
                    </div>
                </article>
                <nav className="grid-container portfolio-breadcrumb"><a href="/">← Back</a></nav>

            </div>
        );
    }
}

export default About;