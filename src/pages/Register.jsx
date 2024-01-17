import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import RegisterForm from './components/RegisterForm.jsx';
import NavBar from './components/Navbar.jsx';
import Main from "../assets/Main.png"
const Register = () => {
  return (
    <div>
      {/* First Row: Logo and Player Login Button */}
      {/* <Navbar bg="transparent" variant="light" fixed="top"> */}
      {/* <Container> */}
      <NavBar />
      {/* </Container> */}
      {/* </Navbar> */}

      {/* Second Row: Two Texts Vertically Aligned */}
      <Container style={{ marginTop: "40px" }} >
        <Row >
          <Col>
            <p className="title">Reach The Avatar State</p>
            <p className="sub_title" >Enhancing gamers' performance in-game and in real life by gamifying the fitness journey.</p>
          </Col>
        </Row>
      </Container>

      {/* Last Section: Image and Form */}
      <Container className='m-0 p-0'  >
        <Row className="mt-2">
          <Col  md={12} lg={8} >
            <div style={{height:"430px" }}>

              <img
                src={Main}
                alt="Image"
                style={{height:"100%" , }}
                
                // className="img-fluid"
              />
            </div>
          </Col>
          <Col md={12} lg={4}>
            <RegisterForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
