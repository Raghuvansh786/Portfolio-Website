import React from "react";  
import {Link} from 'react-router-dom'

function Sections(props){
    return (    
        <section className="types">
        <Link to={props.url} > 
        <h2>{props.type}</h2>
        <p> &raquo;</p>
        </Link>
        </section>
    );
}

//onClick={props.clicked}

export default Sections;