import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

const CustomModal = ({ show, onHide, type, message }) => {
  const [modalShow, setModalShow] = useState(show);

  useEffect(() => {
    setModalShow(show);

    const timer = setTimeout(() => {
      setModalShow(false);
      onHide();
    }, 5000);

    return () => clearTimeout(timer);
  }, [show, onHide]);

  const getModalStyle = () => {
    let style = {};
    if (type === 'success') {
      style = { backgroundColor: 'black', color: 'white' };
    } else if (type === 'error') {
      style = { backgroundColor: 'black', color: 'white' };
    }

    return { borderRadius: '15px', padding: '20px', ...style, minHeight: '150px' };
  };

  const getIcon = () => {
    if (type === 'success') {
      return (
        <span role="img" aria-label="success" style={{ marginRight: '8px', fontSize: '24px' }}>
          ✔️
        </span>
      );
    } else if (type === 'error') {
      return (
        <span role="img" aria-label="error" style={{ marginRight: '8px', fontSize: '24px' }}>
          ❌
        </span>
      );
    }
  };

  return (
    <Modal show={modalShow} onHide={onHide} centered>
      <Modal.Body style={getModalStyle()}>
        {getIcon()}
        <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{message}</span>
        <span
          style={{
            position: 'absolute',
            top: '15px',
            right: '20px',
            cursor: 'pointer',
            color: 'white',
            fontWeight: 'bold',
          }}
          onClick={onHide}
        >
          &times;
        </span>
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
