import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../config';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import "../../App.css";
import ToastNotification from './Alert';
import axios from 'axios';
import ReactGA from 'react-ga';
import countries from "./country.json"
const RegisterForm = ({ onNext, state, setState, setResponse }) =>
{

  useEffect(() =>
  {
    ReactGA.event({
      category: 'User Info Form screen',
      action: 'User Info Form',
      label: 'User Info Form button',
    });
  }, [])


  // const [showMessage, setShowMessage] = useState(false)

  // State to store error message
  const [error, setError] = useState('');

  // State to track loading state
  const [loading, setLoading] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');
  const [toastMessage, setToastMessage] = useState('');

  const showToastNotification = (type, message) =>
  {
    setToastType(type);
    setToastMessage(message);
    setShowToast(true);
  };


  // Function to handle form submission
  const handleContinue = (e) =>
  {
    e.preventDefault();
    // Check if already loading, prevent multiple submissions
    if (loading)
    {
      return;
    }

    // Set loading to true

    // Check if required fields are filled
    if (!state?.first_name)
    {
      setError('Please add your first name.');
      setLoading(false);
      return;
    }

    if (!state?.last_name)
    {
      setError('Please add your last name.');
      setLoading(false);
      return;
    }
    if (!state?.country)
    {
      setError('Please select your country.');
      setLoading(false);
      return;
    } if (!state?.dob)
    {
      setError('Please enter your date of birth.');
      setLoading(false);
      return;
    }





    // if (!state?.gamesToplay?.length)
    // {
    //   setError('Please select at least one game.');
    //   setLoading(false);
    //   return;
    // }

    // All required fields are filled, proceed to add the document
    setLoading(true);

    const data = state
    data.email_verified = false

    console.log(data)
    axios.post(`${API_BASE_URL}/users/website`, { ...data, location: { country: data?.country } }).then((res) =>
    {
      setResponse(res?.data?.newUser)

      // showToastNotification("success", "User Registered Successfully")
      onNext()
      setState("")
      setError("");
    }).catch((err) =>
    {

      showToastNotification("error", err?.response?.data?.message ? err?.response?.data?.message : "Some thing went Wrong");

    })

    setLoading(false);

  }

  const handleCheckboxChange = (game) =>
  {
    setState((prev) =>
    {
      return {
        ...prev,
        // gamesToplay: prev?.gamesToplay
        //   ? prev.gamesToplay.includes(game)
        //     ? prev.gamesToplay.filter((item) => item !== game)
        //     : [...prev.gamesToplay, game]
        //   : [game],
      };
    });
  };


  const handleChange = (e) =>
  {
    setState((prev) =>
    {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  return (
    <Container className='form_container' style={{ position: "relative", height: "540px" }}>
      <div style={{ height: "80%" }}>

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
          <Row className="justify-content-center my-3">
            <Col xs={6} md={6} style={{ paddingRight: "5px" }}>
              <Form.Group controlId="first_name">
                <Form.Control autocomplete="off" name="first_name" style={{ margin: 0 }} className='input' type="text" placeholder="First name" value={state?.first_name} onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col xs={6} md={6} style={{ paddingLeft: "5px" }}>
              <Form.Group controlId="last_name">
                <Form.Control autocomplete="off" name='last_name' className='input' type="text" placeholder="Last name" value={state?.last_name} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>

          <Row className="justify-content-center my-3 pl-3">
            <Col xs={12} md={12} style={{ paddingLeft: "15px" }}>
              <p style={{ fontFamily: "Montserrat, sans-serif", marginTop: 10, marginBottom: 20 }}>When is your birthday?</p>
              <Form.Group controlId="dob">
                <Form.Control
                  onClick={() => document.querySelector('input[type="date"]').click()}

                  style={{ color: state?.dob ? "" : "rgba(255, 255, 255, 0.3)" }} name='dob' className='input' type="date" placeholder="Enter your date of birth" value={undefined} onChange={handleChange} />

              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center my-3 pl-3">
            <Col xs={12} md={12} style={{ paddingLeft: "15px" }}>
              <p style={{ fontFamily: "Montserrat, sans-serif", marginTop: 10, marginBottom: 20 }}>What is your location?</p>
              <Form.Group controlId="country">
                <Form.Select style={{ color: state?.country ? "" : "rgba(255, 255, 255, 0.3)" }} value={state?.country ?? null} onChange={handleChange} placeholder="Select Country" aria-label="Default select example" name='country' className='input'>


                  <option value="" disabled style={{ color: "red" }} selected>Select your country</option>
                  {
                    countries.map(country =>
                      <option value={country?.name}>{country?.name}</option>
                    )
                  }
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {/* Part 3: Game Options */}

          {/* <Row>
            <Col>
              <p className='form_categories_title'>What games do you play?</p >
              <Form className='custom-scroll' >
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
           */}
        </Form>
      </div>
      {/* Part 4: Continue Button */}
      <Row className="justify-content-center mt-3" >
        <Col md={12}>
          <div className=" mt-3 mb-2">
            <p className="text-danger" style={{ visibility: error ? "visible" : "hidden" }}>{error || "ddsad"}</p>
          </div>
          <Button type='submit' className='button w-100' block onClick={handleContinue} disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" className="mr-2" /> : "Submit"}

          </Button>
        </Col>
      </Row>

      {/* Error message display */}

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
