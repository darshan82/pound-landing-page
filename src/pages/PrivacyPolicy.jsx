import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './components/Footer.jsx';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
const PrivacyPolicy = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <div className='main_div' >
      {/* <NavBar /> */}

      {/* Second Row: Two Texts Vertically Aligned */}
      <Container style={{ paddingTop: 100 }} >
        <p className='paragraph_privacy_Policy' style={{ fontWeight: 800 }}>POUND Gaming Privacy Policy</p>
        <br />
        <p className='paragraph_privacy_Policy'>At POUND Gaming, our mission is to enhance your gaming experience while respecting your privacy. We are committed to being transparent about how we collect, use, and share your personal information. We take your privacy seriously and are dedicated to protecting it.
          <br />
          <ol className='paragraph_privacy_Policy'>
            <br />
            <li>
              <span style={{ fontWeight: 700 }}>Control Over Personal Data</span><br />
              At POUND Gaming, we believe that you should have control over your personal data:
              <ul>

                <li>We will delete your personal data upon request, especially if you decide to cancel your subscription.</li>
                <li>We will provide you access to your personal data upon request.</li>
                <li>Our Privacy Policy details how we share personal data. We will not share your personal data with third parties without your consent, except as required by law.</li>
              </ul>
            </li>
            <br />
            <li>
              <span style={{ fontWeight: 700 }}>  Limited Access by POUND Gaming Employees</span> <br />
              Your privacy is a priority:
              <ul>
                <li>

                  Only authorized POUND Gaming employees can access your personal data, and only when necessary to provide you with services or support.
                </li>
                <li>

                  We maintain logs of who accesses personal data and when, and we regularly review access logs to prevent unauthorized access.
                </li>
                <li>

                  Employee access to personal data is strictly on a need-to-know basis.
                </li>
              </ul>
            </li>
            <br />
            <li>
              <span style={{ fontWeight: 700 }}>No Sale of Personal Data</span><br />
              POUND Gaming values your trust:
              <ul>
                <li>

                  We do not sell your personal data. We use your data to enhance your gaming experience and offer personalized services.
                </li>
                <li>

                  We clarify that we may use third-party cookies and tracking technologies for improving our services and your experience.
                </li>
              </ul>

            </li>
            <br />
            <li>
              <span style={{ fontWeight: 700 }}>Use of Aggregated or De-Identified Data</span><br />
              Improving gaming performance:
              <ul>
                <li>

                  We collect data such as game activity, duration, and other relevant metrics. We use this data in an aggregated or de-identified form to understand gaming trends and improve our services.
                </li>
                <li>

                  We are committed to advancing gaming performance while maintaining your privacy.
                </li>
              </ul>

            </li>
            <br />
            <li>
              <span style={{ fontWeight: 700 }}>Handling Third-Party Requests for Data</span> <br />
              Protecting your data from third parties:
              <ul>
                <li>

                  POUND Gaming will not voluntarily disclose your data to governmental entities or civil litigants without a legally-binding request.
                </li>
                <li>

                  We will inform you if a third party requests your data, subject to legal constraints.
                </li>
                <li>

                  We will contest requests for data that we believe are overbroad, unclear, or inappropriate.
                </li>
              </ul>

            </li>
            <br />
            <li>
              <span style={{ fontWeight: 700 }}> Commitment to Privacy </span><br />
              Your trust is important to us, and we are committed to continuously improving our services while respecting your privacy. We invite you to review this Privacy Policy regularly for updates.
              <br/>
              <br/>
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
