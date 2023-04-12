import React, { } from "react";

import Layout from "../../About/Landing/layout";
import Projects from "../ProjectsOverView";
function JavaScriptProjects() {
    const technologies = ["MongoDB for NoSQL Database", "React (UI/UX)", "Express for HTTP and API endpoints","Node.js to run server-side code ","Heroku to deploy webapp","Microservices architecture","Git/GitHub for version control"]
    return (
        <div>
            <Layout/>
            <Projects
            title="MERN Stack JavaScript Applications"
            desc="On this page, You will find various Android projects that I have worked on in past one year. This page consisits my academic projects and few personal Projects. It won't be able to provide a live demo of the projects, but I will try to provide a link to youtube video explaining and running the applications."
            arr={technologies}
             />
        </div>
    )



}

export default JavaScriptProjects;