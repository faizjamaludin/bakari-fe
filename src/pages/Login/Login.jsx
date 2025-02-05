import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";

function Login() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="border rounded-lg w-[400px] h-[300px] flex flex-col p-2xl gap-y-md justify-center">
        <h1 className="text-xl font-semibold">Login</h1>
        <input
          type="text"
          placeholder="Username"
          className="border h-10 rounded-lg px-md text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="border h-10 rounded-lg px-md text-sm"
        />
        <Button variant="action">Login</Button>
      </div>
    </div>
  );
}

export default Login;
