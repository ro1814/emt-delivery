import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { login } from "../actions/userActions";
import FormContainer from "../components/FormContainer";
import {} from '../styles/LoginStyles.css'
import {ContainerStyled} from '../styles/LoginStyles'

const LoginScreen = ({ location, history }) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  // const redirect = location.search ? location.search.split("=")[1] : "/";

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push(redirect);
  //   }
  // }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
    <ContainerStyled>
    <Container>
    <FormContainer>
      <h1>EMT-Delivery</h1>
      <h2>Log in</h2>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label> <i className="far fa-envelope iconStyles"></i>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label><i className="fas fa-lock iconStyles"></i>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className='btn btn-dark btn-block loginBtn'>
          Log in.
        </Button>
      </Form>

      {/* <Row className="py-3">
        <Col>
          Don't you have an account?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
          <i className="far fa-list-alt"></i> Register here.
          </Link>
        </Col>
      </Row> */}
    </FormContainer>
    </Container>
    </ContainerStyled>
    </>
  );
};

export default LoginScreen;
