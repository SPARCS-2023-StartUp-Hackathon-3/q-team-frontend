import React from "react";
import { CircularProgress, Link, Button, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import KakaoLogo from "img/kakao_logo.png";
require("dotenv").config();

const theme = createTheme({
  palette: {
    secondary: { main: "#A4A4A4" },
    warning: { main: "#D34658" },
  },
});

const Loginform = (props) => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        className="sign_background"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          container
          className="sign_container"
          xs={12}
          sm={10}
          md={10}
          lg={9}
          xl={8}
        >
          <Grid item xs={12} sm={6} md={6} lg={5} xl={4}>
            <Grid className="login_div">
              {/* <img src={logo} alt='logo'/> */}
              <h1>로그인</h1>
              <input
                type="email"
                name="email"
                placeholder="이메일을 입력해 주세요"
                value={props.login.email}
                onChange={props.handleChangeLogin}
              />
              <input
                type="password"
                name="password"
                placeholder="비밀번호를 입력해 주세요"
                value={props.login.password}
                onChange={props.handleChangeLogin}
              />
              <Button
                color="warning"
                className="login_button"
                variant="outlined"
                disabled={
                  props.login.email && props.login.password ? false : true
                }
                onClick={props.handleClickLogin}
              >
                로그인
              </Button>
              <p>SNS 계정으로 간편하게 로그인하세요</p>
              <a
                href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`}
                className="kakao_login"
                // onClick={props.kakaoLogin}
              >
                <img src={KakaoLogo} alt="kakao logo" />
                <span>카카오톡으로 로그인</span>
              </a>
              <p>
                아직 회원이 아니신가요?{" "}
                <Link
                  onClick={() => {
                    navigate("/login/signup");
                  }}
                >
                  회원가입
                </Link>
              </p>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={7}
            xl={8}
            justifyContent="center"
            alignItems="center"
          >
            <Grid className="sign_info">
              <h3>Upload and share your music</h3>
              <h3>Follow your favorite artists</h3>
              <h3>Create and publish playlists</h3>
              <h3>And much more</h3>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>

    // <Grid container justifyContent='center'>
    //     <Grid xs={12} sm={9} md={6} lg={4.8} xl={3.5} className='login_div'>
    //     {/* <img src={logo} alt='logo'/> */}
    //     <h1>로그인</h1>

    //     <input
    //         type='email'
    //         name='email'
    //         placeholder='이메일을 입력해 주세요'
    //         value={props.login.email}
    //         onChange={props.handleChangeLogin}
    //     />
    //     <input
    //         type='password'
    //         name='password'
    //         placeholder='비밀번호를 입력해 주세요'
    //         value={props.login.password}
    //         onChange={props.handleChangeLogin}
    //     />
    //     <Button color='warning' className='login_button' variant="outlined" disabled={props.login.email && props.login.password ?false:true} onClick={props.handleClickLogin}>로그인</Button>
    //     <p>SNS 계정으로 간편하게 로그인하세요</p>
    //     <div className='kakao_login' onClick={props.kakaoLogin}>
    //         <img src={KakaoLogo} alt='kakao logo' />
    //         <span>카카오톡으로 로그인</span>
    //     </div>
    //     <p>아직 회원이 아니신가요? <Link onClick={()=>{navigate('/login/signup')}}>회원가입</Link></p>
    //     </Grid>
    // </Grid>
    // </ThemeProvider>
  );
};

export default Loginform;
