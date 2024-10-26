import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
