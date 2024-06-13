import { useState } from "react";
import { useRouter } from "@tanstack/react-router";

import authService from "../services/AuthService";

const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { navigate } = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (await authService.login(username, password)) {
      navigate({ to: "/" });
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleSubmit
  };
};

export default useLogin;
