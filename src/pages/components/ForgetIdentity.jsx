import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner, Image } from 'react-bootstrap';
import "../../App.css";
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase';
import ToastNotification from './Alert';
import all_avatars from "/src/assets/Avatar_All.png"
const ForgiveIdentity = () => {

  // State to store input values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });


  // State to store categories
  const [categories, setCategories] = useState([]);
  const [showMessage , setShowMessage] = useState(false)

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

  const showAlert = () => {
    setShowMessage(true);

    // After 5 seconds, hide the div
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  // Function to handle form submission
  const handleContinue = async (e) => {
    e.preventDefault();
    

    // Check if already loading, prevent multiple submissions
    if (loading) {
      return;
    }

    // Set loading to true
    setLoading(true);

    // Check if required fields are filled
    if (!formData.firstName) {
      setError('Please add your first name.');
      setLoading(false);
      return;
    }

    if (!formData.lastName) {
      setError('Please add your last name.');
      setLoading(false);
      return;
    }

    if (!formData.email) {
      setError('Please add your email address.');
      setLoading(false);
      return;
    }

    if (categories.length === 0) {
      setError('Please select at least one category.');
      setLoading(false);
      return;
    }

    // All required fields are filled, proceed to add the document
    try {
      const docRef = await addDoc(collection(db, "users"), { ...formData, categories });
      // console.log(docRef.id); 
      showToastNotification("success" , "User Registered Successfully")  
      // Additional actions after successful submission if needed
      showAlert()
      // Clear relevant form fields (firstName, lastName, email)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
      });

      // Clear categories
      setCategories([]);

      // Clear error
      setError('');
    } catch (e) {
      console.error("Error adding document: ", e);
      showToastNotification("error",'Some thing Went Wrong');
    }
    setLoading(false); 

    // Set loading to false after submission
  };

  // Function to handle checkbox changes
  const handleCheckboxChange = (game) => {
    setCategories((prevCategories) => (
      prevCategories.includes(game)
        ? prevCategories.filter((category) => category !== game)
        : [...prevCategories, game]
    ));
  };

  return (
    <Container className='form_container' style={{position:"relative"}}>
      {/* Part 1: Text Titles */}
      <ToastNotification
        show={showToast}
        onClose={() => setShowToast(false)}
        type={toastType}
        message={toastMessage}
      />
      <Row className="px-4">
        <Col>
          <p className='form_title' style={{fontSize:"22px"}} >Forge your digital identity to join the team of testers!</p>
          <p className='form_subtitle' >Create your player tag and personalized avatar to join</p>
        </Col>
      </Row>

      {/* Part 2: Input Fields */}
      <Form>
        <Row className="justify-content-center my-2">
            <Image height={"auto"} src={all_avatars}/>
        </Row>

        {/* Part 4: Continue Button */}
        <Row className="justify-content-center mt-3">
          <Col md={12}>
            <Button type='submit' className='button w-100' block onClick={handleContinue} disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" className="mr-2" /> : "Forge my identity"}
              
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
      </div>
    </Container>
  );
};

export default ForgiveIdentity;
