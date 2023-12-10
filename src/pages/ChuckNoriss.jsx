import React from "react";
import { useFetchData } from "../data";

function ChuckNorris() {
  const {
    data: posts,
    loading,
    error,
    fetchData,
  } = useFetchData("https://api.chucknorris.io/jokes/random");

  const handleRefresh = () => {
    fetchData();
  };
  return (
    <main className="bg-slate-200 flex flex-col">
      <div className="container mx-auto py-20 max-w-[960px] px-5">
        <h3 className="text-sky-900 font-bold">Enjoy our Chuck Norris jokes</h3>
        <div className="grid place-items-center m-4">
          {loading ? (
            <p>loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            posts && (
              <div
                key={posts.id}
                className="   gap-2 shadow-md rounded-md p-4 bg-sky-700 text-slate-200 hover:translate-y-5 duration-150 transition-all"
              >
                <p className="text-sm md:text-md  leading-loose py-2 text-justify">
                  {posts?.value}
                </p>
              </div>
            )
          )}
          <button
            type="submit"
            onClick={handleRefresh}
            className="text-white bg-red-300 w-max font-thin rounded-md hover:translateY-1 p-2 m-2"
          >
            refresh
          </button>
        </div>
      </div>
    </main>
  );
}

export default ChuckNorris;
