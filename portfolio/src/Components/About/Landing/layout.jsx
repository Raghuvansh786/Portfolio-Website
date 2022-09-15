import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Layout extends Component {


    render() {  
         const Picture = "https://res.cloudinary.com/raghuvansh/image/upload/v1663279740/pictures/IMG_3610_thujcq.jpg";

        return (
         
            <div>
                <div className="off-canvas position-left reveal-for-large portfolio-me" id="my-info" data-off-canvas="">
                    <div className="grid-y grid-padding-x" style={{ height: '100%' }}><br />
                        <div className="cell shrink"><img className="thumbnail" src={Picture} alt="This is a profile Img" /></div>
                        <div className="cell auto">
                            <h5>Raghuvansh Raj Giri</h5>
                            <p className="text-light">Full Stack Developer</p>
                            <Link to="/about">Know More →</Link>
                        </div>
                    </div>
                </div>
                <div className="off-canvas-content" data-off-canvas-content="">
                    <div className="title-bar hide-for-large">
                        <div className="title-bar-left"><button className="menu-icon" type="button" data-toggle="my-info"></button><span className="title-bar-title">Raghuvansh</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

// https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg

export default Layout;