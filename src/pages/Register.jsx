import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import RegisterForm from './components/RegisterForm.jsx';
import NavBar from './components/Navbar.jsx';
import Main from "../assets/Home.svg"
import Footer from './components/Footer.jsx';

import Stepper from './components/Stepper/Stepper.jsx';
const Register = () => {
  return (
    <div className='main_div' >
      <NavBar />

      {/* Second Row: Two Texts Vertically Aligned */}
      <Container style={{ paddingTop: 100 }} >
        <Row >
          <Col>
            <p className="title">Reach The Avatar State</p>
            <p className="sub_title" style={{ textAlign: "center",lineHeight:1.6 }} >Enhancing gamers' performance in game and in real life by gamifying the fitness journey.</p>
          </Col>
        </Row>
      </Container>

      {/* Last Section: Image and Form */}
      <Container style={{ padding: 0 }} >
        <Row className="mt-2">
          <Col md={12} lg={8}  >

            <img
              src={Main}
              alt="Image"
              style={{width:"100%" , objectFit:"contain" }}
              />
          </Col>
          <Col md={12} lg={4} className='mt-3'>
            <Stepper/>
          </Col>
        </Row>
      </Container>
      <Row >
        <Col md={12}>
          <Footer />
        </Col>
      </Row>
      {/* </Container>  */}
    </div>
  );
};

export default Register;
