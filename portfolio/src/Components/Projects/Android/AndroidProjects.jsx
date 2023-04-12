import React from "react";
import Layout from "../../About/Landing/layout";
import Project from "../ProjectsOverView";
function AndroidProjects () {

    const technologies = ["Android Studio (IDE)", "Java (Backend)", "External Libraries (UI/UX)","Firebase FireStore","FireBase Messaging Service","Git (Version Control)","NoSQL Database"]
    return (
        <div>
        <Layout/>
        <Project
            title="Andriod Development Projects (JAVA)"
            desc="On this page, You will find various Android projects that I have worked on in past one year. This page consisits my academic projects and few personal Projects. It won't be able to provide a live demo of the projects, but I will try to provide a link to youtube video explaining and running the applications."
            arr={technologies}
        />
        </div>

    );
}
export default AndroidProjects;