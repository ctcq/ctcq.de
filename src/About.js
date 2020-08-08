import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function About() {
    return (
        <div className='About w-50'>
            <Card>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                       <p>My name is Chris, I'm a <em>Student</em>, <em>Mathematician</em> and <em>Computer Scientist</em> from Münster, Germany.</p>
                       <p>Through my current job in Web Development, I have a professional interest in <em>Software Engineering</em>, <em>Security Assurance</em>, <em>Database Management</em>, <em>DevOps</em> and <em>CI/CD</em>.
                        </p><p>I'm a computer buff in general and like to explore interesting approaches and technologies in my free-time. Among which are <em>Efficient Algorithms</em>, <em>Data Analytics and Neural Networks</em>, <em>Virtual Assistants</em> and <em>Mobile Development</em>.
                        </p>
                    </Card.Text>
                    <Card.Link>
                            <Button variant="primary" href='mailto:homepage.ctcq@gmail.com'>Contact Me</Button>
                    </Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default About;