import React from "react";
import { NavBar } from "./NavBar";
import { Outlet } from "react-router";
import {Footer} from './Footer'

export const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
