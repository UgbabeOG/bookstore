import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import "react-phone-number-input/style.css";
import { Wizkid } from "../assets/images";

function Register() {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const { register } = useContext(AuthContext);
  const handleOnChange = (e) => {
    // console.log({ name: e.target.name, value: e.target.value });
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleRegister = (e) => {
    e.preventDefault();
    inputs.phone.length < 14
      ? toast.error(`Please enter a valid phone number`)
      : register(inputs);
  };
  return (
    <>
      <main className="flex flex-col bg-gray-300 py-50">
        <section className="relative px-5 py-20">
          <img
            src={Wizkid}
            alt="ejanla"
            className="absolute top-0 left-0 h-full w-full object-cover"
          />
          <div className="relative container max-w-[960px] mx-auto flex gap-5 flex-col md:flex-row-reverse">
            <div className="flex flex-col text-white">
              <p className="text-inherit text-sm md:text-base font-medium opacity-80">
                reach out to us
              </p>
              <p className="text-inherit text-xl md:3xl font-bold  uppercase">
                bookave team
              </p>
            </div>
            <form
              onSubmit={handleRegister}
              action=""
              id="formForContact"
              className="flex flex-col max-w-[30rem] md:w-[30rem] justify-center rounded-md bg-white p-8 text-slate-500 gap-2"
            >
              <label htmlFor="fullname" className="text-inherit pt-5 text-sm">
                Full Name
              </label>
              <input
                required
                value={inputs.fullname}
                onChange={handleOnChange}
                name="fullname"
                autoComplete="true"
                type="text"
                id="fullname"
                className="py-1 px-4 border-2 border-slate-100 rounded-sm text-inherit"
              />
              <label htmlFor="username" className="text-inherit pt-5 text-sm">
                Username
              </label>
              <input
                required
                value={inputs.username}
                onChange={handleOnChange}
                name="username"
                autoComplete="true"
                type="text"
                id="username"
                className="py-1 px-4 border-2 border-slate-100 rounded-sm text-inherit"
              />
              <label htmlFor="email" className="text-inherit pt-5 text-sm">
                Email
              </label>
              <input
                required
                value={inputs.email}
                onChange={handleOnChange}
                name="email"
                autoComplete="true"
                type="email"
                id="email"
                className="py-1 px-4 border-2 border-slate-100 rounded-sm text-inherit"
              />
              <PhoneInput
                onChange={(value) =>
                  setInputs((prev) => ({ ...prev, phone: value }))
                }
                international
                withCountryCallingCode={true}
                defaultCountry="NG"
                className="outline-0 rounded-sm flex text-inherit border-slate-100 border-2 px-4 py-1"
                countryCallingCodeEditable={false}
                flags={flags}
                limitMaxLength={true}
                name="phone"
              />

              <label htmlFor="password" className="text-inherit text-sm">
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
                className="py-1 px-4 border-2 border-slate-100 rounded-sm text-inherit"
              />
              <button className="px-8 py-2 text-white rounded-[.5rem] shadow md shadow-red-500 bg-red-500 text-center w-max">
                Register
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
export default Register;
