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
      <p className='form_title' style={{ paddingInline: '25px' , marginBottom:"25px" }}>
      Congratulations  🎉
      </p>
      <p className='form_subtitle'  >
      <span>You are officially a member of the team!</span>
      <br/>
      <br/>
      <span>
      We will contact you via email with more information as we gear up for the launch of POUND Beta.     </span>  </p>
      
      {/* </div> */}
    </Container>
  );
};

export default SuccessMessage;
