import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Onboarding_page from "img/Onboarding_page.png";

const Onboardingform = () => {
  const navigate = useNavigate();

  return (
    <div sx={{width: "100%", height: "100vh"}}>
        <img
          src={Onboarding_page}
          alt='Onboarding_page'
          style={{ width: '100%' }}
          onClick={()=>{navigate("/login")}}
        />
    </div>
  )
};

export default Onboardingform;