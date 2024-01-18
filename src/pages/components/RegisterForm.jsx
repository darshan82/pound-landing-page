import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "../../App.css";
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase';

const RegisterForm = () => {
  // State to store input values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    categories: [],
  });

  // State to store error message
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleContinue = async (e) => {
    e.preventDefault()
    // Check if required fields are filled
    if (!formData.firstName) {
      setError('Please add your first name.');
      return;
    }
  
    if (!formData.lastName) {
      setError('Please add your last name.');
      return;
    }
  
    if (!formData.email) {
      setError('Please add your email address.');
      return;
    }
  
    // Check if email is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
  
    if (formData.categories.length === 0) {
      setError('Please select at least one category.');
      return;
    }
  
    // All required fields are filled, proceed to add the document
    try {
      const docRef = await addDoc(collection(db, "users"), formData);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setError('');
  };
  

  // Function to handle checkbox changes
  const handleCheckboxChange = (game) => {
    setFormData({
      ...formData,
      categories: formData.categories.includes(game)
        ? formData.categories.filter((category) => category !== game)
        : [...formData.categories, game],
    });
  };

  return (
    <Container className='form_container'>
      {/* Part 1: Text Titles */}
      <Row className="px-4">
        <Col>
          <p className='form_title' >Join the team of testers!</p>
          <p className='form_subtitle' >POUND Beta Testers are committed to contribute in the development of the best fitness app designed specifically for gamers.</p>
        </Col>
      </Row>

      {/* Part 2: Input Fields */}
      <Form>
        <Row className="justify-content-center mb-2">
          <Col xs={6} md={6}>
            <Form.Group controlId="firstName">
              <Form.Control className='input' type="text" placeholder="First name" onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
            </Form.Group>
          </Col>
          <Col xs={6} md={6}>
            <Form.Group controlId="lastName">
              <Form.Control className='input' type="text" placeholder="Last name" onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center ">
          <Col md={12}>
            <Form.Group controlId="email">
              <Form.Control className='input' type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </Form.Group>
          </Col>
        </Row>

      {/* Part 3: Game Options */}
      <Row  >
        <Col>
          <p className='form_categories_title'>What games do you play?</p >
          <Form className='form_category_container custom-scroll' >
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
              <div style={{ minWidth: "50%", fontSize: "14px", textAlign: "left", color: "grey" }} key={index}>
                <Form.Check
                  type="checkbox"
                  id={`game${index}`}
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
          <Button  type='submit' className='button w-100' block onClick={handleContinue}>
            Continue
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
    </Container>
  );
};

export default RegisterForm;
