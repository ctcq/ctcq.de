import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';

function Project(props) {
    return (
        <div className='projects'>
            <Card border="secondary" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.text}</Card.Text>
                    <Button target='_blank' href={props.url} variant='dark'>View on GitHub</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Project;