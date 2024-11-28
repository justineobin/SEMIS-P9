import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Hobbies = () => {
  return (
    <Container
      fluid
      className="py-5"
      style={{
        backgroundColor: '#6f4f37', // Coffee brown background for vibrancy
        color: '#fff', // White text for contrast
        textAlign: 'center',
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <h2
        className="mb-5"
        style={{
          fontWeight: 'bold',
          color: '#fff', // White color for the heading
          fontSize: '2.5rem',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        My Hobbies
      </h2>

      <Row className="mb-5">
        {/* Hobby 1 */}
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow" style={{ borderRadius: '15px', backgroundColor: '#fff' }}>
            <Card.Img
              variant="top"
              src="/images/read.png" // Replace with the actual image URL
              style={{ height: '200px', objectFit: 'cover', borderRadius: '15px 15px 0 0' }}
              alt="Hobby 1"
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#6f4f37' }}>Reading</Card.Title>
              <Card.Text style={{ fontSize: '1rem', color: '#555' }}>
              Reading manhwa not only offers an enjoyable escape into visually stunning worlds filled with rich stories and dynamic characters, but it also enhances reading comprehension, boosts creativity, and provides a unique cultural perspective that broadens one's understanding of different storytelling traditions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Hobby 2 */}
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow" style={{ borderRadius: '15px', backgroundColor: '#fff' }}>
            <Card.Img
              variant="top"
              src="/images/genshin.jpg" // Replace with the actual image URL
              style={{ height: '200px', objectFit: 'cover', borderRadius: '15px 15px 0 0' }}
              alt="Hobby 2"
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#6f4f37' }}>Gaming</Card.Title>
              <Card.Text style={{ fontSize: '1rem', color: '#555' }}>
              Playing *Genshin Impact* is a captivating experience, blending breathtaking visuals, an expansive open world, and immersive storytelling that invites exploration and discovery at every turn.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Add a Footer or Closing Message */}
      <Container
        className="text-center mt-5"
        style={{
          backgroundColor: '#6f4f37', // Coffee background for footer-like section
          color: '#fff',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <p style={{ fontSize: '1rem' }}>
          These hobbies not only provide me with joy and relaxation, but they also enhance my creativity, focus.
        </p>
      </Container>
    </Container>
  );
};

export default Hobbies;
