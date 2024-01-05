import React, { useState } from "react";
import { Container, Row, Col, Form, Modal, Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [redirectToHome, setRedirectToHome] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(validatePassword(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      setShowErrorModal(false);
      setShowSuccessModal(true);
    } else {
      setShowErrorModal(true);
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Email not valid";
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    return !passwordRegex.test(password)
      ? ""
      : "Password must be alphanumeric and more then 8 characters";
  };

  const validateForm = () => {
    let isValid = true;

    if (!email.trim() || !password.trim()) {
      setEmailError("Email must be filled");
      setPasswordError("Password must be filled");
      isValid = false;
    } else {
      setEmailError(validateEmail(email));
      setPasswordError(validatePassword(password));

      if (emailError || passwordError) {
        isValid = false;
      }
    }

    return isValid;
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setRedirectToHome(true);
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  return (
    <div className="login-container w-100 h-100">
      <Container className="border p-4 position-border">
        <Row>
          <Col md={6}>
            <img
              src={require("../Asset/icon.png")}
              alt="Image Not Found!"
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <Form.Text className="text-danger">{emailError}</Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <Form.Text className="text-danger">{passwordError}</Form.Text>
              </Form.Group>

              <button className="btn-login">Login</button>
            </Form>

            <p className="mt-3">
              Don't have an account? <Link to="/register">Register here</Link>
            </p>
          </Col>
        </Row>
        <Modal show={showSuccessModal} onHide={handleCloseSuccessModal}>
          <Modal.Header closeButton>
            <Modal.Title>Login Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Selamat datang, {email}</p>
            <p>Anda telah berhasil Login</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-success" onClick={handleCloseSuccessModal}>
              Continue Shopping
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showErrorModal} onHide={handleCloseErrorModal}>
          <Modal.Header closeButton>
            <Modal.Title>Login Failed</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Terdapat kesalahan pada formulir. Silakan periksa kembali.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleCloseErrorModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {redirectToHome && <Navigate to="/" />}
      </Container>
    </div>
  );
}

export default LoginPage;
