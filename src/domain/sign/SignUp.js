import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import axios from "axios";
import { Signupform } from '../../components/sign';

const Signup = () => {
  const [cookies, setCookie,] = useCookies(['loginkey']);
  const navigate = useNavigate();

  const [signup, setSignup] = useState({
    email: '',
    nickname: '',
    password: '',
    passwordCheck: '',
  });

  const handleClickSignUp = async () => {
    await axios ({
        method: 'post',
        url: 'api/selfintro',
        data: {
            email: signup.email,
            nickname: signup.nickname,
            password: signup.password,
        }
    })
  }

  return (
    <Signupform/>
  )
};

export default Signup;