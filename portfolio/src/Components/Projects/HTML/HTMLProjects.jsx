import React from "react";  
import Layout from "../../About/Landing/layout";
import Projects from "../ProjectsOverView";

function HtmlProjects() {
    const technologies = ["Brackets (IDE)", "Live Server", "HTML Tags","CSS (UI/UX)","Heroku (Deployment)"]
    return(
        <div>
            <Layout/>
            <Projects
            title="HTML, CSS Websites"
            desc="On this page, You will find various HTML, CSS websites that I have worked on in past one year. This page consisits my academic projects and few personal Projects. You can click on live demo button, and it will redirect you to the page that allows you to interact with the website. You can also click on Github button to check the code for the project. Source code of all th projects has been posted on github in my profile."
            arr={technologies}
             />
        </div>
    )

}


export default HtmlProjects;