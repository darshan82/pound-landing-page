import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner, Image } from 'react-bootstrap';
import "../../App.css";
import all_avatars from "/src/assets/Avatar_All.png"
import ReactGA from 'react-ga';

const ForgiveIdentity = ({ onNext }) =>
{

  const handleContinue = (e) =>
  {
    e.preventDefault();

    onNext()

  };

  useEffect(() =>
  {
    ReactGA.event({
      category: 'Forge my indentify screen',
      action: 'Forge my indentify',
      label: 'Forge my indentify buttom',
    });
  }, [])


  return (
    <Container className='form_container' style={{ position: "relative", height: "540px" }}>
      {/* Part 1: Text Titles */}
    <div style={{height:"90%"}}>

      <Row className="px-4">
        <Col>
          <p className='form_title' style={{ fontSize: "22px" }} >Forge your digital identity to join the team of testers!</p>
          <p className='form_subtitle' >Create your player tag and personalized avatar to join</p>
        </Col>
      </Row>

      {/* Part 2: Input Fields */}
      <Form>
        <Row className="justify-content-center mt-2" style={{ height: "360px" }}>
          <Image style={{ objectFit: "contain", height: "100%", marginLeft: 10 }} src={all_avatars} />
        </Row>
      </Form>
    </div>

        {/* Part 4: Continue Button */}
        <Row className="justify-content-center mt-3">
          <Col md={12}>
            <Button type='submit' className='button w-100' block onClick={handleContinue} disabled={false}>
              {false ? <Spinner animation="border" size="sm" className="mr-2" /> : "Forge my identity"}

            </Button>
          </Col>
        </Row>


    </Container>
  );
};

export default ForgiveIdentity;
