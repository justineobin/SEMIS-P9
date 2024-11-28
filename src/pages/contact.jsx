import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    // Add form submission logic here
  };

  return (
    <Container
      fluid
      className="py-5"
      style={{
        backgroundColor: '#f9f9f9',
        color: '#333',
        textAlign: 'center',
      }}
    >
      <h2 className="mb-5" style={{ fontWeight: 'bold', color: '#28a745' }}>
        Contact Me
      </h2>

      <Row className="justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" style={{ backgroundColor: '#28a745' }}>
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Contact Info Section */}
      <Row className="mt-5">
        <Col md={12}>
          <h4>Contact Information</h4>
          <p>
            You can also reach me through the following channels:
          </p>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            <li>
              <strong>Email:</strong> 
              <a href="mailto:your.mppiana@gbox.ncf.edu.ph" style={{ color: '#28a745' }}>
                jobin@gbox.ncf.edu.ph
              </a>
            </li>
            <li>
              <strong>Phone:</strong> 
              <a href="tel:+639500257016" style={{ color: '#28a745' }}>
                +639063431602
              </a>
            </li>
           
            <li>
              <strong>GitHub:</strong> 
              <a href="https://github.com/justineobin" target="_blank" rel="noopener noreferrer" style={{ color: '#28a745' }}>
                GitHub Profile
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
