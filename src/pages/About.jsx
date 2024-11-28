import '../about.css';

// src/pages/About.jsx
import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

const About = () => {
  return (
    <Container
      fluid
      className="text-center py-5"
      style={{
        background: 'linear-gradient(to bottom right, #6f4f37, #c69c6d)', // Coffee brown gradient
        color: '#333',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          border: '2px solid rgba(0, 0, 0, 0.1)',
          padding: '40px',
          borderRadius: '15px',
          backgroundColor: 'gray',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '900px',
          width: '100%',
        }}
      >
        {/* Heading */}
        <h1 style={{ color: 'white' }}>About Me</h1>

        {/* Introduction */}
        <p style={{ fontSize: '1.2rem', color: 'white' }}>
          Hello! My name is Justine Obin. I'm relatively new to web development, but I'm excited to learn and grow in this field. I've recently started my journey into coding and am eager to gain hands-on experience. I'm passionate about building simple, functional, and visually appealing web applications, and I'm always looking for opportunities to improve my skills and explore new technologies.
        </p>

        <Row className="mt-5">
          <Col md={4}>
            <img
              src="/images/me.jpg" // Replace with your image path
              alt="Profile"
              className="img-fluid rounded-circle"
              style={{ maxWidth: '250px', marginBottom: '20px' }}
            />
          </Col>
          <Col md={8}>
            {/* Contact Button */}
            <Button
              href="/contact"
              variant="success"
              size="lg"
              className="mt-3"
              style={{
                backgroundColor: '#6f4f37', // Coffee brown color
                borderColor: '#6f4f37',
                color: 'white',
              }}
            >
              Contact Me
            </Button>
          </Col>
        </Row>

        {/* Skills Section */}
        <h4 className="mt-5" style={{ color: 'white' }}>Skills</h4>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Frontend Development</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>React</ListGroup.Item>
                  <ListGroup.Item>JavaScript</ListGroup.Item>
                  <ListGroup.Item>Bootstrap</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Backend Development</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>Node.js</ListGroup.Item>
                  <ListGroup.Item>SQL</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Other Skills</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>Problem Solving</ListGroup.Item>
                  <ListGroup.Item>Debugging</ListGroup.Item>
                  <ListGroup.Item>Testing</ListGroup.Item>
                  <ListGroup.Item>Algorithm and Data structures</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Experience Section */}
        <h4 className="mt-5" style={{ color: 'white' }}>Experience</h4>
        <p style={{ fontSize: '1rem', color: 'white' }}>
          I have experience with JavaScript, and C++, and have worked with frameworks like React. I’m familiar with APIs, databases, and cloud services, and I focus on problem-solving, debugging, and optimizing code.
        </p>
      </div>
    </Container>
  );
};

export default About;
