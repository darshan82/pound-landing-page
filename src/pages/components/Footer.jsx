import React from 'react';
import { Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import LogoImage from "../../assets/logo.png"
import discordIcon from "../../assets/discord.png"
import twitterIcon from "../../assets/twitter.png"
import instagramIcon from "../../assets/instagram.png"
import pound from "../../assets/Pound.png"
import "../../App.css"
const Footer = () => {
    return (

        <div style={{ paddingInline: "20px", borderTop: "1px solid grey", marginTop: "20px" }} >
            <div style={{ display: "flex", alignItems: 'center', flexWrap: "wrap-reverse", justifyContent: "space-between", marginTop: "10px" }}>
                <div>
                    <img className='footer_pound_img' src={pound} />
                    <p className='footer_subtitle'>Our mission at POUND is to enable and motivate
                        every gamer to live a healthy lifestyle.</p>
                    <div>
                        <a href='https://twitter.com/' target='_blank' style={{ cursor: 'pointer' }}>
                            <img width={"26px"} height={"26px"} style={{ marginRight: "10px" }} src={twitterIcon} />
                        </a>
                        <a href='https://www.instagram.com/' target='_blank' style={{ cursor: 'pointer' }} >

                            <img width={"26px"} height={"26px"} style={{ marginRight: "10px" }} src={instagramIcon} />
                        </a>
                        <a href='https://discord.com/' target='_blank' style={{ cursor: 'pointer' }}>

                            <img src={discordIcon} />
                        </a>
                    </div>
                </div>
                <div style={{ marginRight: "100px", paddingBlock: 40 }}>

                    <p style={{ fontFamily: "Montserrat", fontWeight: 600, fontSize: "16px" }}>Subscribe to stay informed.</p>
                    <div className='footer_email_div' >
                        <input type='text' placeholder='Email' style={{ background: "transparent", flexGrow: 1 }} className='input' />
                        <Button>Submit</Button>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: "30px" }}>
                <p className='footer_subtitle' style={{ fontSize: "17px" }}>&copy; 2024 POUND</p>
                <div style={{ width: "36px" }}>

                    <img src={LogoImage} style={{ width: "100%" }} alt="ico" />

                </div>
            </div>
        </div>
    );
};

export default Footer;
