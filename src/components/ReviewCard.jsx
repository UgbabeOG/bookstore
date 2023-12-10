import React from "react";
import { FaStar } from "react-icons/fa";

function ReviewCard({ name, image, title, rating, text }) {
  return (
    <aside className="grid grid-cols-3 gap-2">
      <div className="col-span-2 flex flex-col gap-2 p-3 items-start">
        <h5 className="text-indigo-500 font-medium text-base sm:text-lg">
          {title}
        </h5>
        <p className="text-sm sm:text-md text-slate-500 font-thin text-justify">
          {text}
        </p>
        <div className="flex flex-col justify-center gap-1 py-2">
          <div className="flex items-center gap-1">
            {new Array(rating).fill(1).map((_element, index) => (
              <FaStar
                key={index}
                className="text-yellow-400 text-xs sm:text-sm"
              />
            ))}
            {new Array(5 - rating).fill(1).map((_element, index) => (
              <FaStar
                key={index}
                className="text-slate-400 text-xs sm:text-sm"
              />
            ))}
          </div>
          <h5 className="text-md sm:text-base text-slate-700 uppercase font-bold">
            {name}
          </h5>
        </div>
      </div>
      <div className="flex">
        <img
          src={image}
          alt="{name}"
          className="w-[150px] h-[150px] object-contain rounded-full"
        />
      </div>
    </aside>
  );
}

export default ReviewCard;
