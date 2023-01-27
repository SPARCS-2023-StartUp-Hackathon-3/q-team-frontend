import React from 'react';
import { Grid, Button, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
    components: {
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: '#A4A4A4',
            '&.Mui-checked': {
              color: '#D34658'
            }
          }
        }
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: '#757575',
            backgroundColor: '#FFFFFF',
            '&.Mui-focused': {
              color: '#D34658'
            }
          }
        }
      }
    },
    palette: {
      secondary: { main: '#757575' },
      warning: { main: '#D34658' }
    },
  });

const Signupform = (props) => {

  return (
    <ThemeProvider theme={theme}>
      <Grid container className='sign_background' justifyContent='center' alignItems='center'>
        <Grid item container className='sign_container' xs={12} sm={10} md={9} lg={8} xl={8}>
            <Grid item xs={12} sm={6} md={5} lg={4} xl={4}>
                <Grid className='signup_div'>
                    {/* <img src={logo} alt='logo' /> */}
                    <h1>회원가입</h1>

                    <FormControl sx={{ width: '75%', marginRight: '0%', marginBottom: '16px' }}>
                        <InputLabel shrink>이메일</InputLabel>
                        <OutlinedInput className='signup_input'
                        sx={{ height: '48px' }}
                        color='warning'
                        label='이메일'
                        type='email'
                        name='email'
                        placeholder='이메일을 입력해 주세요'
                        value={props.signup.email}
                        onChange={props.handleChangeSignup}
                        />
                    </FormControl>
                    <FormControl sx={{ width: '75%', marginRight: '0%', marginBottom: '16px' }}>
                        <InputLabel shrink>비밀번호</InputLabel>
                        <OutlinedInput className='signup_input'
                        sx={{ height: '48px' }}
                        color='warning'
                        label='비밀번호'
                        type='password'
                        name='password'
                        placeholder='비밀번호를 입력해 주세요'
                        value={props.signup.password}
                        onChange={props.handleChangeSignup}
                        />
                    </FormControl>
                    <FormControl sx={{ width: '75%', marginRight: '0%', marginBottom: '16px' }}>
                        <InputLabel shrink>비밀번호 확인</InputLabel>
                        <OutlinedInput className='signup_input'
                        sx={{ height: '48px' }}
                        color='warning'
                        label='비밀번호 확인'
                        type='password'
                        name='passwordCheck'
                        placeholder='비밀번호를 한번 더 입력해 주세요'
                        value={props.signup.passwordCheck}
                        onChange={props.handleChangeSignup}
                        />
                    </FormControl>

                    <FormControl sx={{ width: '75%', marginRight: '0%', marginBottom: '16px' }}>
                        <InputLabel shrink>닉네임</InputLabel>
                        <OutlinedInput className='signup_input'
                        sx={{ height: '48px' }}
                        color='warning'
                        label='닉네임'
                        type='text'
                        name='nickname'
                        placeholder='닉네임을 입력해 주세요'
                        value={props.signup.major}
                        onChange={props.handleChangeSignup}
                        />
                    </FormControl>

                    <Button color='warning' variant="outlined" disabled={props.state} onClick={props.handleClickSignUp}>회원가입</Button>
                    </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={7} lg={8} xl={8} justifyContent='center' alignItems='center'>
                <Grid className='sign_info'>
                    <div>Upload and share your music</div>
                    <div>Follow your favorite artists</div>
                    <div>Create and publish playlists</div>
                    <div>And much more</div>
                </Grid>
            </Grid>
        </Grid>

        
      </Grid>
    </ThemeProvider>
  )
};

export default Signupform;