import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import "../../App.css";
import ReactGA from 'react-ga';
import Loader from "../../assets/loading.gif"

const SuccessMessage = ({ response, state }) =>
{
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>
  {
    ReactGA.event({
      category: 'Success Screen',
      action: 'Success Screen',
      label: 'Success Screen button',
    });
  }, [])
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
  console.log("state", state)
  return (
    <Container className='form_container' style={{ display: "flex", gap: "10px", flexDirection: "column", height: "540px" }} >

      {/* <div className='form_container' style={{ height:"100%", display:"flex", position: "absolute", paddingInline:"25px",  flexDirection:"column", justifyContent: "center",}}> */}
      <p className='form_title' style={{ paddingInline: '15px', }}>
        Congratulations  🎉
      </p>
      <p className='form_title' style={{ fontSize: 20, color: "rgba(255,255,255,0.9)", fontWeight: "normal", marginTop: 0, padding: 0, marginBottom: "35px" }}>
        @{response?.username}
      </p>
      <p className='form_subtitle'  >
        <span>You are officially a member of the team!</span>
        <br />
        <br />
        <span>
          We will contact you via email with more information as we gear up for the launch of POUND Beta.     </span>  </p>

      {/* </div> */}
      <Row className="justify-content-center" style={{ height: "280px", marginBottom: 20 }}>

        {isLoading && <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: 70 }}><img src={Loader} style={{ width: 70, height: 70 }} />
          <p style={{ fontSize: "23px", color: "rgba(255,255,255,.6)", marginTop: 10 }} >Loading Avatar</p>

        </div>}

        <img style={{ width: 280, height: 280, display: isLoading ? 'none' : 'block' }} src={response?.avatar + "?pose=thumbs-up&expression=happy&camera=fullbody"} />
      </Row>

    </Container>
  );
};

export default SuccessMessage;
