import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import "../../App.css";

const SuccessMessage = ({ onNext }) =>
{

    return (
        <Container className='form_container' style={{ display: "flex", gap: "10px", justifyContent: "center", alignItems: "center", flexDirection: "column", minHeight: "480px" }} >

            {/* <div className='form_container' style={{ height:"100%", display:"flex", position: "absolute", paddingInline:"25px",  flexDirection:"column", justifyContent: "center",}}> */}
            <p className='form_title' style={{ paddingInline: '25px' }}>
            You have been successfully unsubscribed from the POUND Gaming Communication list.
            </p>
         
            {/* </div> */}
        </Container>
    );
};

export default SuccessMessage;
