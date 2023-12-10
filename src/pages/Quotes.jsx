import React from "react";
import { useFetchData } from "../data";

function Quotes() {
  const {
    data: quotes,
    loading,
    error,
    fetchData: fetchRandomQuote,
  } = useFetchData("https://api.quotable.io/random");
  const handleRefresh = () => {
    fetchRandomQuote();
  };

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>Error:{error}</p>
      ) : (
        quotes && (
          <div className="grid gap-3 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 place-items-center container mx-auto py-20 max-w-[960px] px-5 ">
            <div>
              <div className=" py-10 mb-3 shadow-md rounded-md p-4 bg-sky-700 text-slate-200">
                <p key={quotes.id}>{quotes.content}</p>
                <p>{quotes.author}</p>
              </div>
            </div>

            <div className="flex justify-center align-center">
              <button
                className="text-slate-300 bg-blue-500 hover:bg-blue-600 w-max p-2 rounded active:bg-blue-400 transition-colors duration-200 "
                type="button"
                onClick={handleRefresh}
              >
                Refresh
              </button>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default Quotes;
