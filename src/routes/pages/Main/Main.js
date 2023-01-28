import React from "react";
import { Routes, Route } from 'react-router-dom';
import { MainContainer } from 'domain/main';

const Main = () => {
  return (
    <Routes>
      <Route path = "/" element={<MainContainer/>}/>
    </Routes>
  );
};

export default Main;
