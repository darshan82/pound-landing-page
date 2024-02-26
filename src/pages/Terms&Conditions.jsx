import React, { useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import RegisterForm from './components/RegisterForm.jsx';
import NavBar from './components/Navbar.jsx';
import Main from "../assets/Home.svg"
import Footer from './components/Footer.jsx';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

import Stepper from './components/Stepper/Stepper.jsx';
const TermsConditions = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <div className='main_div' >
      {/* <NavBar /> */}

      {/* Second Row: Two Texts Vertically Aligned */}
      <Container style={{ paddingTop: 100 }} >
        <p className='paragraph_privacy_Policy' style={{ fontWeight: 800 }}>POUND Gaming Terms of Use</p>
        <br />
        <p style={{ fontSize: "41px", fontWeight: 500 }}>PLEASE READ THESE TERMS OF USE ("AGREEMENT") CAREFULLY BEFORE USING THE SERVICES PROVIDED BY POUND GAMING, INC. ("POUND GAMING", "US", "WE", "OUR"). THIS AGREEMENT SETS FORTH THE LEGALLY BINDING TERMS AND CONDITIONS FOR YOUR USE OF THE VARIOUS SERVICES OFFERED BY POUND GAMING, INCLUDING BUT NOT LIMITED TO, ALL SOFTWARE, APPLICATIONS, CONTENT, AND GAMES (COLLECTIVELY, THE "SERVICES").
          <br /><br />
          "YOU" AND "YOUR" refer to you, as a user of the Services. If you are using the Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to this Agreement, and by accepting this Agreement, you are doing so on behalf of that organization (and all references to "you" in this Agreement refer to that organization).
          <br /><br />
          <span style={{ fontWeight: 700 }}>Acceptance of Terms:<br /></span>
          By accessing or using the Services in any manner, including, but not limited to, visiting or browsing the Services or contributing content or other materials to the Services, you agree to be bound by these terms and conditions. If you disagree with any part of the terms, then you may not access the Service.
          <ol className='paragraph_privacy_Policy'>
            <br />
            <li>
              <span style={{ fontWeight: 700 }}>Registration and Account Integrity:</span><br />
              1.1 You must create an account ("Account") to use some features of the Services. You are responsible for maintaining the confidentiality of your Account details and are fully responsible for all activities that occur under your Account.
              <br />1.2 You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              <br />1.3 POUND Gaming reserves the right to suspend or terminate your Account if any information provided during the registration process or thereafter proves to be inaccurate, not current, or incomplete.
            </li>
            <br />
            <li>
              <span style={{ fontWeight: 700 }}> Eligibility:</span> <br />
              You affirm that you are either more than 18 years of age or an emancipated minor, or possess legal parental or guardian consent, and are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations, and warranties set forth in these Terms of Use.
            </li>
            <br />
            <li>
              <span style={{ fontWeight: 700 }}>Use of Services:</span><br />
              3.1 The Services are provided for your personal and non-commercial use only.
              <br />3.2 You agree not to engage in any of the following prohibited activities: copying, distributing, or disclosing any part of the Services in any medium, including without limitation by any automated or non-automated "scraping"; using any automated system, including without limitation "robots," "spiders," "offline readers," etc., to access the Services.
              <br />3.3 We may, without prior notice, change the Services, stop providing the Services or features of the Services, or create usage limits for the Services.
            </li>
            <br />
            <li>
              <span style={{ fontWeight: 700 }}>Termination:</span><br />
              POUND Gaming may terminate or suspend access to the Services immediately, without prior notice or liability, if you breach any terms of this Agreement. Upon termination, your right to use the Services will immediately cease.
            </li>
            <br />
            <li>
              <span style={{ fontWeight: 700 }}>Changes to Terms of Use:</span> <br />
              POUND Gaming reserves the right, at its sole discretion, to modify or replace these Terms of Use at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </li>
            <br />
            <li>
              <span style={{ fontWeight: 700 }}> Contact Information: </span><br />
              If you have any questions about these Terms of Use, please contact us at team@poundgaming.com.
            </li>
          </ol>
        </p>
      </Container>


      <Row >
        <Col md={12}>
          <Footer />
        </Col>
      </Row>
      {/* </Container>  */}
    </div>
  );
};

export default TermsConditions;
