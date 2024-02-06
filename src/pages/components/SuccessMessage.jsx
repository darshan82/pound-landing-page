import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import "../../App.css";
import ReactGA from 'react-ga';

const SuccessMessage = ({ onNext }) =>
{

  useEffect(() =>
  {
    ReactGA.event({
      category: 'Success Screen',
      action: 'Success Screen',
      label: 'Success Screen button',
    });
  }, [])

  return (
    <Container className='form_container' style={{ display: "flex", gap: "10px", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "540px" }} >

      {/* <div className='form_container' style={{ height:"100%", display:"flex", position: "absolute", paddingInline:"25px",  flexDirection:"column", justifyContent: "center",}}> */}
      <p className='form_title' style={{ paddingInline: '25px' }}>
        Thank your for applying
        to join the POUND
        Team of Beta Testers.
      </p>
      <p className='form_subtitle'  >
        We will contact you via email with a response as we
        gear up for the launch of POUND Beta.
      </p>
      {/* </div> */}
    </Container>
  );
};

export default SuccessMessage;
