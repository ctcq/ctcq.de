import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Home from './Home';
import About from './About';
import Project from './Project';
import CardDeck from 'react-bootstrap/CardDeck';

import projects from './projects.json';

function Navigation() {
    return (
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab eventKey="title" title="Side Project Showcase" disabled/>
        <Tab eventKey="home" title="Home">
            <Home/>
        </Tab>
        <Tab eventKey="projects" title="Projects">
            <CardDeck>
            {
                projects.map((project) => {
                    <Project title={project.title} text={project.text} url={project.url}/>;
                })
            }
            </CardDeck>
        </Tab>
        <Tab eventKey="about" title="About Me">
            <About/>
        </Tab>
        </Tabs>
    );
}

export default Navigation;