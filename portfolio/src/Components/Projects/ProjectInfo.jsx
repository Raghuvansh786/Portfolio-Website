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

    var category=project.category;
    var url ="";

    if(category === "Android") {
       url ="/android";
    }else if(category ==="MERN") {
        url = "/MERN";
    }else{
        url = "/HTML";
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
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                        <a className="button expanded" href={project.demo}>Live Demo</a>
                        <a className="button expanded" href={project.github}>GitHub Repo</a>
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