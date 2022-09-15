import React from "react";
import { Link } from "react-router-dom";

function Card(props) {

    return (

        <div className="cell">
            <Link to={`/info/${props.id}`}>

                <img src={props.url} alt="This is project " />
                <h5>{props.title}</h5>


            </Link>
        </div>
    );
}
export default Card;