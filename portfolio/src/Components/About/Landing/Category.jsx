import React from "react";
import Sections from './sections'

function Index() {
    return (
        <div className="test">
            <article className="grid-container portfolio-intro">
                <div>
                    <h1>Creativity meets Technology.</h1>
                    <p className="lead text-light">A Full-Stack Web Developer passionate about creating interactive applications and experiences on the web</p>
                </div>
            </article>

            <Sections

                url="/android"
                type="Android Development (Java)"
            />
            <Sections

                url="/MERN"
                type="MERN Projects"
            />
            <Sections
                url="/HTML"
                type="HTML, CSS projects"
            />

        </div>
    );

}

export default Index;