import React, { useState, useRef } from 'react';
import { Container, Button, Col, Spinner, Row } from 'react-bootstrap';

const FormOtp = ({onNext}) => {
    const [otp, setOtp] = useState(Array(6).fill(''));
    const inputRefs = useRef(new Array(6).fill(null).map(() => React.createRef()));
  const [loading, setLoading] = useState(false);

    const handleInputChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;

        setOtp(newOtp);

        if (value !== '' && index < newOtp.length - 1) {
            inputRefs.current[index + 1].focus();
        }

        if (value === '' && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = async () => {
        // Assuming you want to add the OTP to Firestore
        console.log(otp.join(""))
        onNext()
    };

    return (
        <Container className='form_container ' style={{height:"480px" , display:"flex" , justifyContent:"space-between" , flexDirection:"column"}}>
         <Row style={{alignItems:"center" , justifyItems:"center" , width:"100%" , height:"100%"}}>

        

           <div>

            <p className='form_title' style={{fontSize:"24px" }}>An authorization code has been sent to your email.</p>
            <p className='form_subtitle' style={{marginBlock:"20px"}} >Enter the code below to authenticate your email.</p> 

            <form style={{textAlign:"center" }}>
                {otp.map((digit, index) => (
                    <input
                        className='otp_input'
                        key={index}
                        type="text"
                        value={digit}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        maxLength="1"
                        ref={(el) => (inputRefs.current[index] = el)}
                        />
                        ))}
            </form>
                        </div>
                        </Row>
        <Row className="justify-content-center mt-3">
          <Col md={12}>
            <Button type='submit' className='button w-100' block onClick={handleSubmit} disabled={loading} >
              {loading ? <Spinner animation="border" size="sm" className="mr-2" /> : "Submit"}
              
            </Button>
          </Col>
        </Row>
        </Container>
    );
};

export default FormOtp;
