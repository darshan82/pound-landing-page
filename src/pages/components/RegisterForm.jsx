import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "../../App.css"
const RegisterForm = () => {
  return (
    <Container className='form_container' >
      {/* Part 1: Text Titles */}
      <Row className="px-4">
        <Col>
          <p className='form_title' >Join the team of testers!</p>
          <p className='form_subtitle' >POUND Beta Testers are committed to contribute in the development of the best fitness app designed specifically for gamers.</p>
        </Col>
      </Row>

      {/* Part 2: Input Fields */}
      <Form>
        <Row className="justify-content-center mb-2">
          <Col xs={6} md={6}>
            <Form.Group controlId="firstName">
              <Form.Control className='input' type="text" placeholder="First name" />
            </Form.Group>
          </Col>
          <Col xs={6} md={6}>
            <Form.Group controlId="lastName">
              <Form.Control className='input' type="text" placeholder="Last name" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center ">
          <Col md={12}>
            <Form.Group controlId="email">
              <Form.Control className='input' type="email" placeholder="Email" />
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {/* Part 3: Game Options */}
      <Row  >
        <Col>
          <p className='form_category_title'>What games do you play?</p >
          <Form className='form_category_container custom-scroll' >
            {/* Game Options */}
            {[
              "League of Legends",
              "Call of Duty",
              "Fortnite",
              "Dota 2",
              "Valorant",
              "World of Warcraft",
              "Overwatch 2",
              "Apex Legends",
              "Diablo 4",
              "Genshin Impact",
              "Halo Infinite",
              "Counter-Strike",
              "Minecraft",
              "Rocket League",
              "Rainbow Six Siege",
              "Hearthstone",
              "Final Fantasy",
              "New Worlds",
              "Warframe",
              "Other"
            ].map((game, index) => (
              <div style={{ minWidth: "50%", fontSize: "14px", textAlign: "left", color: "grey" }}>

                <Form.Check
                  key={index}
                  type="checkbox"
                  id={`game${index}`}
                  className='custom-control custom-checkbox'
                  label={game}
                  // style={{ background: "transparent" }}
                  inline
                />
              </div>
            ))}
          </Form>
        </Col>
      </Row>

      {/* Part 4: Continue Button */}
      <Row className="justify-content-center mt-3">
        <Col md={12}>
          <Button className='button w-100' block>
            Continue
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
