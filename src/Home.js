import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// eslint-disable-next-line
import classes from './Home.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  return (
    <Container>
    <Row>
      <Col className='leftside' xs={12} md={4}><h1>Trust me,<br/> your diet doesn't <br/> have to be boring.</h1>
      
      <Row><Col ><h6>A healthy diet provides the body with essential nutrition: fluid, 
        macronutrients, micronutrients, and adequate calories.</h6></Col></Row>
      
      </Col>
      

      <Col xs={12} md={8}>
      
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="home2.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="home_diet.jpg"
          alt="Second slide"
        />
        
      </Carousel.Item>
      
    </Carousel>

    </Col>

    </Row>
    
  </Container>
  )
}
