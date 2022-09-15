import React from 'react';
import Landing from './About/Landing/LandingPage';
import { BrowserRouter as Router, Routes, 
    Route} from "react-router-dom";
import AboutPage from './About/Landing/AboutPage';
import AndroidProjects from './Projects/Android/AndroidProjects';
import JavaScriptProjects from './Projects/MERN/JavaScriptProjects';
import NewProject from './NewProject/NewProject';
import ProjectInfo from './Projects/ProjectInfo';
import HtmlProjects from './Projects/HTML/HTMLProjects';

function App() {
    return (
        <div>  
        <Router>
            <Routes>
                <Route  path="/" element={<Landing/>}/>
                <Route  path="/about" element={<AboutPage/>}/>
                <Route path="/android" element={<AndroidProjects/>}/>
                <Route path="/MERN" element={<JavaScriptProjects/>}/>
                <Route path="/HTML" element={<HtmlProjects/>}/>
                <Route path="/new" element={<NewProject/>} />
                <Route path="/info/:id" element={<ProjectInfo/>}/>
            </Routes> 
            </Router>
        </div>
    );
}

export default App;