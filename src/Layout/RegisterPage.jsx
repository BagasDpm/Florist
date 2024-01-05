import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal,Button } from "react-bootstrap";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const validateUsername = () => {
    if (!username) {
      setUsernameError("Username must be filled");
    } else {
      setUsernameError("");
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setEmailError("Email not valid");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!password ) {
      setPasswordError("Password must be filled");
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be alphanumeric and more then 8 characters"
      );
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("Confirm password does not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateUsername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
    if (
      !usernameError &&
      !emailError &&
      !passwordError &&
      !confirmPasswordError
    ) {
      console.log("Data sending:", {
        username,
        email,
        password,
        confirmPassword,
      });
      showSuccessModal();
    } else {
      setShowErrorModal(true);
    }
  };

  const showSuccessModal = () => {
    setRegistrationStatus("success");
  };

  const handleCloseModal = () => {
    setRegistrationStatus(null);
    setShowErrorModal(false);
  };

  return (
    <div className="container border p-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={require("../Asset/icon-regis.png")}
            alt="Image Not Found!"
            className="img-fluid "
          />
          <img
            src={require("../Asset/icon.png")}
            alt="Image Not Found!"
            height={"50px"}
          />
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className={`form-control ${usernameError && "is-invalid"}`}
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onBlur={validateUsername}
              />
              {usernameError && (
                <div className="invalid-feedback">{usernameError}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-control ${emailError && "is-invalid"}`}
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
              />
              {emailError && (
                <div className="invalid-feedback">{emailError}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${passwordError && "is-invalid"}`}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
              />
              {passwordError && (
                <div className="invalid-feedback">{passwordError}</div>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className={`form-control ${
                  confirmPasswordError && "is-invalid"
                }`}
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={validateConfirmPassword}
              />
              {confirmPasswordError && (
                <div className="invalid-feedback">{confirmPasswordError}</div>
              )}
            </div>
            <button
              type="submit"
              className="btn-login"
              onClick={showSuccessModal}
            >
              Register
            </button>
          </form>
          <p className="mt-3">
            Have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      </div>
      <Modal show={registrationStatus === "success"} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Registrasi Berhasil</Modal.Title>
        </Modal.Header>
        <Modal.Body>Account created successfully 😁. Login Now</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showErrorModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Registrasi Gagal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Terdapat kesalahan pada formulir. Silakan periksa kembali.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RegisterPage;
