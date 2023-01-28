import React,{ useState } from 'react';
import { useSnackbar } from 'notistack';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Loginform } from 'components/sign';
import { Topbar } from 'components/layout';

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [cookies, setCookie,] = useCookies(['loginkey']);
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });

  const handleChangeLogin = (event) => {
    let changeLogin = { ...login };
    changeLogin[event.target.name] = event.target.value;
    setLogin(changeLogin);
  };

  const handleClickLogin = async () => {
    await axios ({
        method: 'post',
        url: `/api/login/${cookies.loginkey}`,
        data: {
            email: login.email,
            password: login.password,
        }
    })
    .then((res)=>{
        console.log(res);
        if (res.data.login === false) {
            enqueueSnackbar(`아이디/비밀번호를 다시 확인해주세요`, { variant: 'error' });
        }
        else if (res.data.login === true) {
            enqueueSnackbar('Surround에 오신 것을 환영합니다', { variant: 'info' });
            setCookie("loginkey", res.data.Id, { path: '/' });
            setCookie("name", res.data.Name, { path: '/' });              //
            navigate('/')
        }
    }).catch((Error)=>{
        console.log(Error);
    })
  }

  return (
    <>
      <Topbar/>
      <Loginform
          login={login}
          handleChangeLogin={handleChangeLogin}
          handleClickLogin={handleClickLogin}
      />
    </>
  )
};

export default Login;