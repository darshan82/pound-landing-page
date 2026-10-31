import React, { useState } from 'react';
import { API_BASE_URL } from '../../config';
import { Row, Col, Form, InputGroup, Button, Spinner, DropdownDivider, Container } from 'react-bootstrap';
import LogoImage from "../../assets/footerLogo.png";
import discordIcon from "../../assets/discord.png";
import twitterIcon from "../../assets/twitter.png";
import instagramIcon from "../../assets/instagram.png";
import pound from "../../assets/Pound.png";
import "../../App.css";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../../firebase';
import ToastNotification from './Alert';
import ReactGA from 'react-ga';
import axios from 'axios';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastType, setToastType] = useState('success');
    const [toastMessage, setToastMessage] = useState('');
    const [success, setSuccess] = useState("Submit")

    const showToastNotification = (type, message) => {
        setToastType(type);
        setToastMessage(message);
        setShowToast(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Reset previous error messages
        setEmailError('');

        ReactGA.event({
            category: 'Footer Email Entered screen',
            action: 'Footer Email Entered',
            label: 'Footer Email Entered buttom',
        });

        // Validate email pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setEmailError('Please add an email.');
        } else if (!emailPattern.test(email)) {
            setEmailError('Please add a valid email.');
        } else {
            // Set loading to true to disable the button and show the spinner
            setLoading(true);
            axios.post(`${API_BASE_URL}/users/subscribe` , {email}).then((res)=>{
                setSuccess("Thank you for Subscribing")
            }).catch((err)=>{
                showToastNotification("error", err?.response?.data?.message);
            })
            // const querySnapshot = await getDocs(collection(db, "subscribedUsers"));
            // const existingEmail = querySnapshot.docs.find(doc => doc.data().email === email);

            // if (existingEmail) {
            //     showToastNotification("error", "Email is already in our Subscribers List");
            //     // Handle duplicate email scenario
            // } else {
            //     // Create the new document
            //     try {
            //         const docRef = await addDoc(collection(db, "subscribedUsers"), { email });
            //         if (docRef.id) showToastNotification("success", "You have Susbcribe Successfully")
                    
            //     } catch (e) {
                    
            //         console.log("Error adding document: ", e);
            //     }
            // }

            // Clear the email input and reset loading state after a short delay (simulating asynchronous operation)
            setTimeout(() => {
                setEmail('');
                setLoading(false);
            }, 1000);
        }
    };

    return (
        <div style={{ marginTop: "20px" }}>
            <ToastNotification
                show={showToast}
                onClose={() => setShowToast(false)}
                type={toastType}
                message={toastMessage}
            />
            <DropdownDivider style={{ height: "1px", opacity: ".06", width: "100%", background: 'white' }} />






            <Container fluid style={{}}>
                <Row style={{ display: "flex", flexWrap: "wrap-reverse" }}>
                    <Col md={12} lg={8}>
                        <div>
                            <img className='footer_pound_img' src={pound} alt="Pound" />
                            <p className='footer_subtitle'>Our mission at POUND is to enable and motivate every gamer to live a healthy lifestyle.</p>
                            <div style={{ marginTop: "10px" }}>
                                <a href='https://twitter.com/' target='_blank' style={{ cursor: 'pointer' }}>
                                    <img width={"26px"} height={"26px"} style={{ marginRight: "10px" }} src={twitterIcon} alt="Twitter" />
                                </a>
                                <a href='https://www.instagram.com/' target='_blank' style={{ cursor: 'pointer' }}>
                                    <img width={"26px"} height={"26px"} style={{ marginRight: "10px" }} src={instagramIcon} alt="Instagram" />
                                </a>
                                <a href='https://discord.com/' target='_blank' style={{ cursor: 'pointer' }}>
                                    <img src={discordIcon} alt="Discord" />
                                </a>
                            </div>

                            <div style={{ marginTop: "10px", paddingTop: 20 }}>

                                <a className='footer_subtitle' target='_blank' href="mailto:team@poundgaming.com" style={{ textDecoration: "none", }} >Contact us</a>
                               <br/> <a className='footer_subtitle'  href="privacy_policy" style={{ textDecoration: "none", }} >Privacy Policy</a>
                                <br/><a className='footer_subtitle'  href="terms_conditions" style={{ textDecoration: "none", }} >Terms of Use</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={4}  >
                        <Form style={{ paddingBlock: 40, width: "98%", maxWidth: "400px", margin: "auto", }}>

                            <p className='email_label'>Subscribe to stay informed.</p>
                            <div className='footer_email_div'  >
                                <input
                                    type='text'
                                    placeholder='Email'
                                    style={{ background: "transparent", flex: "1" }}
                                    className='input'
                                    value={email}
                                    autocomplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Button type='submit' onClick={handleSubmit} disabled={loading}>
                                    {loading ? <Spinner animation="border" size="sm" className="mr-2" /> : success}

                                </Button>
                            </div>
                            {emailError && <p className="text-danger">{emailError}</p>}
                        </Form>
                    </Col>
                </Row>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", marginTop: "15px", paddingBlock: "10px", }}>
                    <p className='footer_subtitle' style={{ fontSize: "17px" }}>&copy; 2024 POUND</p>
                    <div style={{ width: "36px" }}>
                        <img src={LogoImage} style={{ width: "100%" }} alt="Logo" />
                    </div>
                </div>
            </Container>

        </div >
    );
};

export default Footer;
