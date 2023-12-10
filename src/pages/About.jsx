import React, { useRef, useState } from "react";
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
  let inputRef = useRef("");

  let formRef = useRef(null);

  const handleNatiionality = async (e) => {
    e.preventDefault();
    const personName = inputRef.current;
    toast.loading(`please wait while checking. `, { id: "1" });

    try {
      const res = await fetch(`https://api.nationalize.io?name=${personName}`);
      const data = await res.json();
      const { country } = data;
      let foundCountry = country[0]?.country_id;
      if (foundCountry) {
        const countryName = countries.find(
          (country) => country.code === foundCountry
        );
        toast.success(`${personName} is probably ${countryName.name}`, {
          id: "1",
          duration: 2000,
        });
      }
    } catch (error) {
      toast.error(`try again` ,{id:"1"});
    }
  };

  const handleOnChange = (e) => {
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
        <section className="px-6 py-20 bg-slate-50">
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

            <div className="flex flex-col gap-2 py-5 md:px-5">
              <h3 className="text-2xl font-bold text-indigo-500 sm:text-3xl md:text-4xl">
                Learn more about <span className="text-cyan-500">Us</span>
              </h3>
              <div className="grid grid-cols-1 gap-2 py-4 md:grid-cols-2 ">
                {[
                  "best selling programming languages",
                  "easy programming languages to learn",
                  "highest paying programming languages",
                  "largest programming language community",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500"></div>
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
          </div>
        </section>
        <section className="relative px-5 py-20">
          <img
            src={Wizkid}
            alt="ejanla"
            className="absolute top-0 left-0 object-cover w-full h-full"
          />{" "}
          <div className="relative container max-w-[960px] mx-auto flex gap-5 flex-col md:flex-row-reverse">
            {" "}
            <div className="flex flex-col text-white">
              <p className="text-sm font-medium text-inherit md:text-base opacity-80">
                reach out to us
              </p>
              <p className="text-xl font-bold uppercase text-inherit md:3xl">
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
              <label htmlFor="fullName" className="pt-5 text-sm text-inherit">
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
                className="px-4 py-1 border-2 rounded-sm border-slate-100 text-inherit"
              />

              <label htmlFor="Email" className="text-sm text-inherit">
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
                className="px-4 py-1 border-2 rounded-sm border-slate-100 text-inherit"
              />
              <label htmlFor="feedBack" className="text-sm text-inherit">
                Feedback
              </label>
              <textarea
                required
                onChange={handleOnChange}
                value={inputs.feedback}
                name="feedback"
                id="feedBack"
                className="px-4 py-2 border-2 rounded-md border-slate-100 text-inherit"
              />
              <button className="px-5 py-2 text-white rounded-[.5rem] shadow md shadow-red-500 bg-red-500 text-center w-max">
                Send feedBack
              </button>
            </form>
          </div>
        </section>
        <section className="px-5 bg-slate-800">
          <div className="container flex items-center py-20 mx-auto justfy-center">
            <form
              onSubmit={handleNatiionality}
              action=""
              id="formForContact"
              className="flex flex-col max-w-[30rem] md:w-[30rem] rounded-md bg-white p-4 text-slate-500 gap-2"
            >
              <h3 className="text-2xl font-bold text-indigo-500 md:text-3xl ">
                try our nationality detector{" "}
                <span className="text-orange-300">free!</span>
              </h3>
              <label htmlFor="personName" className="pt-5 text-sm text-inherit">
                enter first name
              </label>
              <input
                required
                onChange={(e) => (inputRef.current = e.target.value)}
                ref={inputRef}
                name="personName"
                autoComplete="true"
                type="text"
                id="personName"
                className="px-4 py-1 border-2 rounded-sm border-slate-100 text-inherit"
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
