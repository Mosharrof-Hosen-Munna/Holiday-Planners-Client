import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Col, Button, Container, Form, Row } from "react-bootstrap";
import logo from "../../images/logo.png";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const {
    handleGoogleSignIn,
    handleGithubSignIn,
    handleEmailPasswordRegister,
    setUserName,
    setUser,
    setLoading,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const signInGoogle = () => {
    setLoading(true);
    handleGoogleSignIn()
      .then((result) => {
        console.log(result.user);
        history.push(location.state?.from || "/home");
      })
      .catch((error) => console.log(error.message))
      .finally(() => setLoading(false));
  };

  const validationRegister = (name, password) => {
    const errorMessage = {};
    if (name.length < 5 || name.length > 15) {
      errorMessage.name = "Name Must be between 5 to 15 characters";
    }
    if (password.length < 6 || password.length > 14) {
      errorMessage.password = "Password Must be between 5 to 14 characters";
    }
    return errorMessage;
  };

  const signInGithub = () => {
    setLoading(true);
    handleGithubSignIn()
      .then((result) => {
        history.push(location.state?.from || "/home");
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  const handleEmailRegistration = (e) => {
    setLoading(true);
    e.preventDefault();

    const errorMessage = validationRegister(name, password);

    if (errorMessage.name || errorMessage.password) {
      setError(errorMessage);
      return;
    }
    handleEmailPasswordRegister(email, password, name)
      .then((result) => {
        setUserName(name);
        const LoginUser = result.user;
        setUser(LoginUser);
        // emailVerification();
        history.push(location.state?.from || "/home");
        setError({});
      })
      .catch((e) => {
        setError({ email: "User already exits this email" });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      style={{ minHeight: "650px" }}
      className="bg-transparent d-flex py-3 align-items-center"
    >
      <Container>
        <Row lg={1} xs={1} className="g-3">
          <Col className="w-lg-50 mx-auto w-sm-100">
            <div className="rounded rounded-3 shadow-lg bg-light p-3 py-5 p-lg-4 py-xl-5">
              <div className="text-center">
                <img className="img-fluid" src={logo} alt="" />
              </div>
              <h2 className="text-navy mb-3 text-center">
                <FontAwesomeIcon
                  className="fa-1x text-info me-3"
                  icon={faLock}
                />
                Register
              </h2>
              <Form onSubmit={handleEmailRegistration}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter Your Name"
                    required
                  />
                  {error.name && (
                    <Form.Text id="formName" className="text-danger">
                      {error.name}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                  {error.email && (
                    <Form.Text id="formName" className="text-danger">
                      {error.email}
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    required
                  />
                  {error.password && (
                    <Form.Text id="formName" className="text-danger">
                      {error.password}
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button className="w-100" variant="primary" type="submit">
                  Register
                </Button>
              </Form>
              <div className="divider text-center my-3 fs-5">
                <span className="divider-content">Or</span>
              </div>
              <Row lg={2} xs={1} className="g-3">
                <Col>
                  <Button
                    onClick={signInGoogle}
                    variant="info"
                    className="w-100 text-white fw-bold"
                  >
                    <FontAwesomeIcon
                      className="fa-1x text-white me-2"
                      icon={faGoogle}
                    />
                    Google Sign In
                  </Button>
                </Col>
                <Col>
                  <Button
                    onClick={signInGithub}
                    variant="primary"
                    className="w-100 fw-bold"
                  >
                    <FontAwesomeIcon
                      className="fa-1x text-white me-2"
                      icon={faGithub}
                    />
                    Github Sign In
                  </Button>
                </Col>
              </Row>
              <div className="text-center mt-3">
                Already have an account? <Link to="/account/login">Log In</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
