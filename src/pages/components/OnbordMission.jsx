import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner, Image } from 'react-bootstrap';
import "../../App.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
// import ReactGA from 'react-ga';

const OnboardMission = ({ onNext, state, setState }) =>
{
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);


    const handleContinue = (e) =>
    {
        e.preventDefault();

        if (!state?.email)
        {
            setError('Please add your email address.');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(state?.email))
        {
            setError('Please enter a valid email address.');
            return;
        }
        setLoading(true)
        axios.get(`https://18.217.10.162/api/zealy?email=${state?.email}`).then((res) =>
        {
            console.log("res", res)
            if (res?.data?.level < 4)
            {
                setError("Please reach at level 4 on onboarding missions");
                return
            }
            axios.post(`https://18.217.10.162/api/users/website?email=${state.email}`).then((res) =>
            {

                onNext()
                setError("");
            }).catch((err) =>
            {

                setError(err?.response?.data?.message ? err?.response?.data?.message : "Some thing went Wrong");

            }).finally(() =>
            {
                setLoading(false)

            })
        }).catch((err) => setError("Please complete onboarding mission first")).finally(() =>
        {
            setLoading(false)
        })
    }



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
            <a href='https://zealy.io/cw/poundgaming' target='_blank'>
                <Button className="btn-onboard" >
                    Go to Onboarding Missions
                </Button>
            </a>
            <div>
                <p className='form_subtitle'>Already completed Onboarding Missions?</p>
                {/* <br/> */}
                <p className='form_subtitle'>Enter your email for verification.</p>
                <div style={{ background: "#2a2b2c", padding: "8px 12px", borderRadius: "10px", width: "100%", marginTop: "10px", border: error && "1px solid red" }}>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,.6)", marginLeft: 2 }} >Email</p>
                    <div style={{ display: "flex", justifyContent: 'space-between' }}>
                        <input
                            autocomplete="off"
                            onChange={(e) => setState({ ...state, email: e.target.value })}
                            value={state?.email ?? ""}
                            className='input' placeholder='Enter your Email' style={{ background: "transparent", height: "30px", minHeight: 10, flex: 1 }} />
                        {error && <div style={{ color: "red", fontSize: 14, fontWeight: "bold", marginTop: 3, cursor: "pointer" }}
                            onClick={() =>
                            {
                                setState({ ...state, email: "", })
                                setError(null)
                            }}
                        >X</div>}
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
                        {loading ? <Spinner animation="border" size="sm" className="mr-2" /> : "Forge my identity"}
                    </Button>
                </Col>
            </Row>




        </Container>
    );
};

export default OnboardMission;
