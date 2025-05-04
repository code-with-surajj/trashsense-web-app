
import React, { useState } from "react";
import Auth from "@/components/Auth";

const Login = () => {
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const toggleAuthMode = () => {
    setAuthMode(authMode === "login" ? "register" : "login");
  };

  return <Auth mode={authMode} onSwitch={toggleAuthMode} />;
};

export default Login;
