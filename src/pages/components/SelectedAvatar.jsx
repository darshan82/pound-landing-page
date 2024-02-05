import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner, Image } from 'react-bootstrap';
import "../../App.css";
import axios from 'axios';
import Loader from "../../assets/loading.gif"
import { RxCross1 } from "react-icons/rx";
// import girl_avatar from "/src/assets/girl_avatar.png"
const SelectedAvatar = ({ onNext, state, setState }) =>
{

    const [tag, setTag] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    // Function to handle form submission
    const handleContinue = (e) =>
    {
        e.preventDefault();
        if (!tag)
        {
            setError('Tag is required');
            return;
        }
        setLoading(true)

        axios.post(`https://18.217.10.162/api/users/website?username=${tag}`).then((res) =>
        {
            setLoading(false)

            setState((prev) =>
            {
                return { ...prev, tag }
            })
            onNext()
        }).catch((err) =>
        {
            setLoading(false)
            setError(err?.response?.data?.message || "Some thing went wrong")
        })

    };

    const handleChange = (e) =>
    {
        setTag(e.target.value)
    }

    console.log("state?.avatar", state?.avatar)
    const [isLoading, setIsLoading] = useState(true);
    const handleImageLoad = () =>
    {
        // Image is fully loaded and painted
        setTimeout(() =>
        {
            setIsLoading(false); // Hide loader after 10 seconds
        }, 8000);
    };
    useEffect(() =>
    {
        handleImageLoad()
    }, [])
    return (
        <Container className='form_container' style={{ position: "relative", boxShadow: "0 0 2px 0 rgba(9, 13, 20, 0.24)", height: "540px" }}>
            <Row className="px-4">
                <Col>
                    <p className='form_title' style={{ fontSize: "22px" }} >It’s your avatar.<br />Own it.</p>
                </Col>
            </Row>
            <Row className="px-4 mt-4">
                <Col>

                    <div style={{ background: "#2a2b2c", padding: "8px 12px", borderRadius: "10px", width: "100%", border: error && "1px solid red" }}>
                        <p style={{ fontSize: "13px", color: "rgba(255,255,255,.6)" }} >Player Tag</p>
                        <div style={{ display: "flex" }}>
                            <input
                                autocomplete="off"
                                onChange={handleChange} className='input' placeholder='Insert player tag' style={{ background: "transparent", width: error && 260, paddingRight: error && 10 }} />
                            {error && <div style={{ color: "red", fontSize: 20, fontWeight: "bold", marginTop: 3 }}>X</div>}
                        </div>
                    </div>
                    {!error ?
                        <p style={{ fontSize: "10px", color: "rgba(255,255,255,.3)", paddingInline: '10px', marginTop: 5 }}>Can contain between 5 & 15 alphanumeric characters</p>
                        :
                        <p style={{ fontSize: "13px", color: "red", paddingInline: '10px' }}>{error}</p>
                    }
                </Col>
            </Row>
            {/* Part 2: Input Fields */}
            <Form>
                <Row className="justify-content-center" style={{ height: "280px", marginBottom: 20 }}>
                    {isLoading && <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center" }}><img src={Loader} style={{ width: 70, height: 70 }} />
                        <p style={{ fontSize: "23px", color: "rgba(255,255,255,.6)", marginTop: 10 }} >Loading Avatar</p>

                    </div>}
                    {state?.avatar &&
                        <>
                            <img style={{ width: 280, height: 280, display: isLoading ? 'none' : 'block' }} src={state?.avatar + "?pose=thumbs-up&expression=happy&camera=fullbody"} />

                        </>
                    }
                </Row>

                {/* Part 4: Continue Button */}
                <Row className="justify-content-center ">
                    <Col md={12}>
                        <Button type='submit' className='button w-100' block onClick={handleContinue} disabled={loading || isLoading}>
                            {loading ? <Spinner animation="border" size="sm" className="mr-2" /> : "Continue"}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default SelectedAvatar;


