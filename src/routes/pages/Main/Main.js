import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Mainpage } from 'domain/main';

const Main = () => {
  return (
    <Routes>
      <Route path = "/" element={<Mainpage/>}/>
    </Routes>
  );
};

export default Main;
