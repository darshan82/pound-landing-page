import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner, Image } from 'react-bootstrap';
import "../../App.css";

import girl_avatar from "/src/assets/girl_avatar.png"
const SelectedAvatar = ({ onNext }) => {


    // Function to handle form submission
    const handleContinue = (e) => {
            e.preventDefault();
            console.log("clicked,'............")
        onNext()

    };

    // Function to handle checkbox changes


    return (
        <Container className='form_container' style={{ position: "relative", boxShadow: "0 0 2px 0 rgba(9, 13, 20, 0.24)" }}>
            <Row className="px-4">
                <Col>
                    <p className='form_title' style={{ fontSize: "22px" }} >It’s your avatar.<br />Own it.</p>
                </Col>
            </Row>
            <Row className="px-4 mt-4">
                <Col>
                    <div style={{ background: "#2a2b2c", padding: "8px 12px", borderRadius: "10px", width: "100%" }}>
                        <p style={{ fontSize: "13px", color: "rgba(255,255,255,.6)" }} >Player Tag</p>
                        <input className='input' placeholder='Insert player tag' style={{ background: "transparent" }} />
                    </div>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,.6)", paddingInline: '10px' }}>Must be xx characters and xxx</p>
                </Col>
            </Row>
            {/* Part 2: Input Fields */}
            <Form>
                <Row className="justify-content-center mt-2" style={{ width: "100%", height: "280px" }}>
                    <Image style={{ objectFit: "contain", height: "284px" }} src={girl_avatar} />
                </Row>

                {/* Part 4: Continue Button */}
                <Row className="justify-content-center mt-3">
                    <Col md={12}>
                        <Button type='submit' className='button w-100' block onClick={handleContinue} disabled={false}>
                            {false ? <Spinner animation="border" size="sm" className="mr-2" /> : "Continue"}

                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default SelectedAvatar;
