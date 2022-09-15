import React from "react";  
import {Link} from 'react-router-dom'

function Sections(props){
    return (    
        <section className="types">
        <Link to={props.url} onClick={props.clicked}> 
        <h2>{props.type}</h2>
        <p> &raquo;</p>
        </Link>
        </section>
    );
}

export default Sections;