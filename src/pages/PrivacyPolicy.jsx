import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './components/Footer.jsx';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import NavBar from './components/Navbar.jsx';
const PrivacyPolicy = () =>
{
  const location = useLocation();
  useEffect(() =>
  {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <div className='main_div' >
      <NavBar />

      {/* Second Row: Two Texts Vertically Aligned */}
      <Container style={{ paddingTop: 100, color: "rgba(255,255,255,0.6)" }} >
        <p className='paragraph_privacy_Policy' style={{ fontWeight: 800, color: "rgba(255,255,255,0.6)" }}>POUND Gaming Privacy Policy</p>
        <br />
        <p className='paragraph_privacy_Policy' style={{ color: "rgba(255,255,255,0.6)" }}>At POUND Gaming, our mission is to enhance your gaming experience while respecting your privacy. We are committed to being transparent about how we collect, use, and share your personal information. We take your privacy seriously and are dedicated to protecting it.
          <br />
          <ol className='paragraph_privacy_Policy'>
            <br />
            <li>
              <span style={{ fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>Control Over Personal Data</span><br /><br />
              At POUND Gaming, we believe that you should have control over your personal data:
              <br />

              <ul>

                <li style={{ color: "rgba(255,255,255,0.6)" }}>We will delete your personal data upon request, especially if you decide to cancel your subscription.</li>
                <li style={{ color: "rgba(255,255,255,0.6)" }}>We will provide you access to your personal data upon request.</li>
                <li style={{ color: "rgba(255,255,255,0.6)" }}>Our Privacy Policy details how we share personal data. We will not share your personal data with third parties without your consent, except as required by law.</li>
              </ul>
            </li>
            <br />
            <li>
              <span style={{ fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>  Limited Access by POUND Gaming Employees</span> <br /><br />
              Your privacy is a priority:
              <br />
              <ul>
                <li style={{ color: "rgba(255,255,255,0.6)" }}>

                  Only authorized POUND Gaming employees can access your personal data, and only when necessary to provide you with services or support.
                </li>
                <li style={{ color: "rgba(255,255,255,0.6)" }}>

                  We maintain logs of who accesses personal data and when, and we regularly review access logs to prevent unauthorized access.
                </li>
                <li style={{ color: "rgba(255,255,255,0.6)" }}>

                  Employee access to personal data is strictly on a need-to-know basis.
                </li>
              </ul>
            </li>
            <br />
            <li>
              <span style={{ fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>No Sale of Personal Data</span><br /><br />
              POUND Gaming values your trust:
              <br />


              <ul>
                <li style={{ color: "rgba(255,255,255,0.6)" }}>

                  We do not sell your personal data. We use your data to enhance your gaming experience and offer personalized services.
                </li>
                <li style={{ color: "rgba(255,255,255,0.6)" }}>

                  We clarify that we may use third-party cookies and tracking technologies for improving our services and your experience.
                </li>
              </ul>

            </li>
            <br />
            <li>
              <span style={{ fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>Use of Aggregated or De-Identified Data</span><br /><br />
              Improving gaming performance:
              <br />
              <ul>
                <li style={{ color: "rgba(255,255,255,0.6)" }}>

                  We collect data such as game activity, duration, and other relevant metrics. We use this data in an aggregated or de-identified form to understand gaming trends and improve our services.
                </li>
                <li style={{ color: "rgba(255,255,255,0.6)" }}>

                  We are committed to advancing gaming performance while maintaining your privacy.
                </li>
              </ul>

            </li>
            <br />
            <li>
              <span style={{ fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>Handling Third-Party Requests for Data</span> <br /><br />
              Protecting your data from third parties:
              <br />
              <ul>
                <li style={{ color: "rgba(255,255,255,0.6)" }}>

                  POUND Gaming will not voluntarily disclose your data to governmental entities or civil litigants without a legally-binding request.
                </li>
                <li style={{ color: "rgba(255,255,255,0.6)" }}>

                  We will inform you if a third party requests your data, subject to legal constraints.
                </li>
                <li style={{ color: "rgba(255,255,255,0.6)" }}>

                  We will contest requests for data that we believe are overbroad, unclear, or inappropriate.
                </li>
              </ul>

            </li>
            <br />
            <li style={{ color: "rgba(255,255,255,0.6)" }}>
              <span style={{ fontWeight: 700, color: "rgba(255,255,255,0.6)" }}> Commitment to Privacy </span><br /><br />
              Your trust is important to us, and we are committed to continuously improving our services while respecting your privacy. We invite you to review this Privacy Policy regularly for updates.
              <br />
              <br />
              For further information or if you have any questions about our privacy practices, please contact us at team@poundgaming.com.
            </li>
          </ol>
        </p>
      </Container>

      {/* Last Section: Image and Form */}

      <Row >
        <Col md={12}>
          <Footer />
        </Col>
      </Row>
      {/* </Container>  */}
    </div>
  );
};

export default PrivacyPolicy;
