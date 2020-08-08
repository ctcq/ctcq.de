import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Home.css';

function Home() {
    return (
        <div className='Home'>
            <Card>
                <Card.Body>
                    <Card.Title>Welcome!</Card.Title>
                    <Card.Text>
                        <p>This is my little display of personal side projects. This site is still a WIP, though it does its job. That is, presenting the little side projects I tinkered together over time.</p>
                        <p>I created these tools in order to improve my programming skills, to solve problems for people I know and - of course - for fun. Feel free to <b>use</b>, <b>modify</b> und <b>critique</b> them to your liking. I'd be happy if you found some of them helpful.</p>
                    </Card.Text>
                    <Card.Link>
                            <Button variant="primary" href='mailto:homepage.ctcq@gmail.com'>Contact Me</Button>
                    </Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Home;