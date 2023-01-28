import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router";
require("dotenv").config();

const RedirectForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [cookies, setCookie] = useCookies(["loginkey"]);

  // 카카오 로그인 로직
  useEffect(() => {
    const authorizationCode = new URLSearchParams(location.search).get("code");

    if (authorizationCode) {
      (async () => {
        const resWithToken = await axios
          .post(
            `https://kauth.kakao.com/oauth/token`,
            {
              grant_type: "authorization_code",
              client_id: process.env.REACT_APP_REST_API_KEY,
              redirect_uri: process.env.REACT_APP_REDIRECT_URI,
              code: authorizationCode,
            },
            {
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded;charset=utf-8",
              },
            }
          )
          .then((res) => {
            if (res.status === 200) return res;
          })
          .catch((err) => console.log(err));

        await axios
          .post(`${process.env.REACT_APP_SERVER}/api/auth/kakao/login`, {
            accessToken: resWithToken.data.access_token,
          })
          .then((res) => {
            console.log(res);
            if (res.status === 201) {
              enqueueSnackbar("Surround에 오신 것을 환영합니다", {
                variant: "info",
              });
              setCookie("loginkey", res.data.accessToken, { path: "/" });
              // setCookie("name", res.data.userId, { path: "/" });
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
      })();
    }
  }, []);

  return <div>Redircting...</div>;
};

export default RedirectForm;
