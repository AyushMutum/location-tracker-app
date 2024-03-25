import React, { useState, useContext } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

import {AuthContext} from './../context/AuthContext'
import {BASE_URL} from './../utils/config'


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
  margin-top: 10px;
`;

const Navigation = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 0px;
  text-align: center;
  margin-left: 50px;
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

const { dispatch } = useContext(AuthContext);
const navigate = useNavigate();
 

  const handleSubmit = async(e) => {
    e.preventDefault();

    dispatch({type:'LOGIN_START'});

  try{
   
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'post',
      headers:{
        'content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(email, password),
  })
    const result = await res.json();
  if(!res.ok) alert(result.message);
  console.log(result.data)

    dispatch({type: 'LOGIN_SUCCESS', payload: result.data});
    navigate('/')


}catch(err){
  dispatch({type: 'LOGIN_FAILURE', payload: err.message});
  }
  };

  return (
    <Container>
      <Top>
        <h2>Login</h2>
      </Top>
      <Form onSubmit={handleSubmit}>
        

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
        <Account htmlFor="New">Don't Have An Account?</Account>
        <Navigation>
          <NavLinks>
            <Reg to="/sign-up">Click Here</Reg>
          </NavLinks>
        </Navigation>
      </Form>
    </Container>
  );
};

export default Register;
