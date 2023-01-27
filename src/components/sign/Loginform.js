import React from 'react';
import { CircularProgress, Link, Button, Grid} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const theme = createTheme({
    palette: {
      secondary: { main: '#A4A4A4'},
      warning: { main: '#D34658'}
    },
  });

const Loginform = (props) => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
    <Grid container justifyContent='center'>
        <Grid xs={12} sm={9} md={6} lg={4.8} xl={3.5} className='login_div'>
        {/* <img src={logo} alt='logo'/> */}
        <h1>로그인</h1>

        <input 
            type='email' 
            name='email'
            placeholder='이메일을 입력해 주세요' 
            value={props.login.email}
            onChange={props.handleChangeLogin}
        />
        <input 
            type='password'
            name='password' 
            placeholder='비밀번호를 입력해 주세요' 
            value={props.login.password}
            onChange={props.handleChangeLogin}
        />

        <Button color='warning' className='login_button' variant="outlined" disabled={props.login.email && props.login.password ?false:true} onClick={props.handleClickLogin}>로그인</Button>
        <p>아직 회원이 아니신가요? <Link onClick={()=>{navigate('/login/signup')}}>회원가입</Link></p>
        </Grid>
    </Grid>
    </ThemeProvider>
  )
};

export default Loginform;