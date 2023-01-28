import React from "react";
import { Mainform } from "components/main";
import { Topbar, Playbar } from "components/layout";

const MainContainer = () => {
  return (
    <>
      <Topbar />
      <Mainform/>
      <Playbar />
    </>
  );
};

export default MainContainer;
