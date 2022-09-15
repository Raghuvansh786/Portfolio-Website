import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useLocation } from 'react-router';
import Axios from 'axios';

function Projects(props) {

    const [projects, setProjects] = useState([]);
    var category = "";
    const location = useLocation().pathname; // React Hook
    if (location === "/android") {
        category = "Android";
    } else if (location === "/MERN") {
        category = "MERN";
    } else {
        category = "HTML";
    }

    useEffect(() => {
        const url = `/project/${category}`
        Axios.get(url)
            .then((res) => { getData(res) })
            .catch((err) => { console.error("Error occured while sending request: ", err); })
    }, [category])

    const getData = (response) => {
        const projects = Array.from(response.data);
        setProjects(projects);
        // console.log("This is projects array from getData",projects);
        // console.log("This is response that we got from the request: ", response);
    }

    const technologies = Array.from(props.arr);
    console.log("the array passed is: ", technologies.length);
    return (
        <div className="test">
            <nav className="grid-container portfolio-breadcrumb"><a href="/">← Back</a></nav>
            <article className="grid-container portfolio-intro portfolio-project">
                <div className="grid-x">
                    <div className="cell small-6 medium-9 large-9">
                        <h1>{props.title}</h1>
                        <div className="portfolio-bio">
                            <p className="lead text-light">{props.desc}</p>
                        </div>
                    </div>
                    <div className="cell portfolio-meta small-6 medium-2 large-3">
                        <h6>Technologies Used</h6>
                        <ul>
                            {technologies.map((value) => {
                                return (<li >{value}</li>)
                            })}
                        </ul>
                    </div>
                </div>

                </article>


                <article className="grid-container portfolio-index">
            <div className="grid-x grid-margin-x small-up-2 medium-up-2 large-up-3">

            {projects.map((eachProject) => {
                return (
                            <Card
                                id={eachProject._id}
                                url={eachProject.thumbnail.url}
                                title={eachProject.name} />
                )

            })}
            </div>
        </article>

            <nav className="grid-container portfolio-breadcrumb"><a href="/">← Back</a></nav>
        </div>
    );

}

export default Projects;