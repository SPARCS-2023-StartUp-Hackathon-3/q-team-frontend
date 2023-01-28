import React from "react";
import { Routes, Route } from 'react-router-dom';
import { OnboardingContainer } from "domain/onboarding";

const OnBoarding = () => {
  return (
    <Routes>
      <Route path = "/" element={<OnboardingContainer/>}/>
    </Routes>
  );
};

export default OnBoarding;
