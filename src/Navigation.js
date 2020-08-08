import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Home from './Home';
import About from './About';
import Project from './Project';
import CardDeck from 'react-bootstrap/CardDeck';

function Navigation() {
    return (
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab eventKey="title" title="Side Project Showcase" disabled/>
        <Tab eventKey="home" title="Home">
            <Home/>
        </Tab>
        <Tab eventKey="projects" title="Projects">
            <CardDeck>
                <Project title='Newsbot' text='Telegram Bot with a variety of functions.' url='https://github.com/ctcq/newsbot'/>
                <Project title='Orchid (WIP)' text='Planned generalization of the newsbot. Media routing service for arbitrary endpoints.' url='https://github.com/ctcq/orchid'/>
                <Project title='ctcq.de' text='My humble little Homepage' url='https://github.com/ctcq/ctcq.de'></Project>
                <Project title='Inventory Manager (WIP)' text='Interactive table for stocktaking.' url='https://github.com/ctcq/inventory-manager'></Project>
                <Project title='yaylist' text='Download songs from a Spotify Playlist via Youtube.' url='https://github.com/ctcq/yaylist'/>
                <Project title='latin-glossary-creator' text='Create a glossary for latin texts' url='https://github.com/ctcq/latin-glossary-creator'/>
                <Project title='Inventory Manager (Legacy)' text='Interactive table for stocktaking. Newer version under development.' url='https://github.com/ctcq/inventory-manager-legacy'/>
            </CardDeck>
        </Tab>
        <Tab eventKey="about" title="About Me">
            <About/>
        </Tab>
        </Tabs>
    );
}

export default Navigation;