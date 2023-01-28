import React from "react";
import { Routes, Route } from 'react-router-dom';
import { Onboarding } from "domain/onboarding";

const OnboardingContainer = () => {
  return (
    <Routes>
      <Route path = "/" element={<Onboarding/>}/>
    </Routes>
  );
};

export default OnboardingContainer;
