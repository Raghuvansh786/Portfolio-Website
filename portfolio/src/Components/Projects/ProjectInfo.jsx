import React, { useEffect, useState } from "react";
import Axios from "axios"
import Layout from "../About/Landing/layout";
import { useParams } from "react-router";


function ProjectInfo(props) {
    let id = useParams().id;
    console.log("this is id from url above", id)
    const [project, setProjectDetails] = useState([]);
    const [projectImages, setProjectImages] = useState([]);
    useEffect(() => {
        const url = `/projectDetails/${id}`
        Axios.get(url)
            .then((res) => {
                setProjectDetails(res.data)
                setProjectImages(res.data.Images)
            })
            .catch((err) => { console.error("Error occured while sending request: ", err); })
    }, [id])

    var category = project.category;
    var url = "";
    var technologies = []
    if (category === "Android") {
        url = "/android";
        if (project.name === "LogEm") {
            technologies = ["Firebase FireStore Database", "Git/Github for Version Control", "External libraries for UI/UX", "Youtube for demonstration video"]
        } else {
            technologies = ["Firebase Messaging Service", "Firebase Tokens/Sessions", "Android Studio (IDE)", "User Access Management"]
        }
    } else if (category === "MERN") {
        url = "/MERN";
        if (project.name === "To-Do List App") {
            technologies = ["MongoDB NoSQL Database", "React UI/UX", "Microservices Architecture","Git/GitHub for Version Control"]
        } else {
            technologies = ["Middleware to access data ", "React UI/UX", "Microservices Architecture","Git/GitHub for Version Control"]
        }
    } else {
        url = "/HTML";

        if (project.name === "Royal Wedding") {
            technologies = ["HTML link Tags", "CSS for styling", "Tabel Tags for schedule display"]
        } else {
            technologies = ["HTML media Tags", "CSS for styling", "Image/Video rendering"]
        }
    }

    console.log("The details of the project are: ", project)
    return (
        <div className="test">
            <Layout />
            <nav className="grid-container portfolio-breadcrumb"><a href={url}>← Back</a></nav>
            <article className="grid-container portfolio-intro portfolio-project">
                <div className="grid-x">
                    <div className="cell small-6 medium-9 large-9">
                        <h1>App Name: {project.name}</h1>
                        <p className="lead text-light">{project.description}</p>
                    </div>
                    <div className="cell portfolio-meta small-6 medium-2 large-3">
                        <h6>Technologies</h6>
                        <ul>
                            {technologies.map((eachTeach) => {
                                return (
                                    <li>{eachTeach}</li>
                                )
                            })}
                        </ul>
                        <a className="button expanded" href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
                        <a className="button expanded" href={project.github} target = "_blank" rel="noreferrer">GitHub Repo</a>
                    </div>
                </div>

                {projectImages.map((eachImage) => {
                    return (
                        <img className="image" src={eachImage.url} alt="The LogEm Project" />
                    )
                })}
            </article>

        </div>
    )
}

export default ProjectInfo;