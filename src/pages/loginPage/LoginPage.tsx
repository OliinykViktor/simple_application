import React from "react";

import Input from "../../shared/components/Input";
import useLogin from "../../core/hooks/useLogin";

const LoginPage: React.FC = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    handleSubmit
  } = useLogin();

  return (
    <div className="flex items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-6 rounded shadow-md"
      >

        <h1
          data-testid="load-title"
          className="text-3xl">
          Login
        </h1>

        <Input
          type="text"
          placeholder="Username"
          value={username}
          setParams={setUsername}
        />
        <Input
          value={password}
          setParams={setPassword}
        />
        <button
          data-testid="load-submit-button"
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
