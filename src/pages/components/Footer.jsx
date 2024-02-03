import React, {  useState } from 'react';
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

const Footer = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastType, setToastType] = useState('success');
    const [toastMessage, setToastMessage] = useState('');
    const [success , setSuccess] = useState("Submit")

    const showToastNotification = (type, message) => {
        setToastType(type);
        setToastMessage(message);
        setShowToast(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Reset previous error messages
        setEmailError('');

        // Validate email pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setEmailError('Please add an email.');
        } else if (!emailPattern.test(email)) {
            setEmailError('Please add a valid email.');
        } else {
            // Set loading to true to disable the button and show the spinner
            setLoading(true);

            const querySnapshot = await getDocs(collection(db, "subscribedUsers"));
            const existingEmail = querySnapshot.docs.find(doc => doc.data().email === email);

            if (existingEmail) {
                showToastNotification("error", "Email is already in our Subscribers List");
                // Handle duplicate email scenario
            } else {
                // Create the new document
                try {
                    const docRef = await addDoc(collection(db, "subscribedUsers"), { email });
                    if (docRef.id) showToastNotification("success", "You have Susbcribe Successfully")
                    setSuccess("Thank you for Subscribing")
                } catch (e) {
                    showToastNotification("error", "Some thing went wrong");
                    console.log("Error adding document: ", e);
                }
            }

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
            <div style={{ paddingInline: "30px" }}>

                <div style={{ display: "flex", alignItems: 'center', flexWrap: "wrap-reverse", justifyContent: "space-between" }}>
                    <div>
                        <img className='footer_pound_img' src={pound} alt="Pound" />
                        <p className='footer_subtitle'>Our mission at POUND is to enable and motivate every gamer to live a healthy lifestyle.</p>
                        <div style={{marginTop:"10px"}}>
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
                    </div>

                    <Form style={{ paddingBlock:40 }}>
                   
                        <p className='email_label'>Subscribe to stay informed.</p>
                        <div className='footer_email_div' >
                            <input
                                type='text'
                                placeholder='Email'
                                style={{ background: "transparent" , flex:"1"    }}
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
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", marginTop: "15px", paddingBlock: "10px", }}>
                    <p className='footer_subtitle' style={{ fontSize: "17px" }}>&copy; 2024 POUND</p>
                    <div style={{ width: "36px" }}>
                        <img src={LogoImage} style={{ width: "100%" }} alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
