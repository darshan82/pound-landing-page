import React, { useLayoutEffect } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import "../../App.css";
import ReactGA from 'react-ga';

const SuccessMessage = ({ onNext }) =>
{

    useEffect(() =>
    {
      ReactGA.event({
        category: 'unsubscribe screen',
        action: 'unsubscribe',
        label: 'unsubscribe buttom',
      });
    }, [])
  
    let count = 0
    useLayoutEffect(() =>
    {
        console.log("daear", count == 2)

        if (Boolean(localStorage.getItem("isRender")) && count == 0)
        {
            console.log("dda", localStorage.getItem("isRender"))

            // localStorage.removeItem("isRender")
            window.location.href = "/"

        }
        else
        {
            count++
            localStorage.setItem("isRender", true)
        }
        console.log("daear", count)

    }, [])

    return (
        <Container className='form_container' style={{ display: "flex", gap: "10px", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "540px" }} >

            {/* <div className='form_container' style={{ height:"100%", display:"flex", position: "absolute", paddingInline:"25px",  flexDirection:"column", justifyContent: "center",}}> */}
            <p className='form_title' style={{ paddingInline: '25px' }}>
                You have been successfully unsubscribed from the POUND Gaming Communication list.
            </p>

            {/* </div> */}
        </Container>
    );
};

export default SuccessMessage;
