import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import LogoImage from "../../assets/logo.png"
import discordIcon from "../../assets/discord.png"
import twitterIcon from "../../assets/twitter.png"
import instagramIcon from "../../assets/instagram.png"
import pound from "../../assets/Pound.png"
import "../../App.css"
const Footer = () => {
    return (

        <div style={{paddingInline:"20px" , borderTop:"1px solid grey" }} >
            <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", marginTop:"10px" }}>
                <div>
                    <img className='footer_pound_img' src={pound} />
                    <p className='footer_subtitle'>Our mission at POUND is to enable and motivate
                        every gamer to live a healthy lifestyle.</p>
                    <div>
                        <img width={"26px"} height={"26px"} style={{ marginRight: "10px" }} src={twitterIcon} />
                        <img width={"26px"} height={"26px"} style={{ marginRight: "10px" }} src={instagramIcon} />
                        <img src={discordIcon} />
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div  style={{ display: "flex", justifyContent: "space-between", width: "100%" ,  marginTop:"30px" }}>
                <p className='footer_subtitle' style={{fontSize:"17px"}}>&copy; 2024 POUND</p>
                <div style={{ width: "36px" }}>

                    <img src={LogoImage} style={{ width: "100%" }} alt="ico" />

                </div>
            </div>
        </div>
    );
};

export default Footer;
