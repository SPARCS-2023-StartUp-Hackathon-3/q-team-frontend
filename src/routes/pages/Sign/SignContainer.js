import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login, SignUp } from 'domain/sign';

const SignContainer = () => {
  return (
    <Routes>
        <Route path = "/" element={<Login/>}/>
        <Route path = "/signup" element={<SignUp/>}/>
    </Routes>
  )
};

export default SignContainer;