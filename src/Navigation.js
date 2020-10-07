import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Home from './Home';
import About from './About';
import Project from './Project';
import CardDeck from './react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';

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
                    return <Project title={project.title} text={project.text} url={project.url}/>;
                })
            }
            </CardDeck>
        </Tab>
        <Tab eventKey="works" title="Theses">
            <CardDeck>
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Untersuchung von Modellreduktionsmethoden für Parameter-abhängige dynamische Systeme (2019)</Card.Title>
                        <Card.Text>Bachelor Thesis Mathematics (In German). English Title: <i>Examination of model reduction methods for parameter-independent dynamical systems.</i></Card.Text>
                        <Button target='_blank' href='https://ctcq.de/public/theses/bsc_math.pdf' variant='dark'>View PDF</Button>
                    </Card.Body>
                </Card>
                <Card border="secondary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Security Assessment of RESTful APIs through Automated Penetration Testing</Card.Title>
                        <Card.Text>Bachelor Thesis Computer Science.</Card.Text>
                        <Button target='_blank' href='https://ctcq.de/public/theses/bsc_cs.pdf' variant='dark'>View PDF</Button>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Tab>
        <Tab eventKey="about" title="About Me">
            <About/>
        </Tab>
        </Tabs>
    );
}

export default Navigation;