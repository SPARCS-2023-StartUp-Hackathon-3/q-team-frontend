import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Signupform } from "components/sign";
import { useSnackbar } from "notistack";
require("dotenv").config();

const Signup = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [cookies, setCookie] = useCookies(["loginkey"]);
  const navigate = useNavigate();

  const [signup, setSignup] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });

  const handleChangeSignup = (event) => {
    let changeSignup = { ...signup };
    changeSignup[event.target.name] = event.target.value;
    setSignup(changeSignup);
  };

  const handleClickSignUp = async () => {
    console.log(process.env.REACT_APP_SERVER);
    await axios
      .post(`${process.env.REACT_APP_SERVER}/api/auth/signup`, {
        email: signup.email,
        nickname: signup.nickname,
        password: signup.password,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          setCookie("loginkey", res.data.accessToken, { path: "/" }); //res.data.Id
          enqueueSnackbar("회원가입에 성공했습니다.", {
            variant: "info",
          });
          navigate("/");
        } else {
          enqueueSnackbar(`회원가입에 실패했습니다.`, {
            variant: "error",
          });
        }
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <Signupform
      signup={signup}
      handleChangeSignup={handleChangeSignup}
      handleClickSignUp={handleClickSignUp}
    />
  );
};

export default Signup;
