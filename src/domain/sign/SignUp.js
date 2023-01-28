import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import axios from "axios";
import { Signupform } from 'components/sign';

const Signup = () => {
  const [cookies, setCookie,] = useCookies(['loginkey']);
  const navigate = useNavigate();

  const [signup, setSignup] = useState({
    email: '',
    nickname: '',
    password: '',
    passwordCheck: '',
  });

  const handleChangeSignup = (event) => {
    let changeSignup = { ...signup };
    changeSignup[event.target.name] = event.target.value;
    setSignup(changeSignup);
  };

  const handleClickSignUp = async () => {
    await axios ({
        method: 'post',
        url: `/api/signup/${cookies.loginkey}`,
        data: {
            email: signup.email,
            nickname: signup.nickname,
            password: signup.password,
        }
    })
    .then((res)=>{
        console.log(res);
        setCookie("loginkey", res.data.Id, { path: '/' });   //res.data.Id
        navigate('/');
    }).catch((Error)=>{
        console.log(Error);
    })
  }

  return (
    <Signupform
        signup={signup}
        handleChangeSignup={handleChangeSignup}
        handleClickSignUp={handleClickSignUp}
    />
  )
};

export default Signup;