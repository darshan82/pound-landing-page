import axios from 'axios';
import React, { useState, useRef } from 'react';
import { Container, Button, Col, Spinner, Row } from 'react-bootstrap';
import { Next } from 'react-bootstrap/esm/PageItem';

const FormOtp = ({onNext , response}) => {
    const [otp, setOtp] = useState(Array(6).fill(''));
    const inputRefs = useRef(new Array(6).fill(null).map(() => React.createRef()));
  const [loading, setLoading] = useState(false);
    const [error , setError] = useState("")
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

    const compareOtp = (otp)=>{
      console.log(otp , response?.otp)
        if(otp){
          if(Number(response?.otp) === Number(otp.join(""))){
           
            return true
          }
        }
        return false
    }

    const handleSubmit = () => {
        // Assuming you want to add the OTP to Firestore
        if(response){
       let isOtpValid  =  compareOtp(otp)
       if(isOtpValid){
         axios.post(`https://18.217.10.162/api/users/website?otp=${otp.join("")}&_id=${response?._id} `).then((res)=>{
                    onNext()
        }).catch((err)=>setError(err?.response?.data?.message || "Some thing went wrong"))
      }
       else{
        setError("Invaild OTP")
       } 
      }
       else{
         console.log("Response is missing")
       }
        
        
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
                        style={{ background: "transparent" }}
                        />
                        ))}
            </form>
                       {error && 
                        <p style={{color:"red" , textAlign:"center"}}>{error}</p>
                      }
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
