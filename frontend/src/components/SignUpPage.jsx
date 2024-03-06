import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Top = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 350px;
  margin-left: 200px;
  margin-right: -450px;
`;

const Form = styled.form`
  width: 400px;
  padding: 40px;
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 7px;
  margin-top: -15px;
`;

const Input = styled.input`
  width: 400px;
  padding: 8px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  width: 420px;
  padding: 10px 15px;
  background-color: blue;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: black;
  }
`;

const Account = styled.div`
  margin-left: 8px;
  margin-bottom: -40px;
`;

const Navigation = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 0px;
  text-align: center;
`;

const NavLinks = styled.div`
  display: flex;
  width: 5px;
  justify-content: space-between;
  margin: auto;
`;

const Reg = styled(NavLink)`
  display: block;
  text-align: center;
  margin-bottom: -25px;
  margin-right: 50px;
  color: #007bff;
  text-decoration: none;
`;

const Register = () => {
  const [email, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Top>
        <h2>Register</h2>
      </Top>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="fname">First Name</Label>
        <Input
          type="text"
          id="fname"
          value={fname}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <Label htmlFor="lname">Email Address</Label>
        <Input
          type="text"
          id="lname"
          value={lname}
          onChange={(e) => setLastName(e.target.value)}
        />

        <Label htmlFor="email">Email Address</Label>
        <Input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmailAddress(e.target.value)}
        />

        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Submit</Button>
        <Account htmlFor="New">Already have have any account?</Account>
        <Navigation>
          <NavLinks>
            <Reg to="/Register">Click Here</Reg>
          </NavLinks>
        </Navigation>
      </Form>
    </Container>
  );
};

export default Register;
