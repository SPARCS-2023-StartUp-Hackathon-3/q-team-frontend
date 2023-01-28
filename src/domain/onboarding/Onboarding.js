import React, { useEffect } from "react";
import { useParams } from "react-router";

import { Onboardingform } from "../../components/onboarding";

const Onboarding = () => {
  const params = useParams();

  useEffect(() => {
    console.log(params);
  }, []);
  return <Onboardingform />;
};

export default Onboarding;
