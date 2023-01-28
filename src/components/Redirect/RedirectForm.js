import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate, useParams } from "react-router";

const RedirectForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [cookies, setCookie] = useCookies(["loginkey"]);

  // 카카오 로그인 로직
  useEffect(() => {
    const kakaoToken = new URLSearchParams(location.search).get("code");

    if (kakaoToken) {
      (async () => {
        await axios
          .post(`${process.env.REACT_APP_SERVER}/api/auth/kakao/login`, {
            accessToken: kakaoToken,
          })
          .then((res) => {
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
          });
      })();
    }
  }, []);

  return <div>Redircting...</div>;
};

export default RedirectForm;
