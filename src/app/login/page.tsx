"use client";

import axios from "axios";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const data = axios("/login", {
    //   method: "POST",
    //   data: {
    //     username,
    //     password,
    //   },
    // });

    const response = {
      token: "kafdjhkldfhsaKLHGSDKL;HLDGKSahj",
      expire: 7,
    };

    Cookies.set("token", response.token, { expires: response.expire });
    redirect("./dashboard");
  };
  return (
    <>
      <div className="h-[100vh] flex flex-col items-center">
        <h1 className="mt-6 text-xl md:text-2xl font-bold text-sky-500 uppercase">
          Login
        </h1>
        <form
          onSubmit={handleLoginForm}
          action=""
          className="flex flex-col justify-center items-center bg-white p-4 m-6 rounded-2xl "
        >
          <div className="flex flex-col items-start">
            <label htmlFor="" className="font-bold">
              Username
            </label>
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              name="username"
              className="bg-gray-200 p-2 rounded border-sky-500 border-2 w-64 md:w-98 my-2"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="" className="font-bold">
              Password
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name="password"
              className="bg-gray-200 p-2 rounded border-sky-500 border-2 w-64 md:w-98 my-2"
              type="password"
            />
          </div>

          <button
            type="submit"
            className="bg-sky-500 p-2 text-white text-xl font-bold w-64 mt-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
export default Login;
