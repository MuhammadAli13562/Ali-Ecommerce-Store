"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastContainerWrapper = () => {
  return (
    <ToastContainer
      style={{ marginTop: "50px" }}
      position="top-center"
      theme="dark"
      autoClose={1200}
    />
  );
};

export default ToastContainerWrapper;
