import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReviewCard from "../components/ReviewCard";
import { image1, image2 } from "../assets/images";
import { about, reviews } from "../data";
import HeadTag from "../components/HeadTag";
function Home() {
  return (
    <>
      <HeadTag key={"home"} />
      <main className="flex flex-col bg-white ">
        <section className="relative flex flex-col justify-center container mx-auto h-[60dvh] bg-slate-600">
          <img
            loading="lazy"
            src={image1}
            alt="happy using text"
            className="absolute h-full w-full top-0 left-0 object-cover after:bg-grey-800/50 "
          />
          <div className="flex flex-col gap-2 relative px-4">
            <h4 className="text-white text-md md:text-lg">
              Welcome to Zanzibar
            </h4>
            <h4 className="text-white text2xl md:text-4xl uppercase font-extrabold">
              BOOKAve
            </h4>
            <Link
              to={"/store"}
              className="px-4 py-2 text-white bg-orange-600 dark:bg-slate-800 rounded-[2rem] w-max my-2"
            >
              Start Reading
            </Link>
          </div>
        </section>
        <section className="bg-slate-100 py-5">
          <div className="container mx-auto py-10 flex flex-col gap-5">
            <div className="flex flex-col gap-2 max-width-60 mx-auto items-center ">
              <p className="text-slate-400 text-md md:text-large text-center ">
                we're the best in this business
              </p>
              <p className="text-indigo-500 text-lg md:text-2xl text-center uppercase font-bold">
                why should you choose <span className="text-cyan-400"> us</span>
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {about.map((abt) => (
                  <aside
                    key={abt.id}
                    className="bg-white p-5 md:p-10 rounded-md shadow-md grid place-items-center cursor-pointer hover:translate-y-5 hover:shadow-lg transition-all duration-500 max-[25rem] mx-auto"
                  >
                    <div
                      className={`w-10 h-10 rounded-md shadow-md grid place-items-center gap-4 ${abt.background}`}
                    >
                      {abt.icon}
                    </div>
                    <div className="flex flex-col gap-2 py-2">
                      <h4 className="text-lg md:text-xl text-slate-600 font-bold">
                        {abt.title}
                      </h4>
                      <p className="text-sm md:text-md text-slate-400 font-thin">
                        {abt.text}
                      </p>
                    </div>
                  </aside>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-orange-400 py-20 px-4">
          <div className="container mx-auto py-10 flex  items-center justify-center flex-col-reverse md:flex-row">
            <div className="flex flex-col gap-7 flex-1">
              <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase">
                know about us
              </h3>
              <p className="text-white text-base sm:text-lg leading-loose">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                quidem recusandae alias voluptatum rerum, nisi error minus
                laborum aperiam dolorem modi voluptate rem pariatur tenetur
                reprehenderit officia id dolores beatae?
              </p>
            </div>
            <img
              src={image2}
              alt="enjoying digital life"
              className="img w-[250px] h-[250px] md:h-[500px] md:w-[500px] rounded-full flex-shrink-0 object-cover"
            ></img>
          </div>
        </section>
        <section className="reviews bg-gray-100 py-10 px-5">
          <div className="container w-max-[960px] mx-auto flex flex-col gap-4">
            <div className="flex flex-col items-center gap-2 px-4">
              <h3 className="text-indigo-600 heading-text">
                Readers <span className="text-cyan-500">Sent us</span> these
                reviews
              </h3>
              <p className="text-sm sm:text-md md:text-base text-slate-600 text-center max-w-[80%] sm:max-w-[70%]">
                Some of our amazing users had the following to say their
                experiences using our services.
              </p>
            </div>
            <Carousel
              className="p-5"
              showStatus={false}
              emulateTouch={true}
              autoPlay={true}
              infiniteLoop={true}
              showArrows={true}
              showThumbs={false}
              showIndicators={false}
              // preventMovementUntilSwipeScrollTolerance={true}
            >
              {reviews.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </Carousel>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
