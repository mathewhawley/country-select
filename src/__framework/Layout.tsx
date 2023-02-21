import React from "react";
import { Sidebar } from "./Sidebar";
import "./variables.css";
import "./globals.css";
export const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <>
      <main>{children}</main>
      <Sidebar />
    </>
  );
};
