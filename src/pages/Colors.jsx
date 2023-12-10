import React from "react";
import { useFetchData } from "../data";

function Colors() {
  const {
    data: colors,
    loading,
    error,
  } = useFetchData("https://jsonplaceholder.typicode.com/photos");
  return (
    <main className="bg-slate-200 flex flex-col">
      <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 container mx-auto py-20 max-w-[960px] px-5">
        {loading ? (
          <p>loading...</p>
        ) : error ? (
          <p>Error {error}</p>
        ) : (
          colors &&
          colors.map((color, i) => (
            <div
              key={i}
              className="flex gap-2 shadow-md rounded-md bg-slate-300 flex-col p-4  text-sky-800 hover:text-slate-200 hover:bg-sky-700 hover:translate-y-5 duration-250 transition-all"
            >
              <img
                src={color.url}
                alt={color.title}
                placeholder={color.thumbnailUrl}
              />
              <p className="p-2 text-center">{color.title}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}

export default Colors;
