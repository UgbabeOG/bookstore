import React, { useState } from "react";
import { Wizkid } from "../assets/images";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { login } = useAuth();
  const handleOnChange = (e) => {
    // console.log({ name: e.target.name, value: e.target.value });
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    login(inputs);
  };
  return (
    <>
      <main className="flex flex-col bg-gray-300 py-50">
        <section className="relative px-5 py-20">
          <img
            src={Wizkid}
            alt="ejanla"
            className="absolute top-0 left-0 object-cover w-full h-full"
          />
          <div className="relative container max-w-[960px] mx-auto flex gap-5 flex-col md:flex-row-reverse">
            <div className="flex flex-col text-white">
              <p className="text-sm font-medium text-inherit md:text-base opacity-80">
                reach out to us
              </p>
              <p className="text-xl font-bold uppercase text-inherit md:3xl">
                bookave team
              </p>
            </div>
            <form
              onSubmit={handleLogin}
              action=""
              id="formForContact"
              className="flex flex-col max-w-[30rem] md:w-[30rem] rounded-md bg-white p-4 text-slate-500 gap-2"
            >
              <label htmlFor="username" className="pt-5 text-sm text-inherit">
                Full Name / Email
              </label>
              <input
                required
                value={inputs.username}
                onChange={handleOnChange}
                name="username"
                autoComplete="true"
                type="text"
                id="username"
                className="px-4 py-1 border-2 rounded-sm border-slate-100 text-inherit"
              />

              <label htmlFor="password" className="text-sm text-inherit">
                password
              </label>
              <input
                required
                onChange={handleOnChange}
                value={inputs.password}
                name="password"
                autoComplete="true"
                type="password"
                id="password"
                className="px-4 py-1 border-2 rounded-sm border-slate-100 text-inherit"
              />
              <button className="px-5 py-2 text-white rounded-[.5rem] shadow md shadow-red-500 bg-red-500 text-center w-max">
                Login
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
export default Login;
