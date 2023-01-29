import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loginform } from "components/sign";

require("dotenv").config();

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [cookies, setCookie] = useCookies(["loginkey"]);
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChangeLogin = (event) => {
    let changeLogin = { ...login };
    changeLogin[event.target.name] = event.target.value;
    setLogin(changeLogin);
  };

  const handleClickLogin = async () => {
    await axios
      .post(`${process.env.REACT_APP_SERVER}/api/auth/signin`, {
        email: login.email,
        password: login.password,
      })
      .then((res) => {
        if (res.status.toString().startsWith("2")) {
          enqueueSnackbar("Surround에 오신 것을 환영합니다", {
            variant: "info",
          });
          setCookie("loginkey", res.data.accessToken, { path: "/" });
          // setCookie("name", res.data.Name, { path: "/" });
          navigate("/");
        } else {
          enqueueSnackbar(`아이디/비밀번호를 다시 확인해주세요`, {
            variant: "error",
          });
        }
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <Loginform
      login={login}
      handleChangeLogin={handleChangeLogin}
      handleClickLogin={handleClickLogin}
    />
  );
};

export default Login;
