import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { rounded, countries } from "../data";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Wizkid } from "../assets/images";

function About() {
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    feedback: "",
  });
  const [index, setIndex] = useState(0);
  let inputRef = useRef("");
  // let integer = useRef(0);
  // console.log("react renders");
  let formRef = useRef(null);
  useEffect(() => {
    // document.title = "BookAve :: About";
    // console.log({ gridImg: formRef.current.querySelector("img") });
    return () => {};
  }, [index]);
  const handleNatiionality = async (e) => {
    e.preventDefault();
    const personname = inputRef.current;
    toast.loading(`please wait while checking. `, { id: "1" });

    try {
      const res = await fetch(`https://api.nationalize.io?name=${personname}`);
      const data = await res.json();
      const { country } = data;
      // console.log(country);
      let foundCountry = country[0]?.country_id;
      if (foundCountry) {
        const countryName = countries.find(
          (country) => country.code === foundCountry
        );
        toast.success(`${personname} is probably ${countryName.name}`, {
          id: "1",
          duration: 2000,
        });
      }
    } catch (error) {
      toast.error(`try again ,{id:"1"}`);
    }
  };

  const handleChange = (e) => {
    const value = +e.target.value;
    setIndex(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleIncrease = () => {
    setIndex((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setIndex((prev) => prev - 1);
  };

  const handleOnChange = (e) => {
    // console.log({ name: e.target.name, value: e.target.value });
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    toast.success("thank you! feedback has been received");
    setInputs((prev) => ({ ...prev, fullname: "", email: "", feedback: "" }));
  };
  return (
    <>
      <main className="flex flex-col bg-gray-300 py-50">
        <section className="bg-slate-50 py-20 px-6">
          <div className="container max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <Carousel
              className=" overflow-hidden h-[21.25rem] md:w-max[23.25rem] "
              showStatus={false}
              emulateTouch={true}
              autoPlay={true}
              infiniteLoop={true}
              showIndicators={true}
              showArrows={false}
              showThumbs={false}
            >
              {rounded.map((round) => (
                <div
                  key={round.id}
                  className="relative overflow-hidden h-[21.25rem] md:w-max[23.25rem] "
                >
                  <img
                    alt="sojb"
                    src={round.image}
                    className=" absolute overflow-hidden md:w-[23.25rem] rounded-md h-[21.25rem] md:w-max[23.25rem] sm:w-full object-cover right-2"
                  />
                </div>
              ))}
            </Carousel>

            <div className="flex md:px-5 py-5 flex-col gap-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-indigo-500 font-bold">
                Learn more about <span className="text-cyan-500">Us</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-4  ">
                {[
                  "best selling programming languages",
                  "easy programming languages to learn",
                  "highest paying programming languages",
                  "largest programming language community",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-cyan-500 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-slate-600">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
              <Link className="px-5 py-2 text-white rounded-[.5rem] shadow md shadow-red-500 bg-red-500 text-center w-max">
                Check our library
              </Link>
            </div>
            <form
              name="forms"
              id="formed"
              action=""
              onSubmit={handleSubmit}
              className="flex gap-2 justify-center p-5"
            >
              <button
                onClick={handleDecrease}
                className="relative px-2 py-2 text-white rounded-[.5rem] shadow md shadow-red-500 bg-red-500 text-center w-max"
              >
                -
              </button>
              <input
                type="number"
                value={index}
                onChange={handleChange}
                className="rounded-xl py-2 px-4 border-2 border-slate-100 text-slate-500 "
              />
              <button
                onClick={handleIncrease}
                className="relative px-2 py-2 text-white rounded-[.5rem] shadow md shadow-emerald-500 bg-emerald-500 text-center w-max"
              >
                +
              </button>
            </form>
          </div>
        </section>
        <section className="relative px-5 py-20">
          <img
            src={Wizkid}
            alt="ejanla"
            className="absolute top-0 left-0 h-full w-full object-cover"
          />{" "}
          <div className="relative container max-w-[960px] mx-auto flex gap-5 flex-col md:flex-row-reverse">
            {" "}
            <div className="flex flex-col text-white">
              <p className="text-inherit text-sm md:text-base font-medium opacity-80">
                reach out to us
              </p>
              <p className="text-inherit text-xl md:3xl font-bold  uppercase">
                bookave team
              </p>
            </div>
            <form
              ref={formRef}
              onSubmit={handleFeedbackSubmit}
              action=""
              id="formForContact"
              className="flex flex-col max-w-[30rem] md:w-[30rem] rounded-md bg-white p-4 text-slate-500 gap-2"
            >
              <label htmlFor="fullName" className="text-inherit pt-5 text-sm">
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

              <label htmlFor="Email" className="text-inherit text-sm">
                Email
              </label>
              <input
                required
                onChange={handleOnChange}
                value={inputs.email}
                name="email"
                autoComplete="true"
                type="text"
                id="email"
                className="py-1 px-4 border-2 border-slate-100 rounded-sm text-inherit"
              />
              <label htmlFor="feedBack" className="text-inherit text-sm">
                Feedback
              </label>
              <textarea
                required
                onChange={handleOnChange}
                value={inputs.feedback}
                name="feedback"
                id="feedBack"
                className="py-2 px-4 border-2 border-slate-100 rounded-md text-inherit"
              />
              <button className="px-5 py-2 text-white rounded-[.5rem] shadow md shadow-red-500 bg-red-500 text-center w-max">
                Send feedBack
              </button>
            </form>
          </div>
        </section>
        <section className="bg-slate-800 px-5">
          <div className="container mx-auto py-20 flex justfy-center items-center">
            <form
              onSubmit={handleNatiionality}
              action=""
              id="formForContact"
              className="flex flex-col max-w-[30rem] md:w-[30rem] rounded-md bg-white p-4 text-slate-500 gap-2"
            >
              <h3 className="text-indigo-500 font-bold text-2xl md:text-3xl ">
                try our nationality detector{" "}
                <span className="text-orange-300">free!</span>
              </h3>
              <label htmlFor="personname" className="text-inherit pt-5 text-sm">
                enter first name
              </label>
              <input
                required
                onChange={(e) => (inputRef.current = e.target.value)}
                ref={inputRef}
                name="personname"
                autoComplete="true"
                type="text"
                id="personname"
                className="py-1 px-4 border-2 border-slate-100 rounded-sm text-inherit"
              />

              <button className="px-5 py-2 text-white rounded-[.5rem] shadow md shadow-red-500 bg-red-500 text-center w-min">
                Send
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
export default About;
