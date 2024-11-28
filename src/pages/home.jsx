import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import '../home.css';

const Home = () => {
  return (
    <div id="home">
      <Container
        fluid
        className="text-center py-5"
        style={{
          backgroundColor: '#6f4f28', // Coffee color background
          color: 'white',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '0 10%',
          fontFamily: "'Poppins', sans-serif", // Add readable font here
        }}
      >
        <div
          style={{
            border: '2px solid rgba(255, 255, 255, 0.5)',
            padding: '40px',
            borderRadius: '15px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            maxWidth: '900px',
            width: '100%',
            marginBottom: '50px',
          }}
        >
          <h1>Welcome to My Personal Website</h1>
          <p>Get to know me better.</p>
        </div>

        {/* Slider Section */}
        <Carousel style={{ maxWidth: '900px', width: '100%' }}>
          <Carousel.Item>
            <img
              className="d-block w-100 blur-on-hover"
              src="/images/me.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>About me</h3>
              <p>View my profile.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 blur-on-hover"
              src="/images/studying.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Education</h3>
              <p>my educational background.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 blur-on-hover"
              src="/images/hobbies.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>My Hobbies</h3>
              <p>my hobbies</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 blur-on-hover"
              src="/images/contacts.png"
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3>Contact</h3>
              <p>Contact me for more information.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Home;