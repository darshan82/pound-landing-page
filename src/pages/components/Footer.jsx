import React, { useState } from 'react';
import { Row, Col, Form, InputGroup, Button, Spinner } from 'react-bootstrap';
import LogoImage from "../../assets/logo.png";
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
                showToastNotification("error" ,"Email is already in our Subscribers List");
                // Handle duplicate email scenario
            } else {
                // Create the new document
                try {
                    const docRef = await addDoc(collection(db, "subscribedUsers"), { email });
                    if(docRef.id) showToastNotification("success" , "You have Susbcribe Successfully")
                } catch (e) {
                    showToastNotification("error" , "Some thing went wrong");
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
        <div style={{ paddingInline: "20px", borderTop: "1px solid grey", marginTop: "20px" }}>
            <ToastNotification
            show={showToast}
            onClose={() => setShowToast(false)}
            type={toastType}
            message={toastMessage}
      />
            <div style={{ display: "flex", alignItems: 'center', flexWrap: "wrap-reverse", justifyContent: "space-between", marginTop: "10px" }}>
                <div>
                    <img className='footer_pound_img' src={pound} alt="Pound" />
                    <p className='footer_subtitle'>Our mission at POUND is to enable and motivate every gamer to live a healthy lifestyle.</p>
                    <div>
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
                <Form style={{ marginRight: "100px", paddingBlock: 40 }}>
                    <p style={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: "16px" }}>Subscribe to stay informed.</p>
                    <div className='footer_email_div'>
                        <input
                            type='text'
                            placeholder='Email'
                            style={{ background: "transparent", flexGrow: 1 }}
                            className='input'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button  type='submit' onClick={handleSubmit} disabled={loading}>
                            {loading ? <Spinner animation="border" size="sm" className="mr-2" /> : "Submit"}
                            
                        </Button>
                    </div>
                    {emailError && <p className="text-danger">{emailError}</p>}
                </Form>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: "30px" }}>
                <p className='footer_subtitle' style={{ fontSize: "17px" }}>&copy; 2024 POUND</p>
                <div style={{ width: "36px" }}>
                    <img src={LogoImage} style={{ width: "100%" }} alt="Logo" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
