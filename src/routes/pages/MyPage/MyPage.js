import React from "react";
import { Routes, Route } from 'react-router-dom';
import { MypageContainer } from "domain/mypage";

const MyPage = () => {
  return (    
  <Routes>
    <Route path = "/" element={<MypageContainer/>}/>
  </Routes>
  );
};

export default MyPage;
