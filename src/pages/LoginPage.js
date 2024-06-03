import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = ({setAuthenticate}) => {
  const navigate = useNavigate()
  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true)
    navigate('/')
  }
  return (
    <Container className="d-flex justify-content-center">
      <Form onSubmit={(event)=>loginUser(event)}>
        <Form.Group className="mb-3 loginpage-input" controlId="formBasicEmail">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>

        <Form.Group className="mb-3 loginpage-input" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="로그인 기억하기" />
        </Form.Group>
        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
