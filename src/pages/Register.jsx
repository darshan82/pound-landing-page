import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import RegisterForm from './components/RegisterForm.jsx';
import NavBar from './components/Navbar.jsx';
import Main from "../assets/Main.png"
import Footer from './components/Footer.jsx';
const Register = () => {
  return (
    <div className='main_div' >
      <NavBar />

      {/* Second Row: Two Texts Vertically Aligned */}
      <Container style={{ paddingTop: 100 }} >
        <Row >
          <Col>
            <p className="title">Reach The Avatar State</p>
            <p className="sub_title" style={{ textAlign: "center" }} >Enhancing gamers' performance in-game and in real life by gamifying the fitness journey.</p>
          </Col>
        </Row>
      </Container>

      {/* Last Section: Image and Form */}
      <Container style={{ padding: 0 }} >
        <Row className="mt-2">
          <Col md={12} lg={8} >
            <img
              src={Main}
              alt="Image"
              className="img-fluid"
            />
          </Col>
          <Col md={12} lg={4}>
            <RegisterForm />
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
