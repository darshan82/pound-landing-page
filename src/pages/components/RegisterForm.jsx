import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import "../../App.css";
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase';
import ToastNotification from './Alert';
import axios from 'axios';

const RegisterForm = ({ onNext, state, setState , setResponse }) => {


  // const [showMessage, setShowMessage] = useState(false)

  // State to store error message
  const [error, setError] = useState('');

  // State to track loading state
  const [loading, setLoading] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');
  const [toastMessage, setToastMessage] = useState('');

  const showToastNotification = (type, message) => {
    setToastType(type);
    setToastMessage(message);
    setShowToast(true);
  };

  // const showAlert = () => {
  //   setShowMessage(true);

  //   // After 5 seconds, hide the div
  //   setTimeout(() => {
  //     setShowMessage(false);
  //   }, 5000);
  // };

  // Function to handle form submission
  const handleContinue = (e) => {
    e.preventDefault();
    // Check if already loading, prevent multiple submissions
    if (loading) {
      return;
    }

    // Set loading to true
    setLoading(true);

    // Check if required fields are filled
    if (!state.first_name) {
      setError('Please add your first name.');
      setLoading(false);
      return;
    }

    if (!state.last_name) {
      setError('Please add your last name.');
      setLoading(false);
      return;
    }

    if (!state.email) {
      setError('Please add your email address.');
      setLoading(false);
      return;
    }

    if (!state?.gamesToplay?.length) {
      setError('Please select at least one category.');
      setLoading(false);
      return;
    }

    // All required fields are filled, proceed to add the document
   
      const data = state 
      data.email_verified = false
      axios.post(`http://18.217.10.162/api/users/website` , data).then((res)=>{
        setResponse(res?.data?.data)
        showToastNotification("success", "User Registered Successfully")
        setState("")
        setError("");
        onNext()
      }).catch((err)=>{
        err?.response?.data?.message
        showToastNotification("error", 'Some thing Went Wrong');
      
      })
     
      setLoading(false);
   
    }

  const handleCheckboxChange = (game) => {
    setState((prev) => {
      return {
        ...prev,
        gamesToplay: prev?.gamesToplay?.includes(game) ? prev?.gamesToplay?.filter((item) => item !== game) : [...prev.gamesToplay, game]
      }
    })
  };

  const handleChange = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  return (
    <Container className='form_container' style={{ position: "relative" }}>
      {/* Part 1: Text Titles */}
      <ToastNotification
        show={showToast}
        onClose={() => setShowToast(false)}
        type={toastType}
        message={toastMessage}
      />
      <Row className="px-4">
        <Col>
          <p className='form_title' >Join the team of testers!</p>
          <p className='form_subtitle' >POUND Beta Testers are committed to contributing in the development of the best fitness app designed specifically for gamers.</p>
        </Col>
      </Row>

      {/* Part 2: Input Fields */}
      <Form>
        <Row className="justify-content-center my-2">
          <Col xs={6} md={6} style={{ paddingRight: "5px" }}>
            <Form.Group controlId="first_name">
              <Form.Control name="first_name" style={{ margin: 0 }} className='input' type="text" placeholder="First name" value={state?.first_name} onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col xs={6} md={6} style={{ paddingLeft: "5px" }}>
            <Form.Group controlId="last_name">
              <Form.Control name='last_name' className='input' type="text" placeholder="Last name" value={state?.last_name} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center ">
          <Col md={12}>
            <Form.Group  controlId="email">
              <Form.Control name="email" className='input' type="email" placeholder="Email" value={state?.email} onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        {/* Part 3: Game Options */}
        <Row  >
          <Col>
            <p className='form_categories_title'>What games do you play?</p >
            <Form className='custom-scroll' >
              {/* Game Options */}
              {[
                "League of Legends",
                "Call of Duty",
                "Fortnite",
                "Dota 2",
                "Valorant",
                "World of Warcraft",
                "Overwatch 2",
                "Apex Legends",
                "Diablo 4",
                "Genshin Impact",
                "Halo Infinite",
                "Counter-Strike",
                "Minecraft",
                "Rocket League",
                "Rainbow Six Siege",
                "Hearthstone",
                "Final Fantasy",
                "New Worlds",
                "Warframe",
                "Other"
              ].map((game, index) => (
                <div style={{ minWidth: "50%", fontSize: "14px", textAlign: "left", color: "rgba(255,255,255,.6)" }} key={index}>
                  <Form.Check
                    checked={!!state?.gamesToplay && state?.gamesToplay?.includes(game)}
                    type="checkbox"
                    id={`game-${index}`}
                    className='custom-control custom-checkbox'
                    label={game}
                    inline
                    onChange={() => handleCheckboxChange(game)}
                  />
                </div>
              ))}
            </Form>
          </Col>
        </Row>

        {/* Part 4: Continue Button */}
        <Row className="justify-content-center mt-3">
          <Col md={12}>
            <Button type='submit' className='button w-100' block onClick={handleContinue} disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" className="mr-2" /> : "Submit"}

            </Button>
          </Col>
        </Row>
      </Form>

      {/* Error message display */}
      {error && (
        <Row className="justify-content-center mt-3">
          <Col md={12}>
            <p className="text-danger">{error}</p>
          </Col>
        </Row>
      )}
      {/*
         <div className='form_container' style={{ display:`${showMessage ? "flex"  :"none"}` ,inset: 0, position: "absolute", paddingInline:"25px",  flexDirection:"column", justifyContent: "center",}}>
        <p className='form_title'>
          Thank your for applying
          to join the POUND
          Team of Beta Testers.
        </p>
        <p className='form_subtitle' >
          We will contact you via email with a response as we
          gear up for the launch of POUND Beta.
        </p>
      </div> */}
    </Container>
  );
};

export default RegisterForm;
