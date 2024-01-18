import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

const ToastNotification = ({ show, onClose, type, message }) => {
  return (
    <Toast color='primary' style={{zIndex:10000 ,  background:"black", position:"fixed" , top:60 , right:10}} onClose={onClose} show={show} delay={5000} autohide>
      <Toast.Header style={{background:`${type==="success" ? "#80ed99" :"#bf0603"}`}}>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong  style={{color:"white"}} className="me-auto">{type.charAt(0).toUpperCase() + type.slice(1)}</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

// const ToastExample = () => {
//   const [showToast, setShowToast] = useState(false);
//   const [toastType, setToastType] = useState('success');
//   const [toastMessage, setToastMessage] = useState('');

//   const showToastNotification = (type, message) => {
//     setToastType(type);
//     setToastMessage(message);
//     setShowToast(true);
//   };

//   return (
//     <Row>
//       <Col xs={6}>
//         <ToastNotification  show={showToast} onClose={() => setShowToast(false)} type={toastType} message={toastMessage} />
//       </Col>
//       <Col xs={6}>
//         <Button
//           onClick={() => {
//             showToastNotification('success', 'This is a success message!');
//           }}
//         >
//           Show Success Toast
//         </Button>
//         <Button
//           variant="danger"
//           onClick={() => {
//             showToastNotification('error', 'This is an error message!');
//           }}
//         >
//           Show Error Toast
//         </Button>
//       </Col>
//     </Row>
//   );
// };

export default ToastNotification;
