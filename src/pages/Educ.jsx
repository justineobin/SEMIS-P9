import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Educ = () => {
  return (
    <Container
      fluid
      className="py-5"
      style={{
        backgroundColor: '#f9f9f9',
        color: '#333',
        textAlign: 'center',
        fontFamily: "'Roboto', sans-serif", // Clean, modern font
      }}
    >
      <h2 className="mb-5" style={{ fontWeight: 'bold', color: '#6f4f37' }}>
        Educational Background
      </h2>

      {/* College */}
      <Container
        className="mb-5 p-4"
        style={{
          backgroundColor: 'rgba(111, 79, 55, 0.1)', // Light coffee brown background
          border: '2px solid rgba(111, 79, 55, 0.5)', // Coffee border
          borderRadius: '15px',
        }}
      >
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src="/images/ncf_logo.png" // Replace with actual logo URL
                style={{ height: '150px', objectFit: 'contain' }}
                alt="College Logo"
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>Naga College Foundation Inc.</Card.Title>
                <Card.Text>
                  Bachelor of Science in Computer Science <br />
                  <small style={{ color: '#555' }}>2021 - Present</small>
                </Card.Text>
                <Card.Text className="mt-3" style={{ fontSize: '0.95rem', color: '#555' }}>
                  Specialized in software development, data structures, and web technologies, 
                  completing a capstone project on scalable web applications.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* High School */}
      <Container
        className="mb-5 p-4"
        style={{
          backgroundColor: 'rgba(111, 79, 55, 0.1)', // Light coffee brown background
          border: '2px solid rgba(111, 79, 55, 0.5)', // Coffee border
          borderRadius: '15px',
        }}
      >
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src="/images/high.png" // Replace with actual logo URL
                style={{ height: '150px', objectFit: 'contain' }}
                alt="High School Logo"
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>Eduardo V. Agomaa National High School</Card.Title>
                <Card.Text>
                  High School Diploma <br />
                  <small style={{ color: '#555' }}>2015 - 2021</small>
                </Card.Text>
                <Card.Text className="mt-3" style={{ fontSize: '0.95rem', color: '#555' }}>
                  This is the first time where I got interested in computers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Elementary */}
      <Container
        className="mb-5 p-4"
        style={{
          backgroundColor: 'rgba(111, 79, 55, 0.1)', // Light coffee brown background
          border: '2px solid rgba(111, 79, 55, 0.5)', // Coffee border
          borderRadius: '15px',
        }}
      >
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src="/images/anglo.jpg" // Replace with actual logo URL
                style={{ height: '150px', objectFit: 'contain' }}
                alt="Elementary School Logo"
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>New Anglo Fil-Chinese School Inc.</Card.Title>
                <Card.Text>
                  Elementary Diploma <br />
                  <small style={{ color: '#555' }}>2009 - 2015</small>
                </Card.Text>
                <Card.Text className="mt-3" style={{ fontSize: '0.95rem', color: '#555' }}>
                  Learned a lot from my teachers here.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Summary */}
      <Container
        className="mt-5 p-4"
        style={{
          backgroundColor: 'rgba(111, 79, 55, 0.1)', // Light coffee brown background
          border: '2px solid rgba(111, 79, 55, 0.5)', // Coffee border
          borderRadius: '15px',
        }}
      >
        <h4 style={{ fontWeight: 'bold', color: '#6f4f37' }}>Summary</h4>
        <p style={{ fontSize: '1rem', color: '#555' }}>
        My educational path has been driven by a deep commitment to learning and self-improvement. From laying a solid academic foundation in elementary school to honing my expertise in computer science at the college level, I've developed a diverse set of skills and insights that will help me thrive in a technology-driven career.
        </p>
      </Container>
    </Container>
  );
};

export default Educ;
