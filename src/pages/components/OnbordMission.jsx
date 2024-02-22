import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner, Image } from 'react-bootstrap';
import "../../App.css";
import axios from 'axios';
// import ReactGA from 'react-ga';

const OnboardMission = ({ onNext  ,state , setState }) => {
    const [error, setError] = useState("")


    const handleContinue = (e) => {
        e.preventDefault();
      
        if (!state?.email) {
            setError('Please add your email address.');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(state?.email))
    {
      setError('Please enter a valid email address.');
      return;
    }

    // let data = state
    axios.post(`https://18.217.10.162/api/users/website?email=${state.email}` ).then((res) =>
    {
    //   setResponse(res?.data?.newUser)

      // showToastNotification("success", "User Registered Successfully")
      onNext()
      setError("");
    }).catch((err) =>
    {

      setError( err?.response?.data?.message ? err?.response?.data?.message : "Some thing went Wrong");

    })

        // onNext()

    };

    // useEffect(() => {
    //     ReactGA.event({
    //         category: 'Forge my indentify screen',
    //         action: 'Forge my indentify',
    //         label: 'Forge my indentify buttom',
    //     });
    // }, [])


    return (
        <Container className='form_container' style={{ position: "relative", height: "540px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            {/* Part 1: Text Titles */}

            <Row className="px-4">
                <Col>
                    <p className='form_title' style={{ fontSize: "22px" }} >Forge your digital identity to join the team of testers!</p>
                    <p className='form_subtitle' style={{ paddingInline: "20px" }} >To forge your identity you must first complete the onboarding missions. </p>
                </Col>
            </Row>

            {/* Part 2: Input Fields */}
            <Button style={{ width: "100%", background: "#252628", borderRadius: "10px", border: "1px solid rgba(255,255,255,.06)", paddingBlock: '10px', fontWeight: "600", fontSize: "16px" }}>
                Go to Onboarding Missions
            </Button>
            <div>
                <p className='form_subtitle'>Already completed Onboarding Missions?</p>
                {/* <br/> */}
                <p className='form_subtitle'>Enter your email for verification.</p>
                <div style={{ background: "#2a2b2c", padding: "8px 12px", borderRadius: "10px", width: "100%", marginTop: "10px", border: error && "1px solid red" }}>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,.6)" }} >Email</p>
                    <div style={{ display: "flex" , justifyContent:'space-between' }}>
                        <input
                            autocomplete="off"
                            onChange={(e)=>setState({...state , email:e.target.value})}
                            className='input' placeholder='Enter your Email' style={{ background: "transparent", width: error && 260, paddingRight: error && 10 }} />
                        {error && <div style={{ color: "red", fontSize: 20, fontWeight: "bold", marginTop: 3 }}>X</div>}
                    </div>
                </div>
                {error &&
                        
                        <p style={{ fontSize: "10px", color: "red", paddingInline: '10px', marginTop: 5 }}>{error}</p>
                    }

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

export default OnboardMission;
