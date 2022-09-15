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
                            <p className="lead text-light">Full Stack JavaScript Developer.</p>
                            <div className="portfolio-bio">
                                <p>Hello, my name is Raghuvansh. I'm a full-stack developer who mainly focuses in web and mobile app development. I am now a second-year computer studies student at Douglas College. I've worked on a few software projects, but after a while, I became more interested in web and mobile apps, and I decided to focus my studies solely on these areas. I'm now working freelance as I'm working part-time on my own projects, therefore any projects seeking development support or consultation, particularly startups, are of particular interest to me.</p>
                            </div>
                        </div>
                        <div className="cell portfolio-meta small-6 medium-2 large-3">
                            <h6>Skills</h6>
                            <ul>
                                <li>Advanced in SQL,PHP.</li>
                                <li>Good Communicator</li>
                                <li>Great Listner </li>
                                <li>Fluent in English, Hindi and Punjabi.</li>
                                <li>Database Creation and Management.</li>
                                <li>Customer-Service Oriented </li>
                                <li>Strong Desire for constant learning and growth.</li>
                            </ul>
                            <h6>Contact Info</h6>
                            <ul>
                                <li>778-318-7830</li>
                                <li>raghuvanshrajgiri786@gmail.com</li>
                            </ul><a className="button expanded" href="https://www.linkedin.com/in/raghuvansh-raj-giri-14156b240/">LinkedIn</a><a className="button expanded" href="https://github.com/Raghuvansh786">GitHub</a><a className="button expanded" href="https://twitter.com/?lang=en">Twitter</a>
                        </div>
                    </div>
                </article>
                <nav className="grid-container portfolio-breadcrumb"><a href="/">← Back</a></nav>

            </div>
        );
    }
}

export default About;