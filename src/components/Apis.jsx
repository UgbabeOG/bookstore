import { Link } from "react-router-dom";
import {
  dogLink,
  chuckNorris,
  quoteLinks,
  colorsLinks,
  jokesLinks,
  catFactsLinks,
  adviceLinks,
  useFetchData,
} from "../data";

export const Dog = function () {
  const {
    data: dogImage,
    loading,
    error,
  } = useFetchData("https://dog.ceo/api/breeds/image/random");
  return (
    <>
      {dogLink.map((link) => (
        <Link to={link.link} key={link.id}>
          <div className="text-sky-800 hover:text-slate-200 hover:bg-sky-700 hover:translate-y-5 duration-250 transition-all px-5 py-2 rounded-[.5rem] shadow md text-center w-64">
            {loading ? (
              <div className="custom-loader"></div>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <img
                className="w-60"
                src={dogImage?.message}
                alt={dogImage?.status}
              />
            )}
            <p>random dog photos</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export const Colors = function () {
  const {
    data: colors,
    loading,
    error,
  } = useFetchData("https://jsonplaceholder.typicode.com/photos");
  return (
    <>
      {colorsLinks.map((colorsLink) => (
        <Link to={colorsLink.link} key={colorsLink.id}>
          <div className="flex flex-col gap-2 p-4 transition-all rounded-md shadow-md bg-slate-300 text-sky-800 hover:text-slate-200 hover:bg-sky-700 hover:translate-y-5 duration-250">
            {loading ? (
              <div className="custom-loader"></div>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              colors && (
                <>
                  <img
                    className="h-full"
                    src={colors[0]?.url}
                    alt={colors[0]?.title}
                  />
                  <p className="p-2 text-center">{colors[0]?.title}</p>
                </>
              )
            )}
            <p>Color selector</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export const ChuckNorris = function () {
  const {
    data: posts,
    loading,
    error,
  } = useFetchData("https://api.chucknorris.io/jokes/random");

  return (
    <>
      {chuckNorris.map((chuck) => (
        <Link key={chuck.id} to={chuck.link}>
          <div
            key={chuck.id}
            className="gap-2 p-4 transition-all duration-150 rounded-md shadow-md bg-sky-700 text-slate-200 hover:translate-y-5"
          >
            {loading ? (
              <div className="custom-loader"></div>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <p className="py-2 text-sm leading-loose text-justify md:text-md">
                {posts?.value}
              </p>
            )}
          </div>
        </Link>
      ))}
    </>
  );
};

export const Quote = () => {
  const {
    data: quotes,
    loading,
    error,
  } = useFetchData("https://api.quotable.io/random");
  return (
    <>
      {quoteLinks.map((quote) => (
        <Link to={quote.link} key={quote.id}>
          {loading ? (
            <p className="custom-loader">loading...</p>
          ) : error ? (
            <p>error: {error} </p>
          ) : (
            <div className="gap-2 p-4 transition-all duration-150 rounded-md shadow-md bg-sky-700 text-slate-200 hover:translate-y-5">
              <p>{quotes?.content}</p>
              <p>{quotes?.author}</p>
            </div>
          )}
        </Link>
      ))}
    </>
  );
};

export const Advice = function () {
  const {
    data: advices,
    loading,
    error,
  } = useFetchData("https://api.adviceslip.com/advice");
  return (
    <>
      {adviceLinks.map((advice) => (
        <Link to={advice.link} key={advice.id}>
          {loading ? (
            <div className="custom-loader"></div>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div className="gap-2 p-4 transition-all duration-150 rounded-md shadow-md bg-sky-700 text-slate-200 hover:translate-y-5">
              <p>{advices?.slip?.advice}</p>
            </div>
          )}
        </Link>
      ))}
    </>
  );
};
export const CatFact = function () {
  const {
    data: catFacts,
    loading,
    error,
  } = useFetchData("https://catfact.ninja/fact");

  return (
    <>
      {catFactsLinks.map((fact) => (
        <Link to={fact.link} key={fact.id}>
          {loading ? (
            <div className="custom-loader"></div>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            catFacts && (
              <div className="gap-2 p-4 transition-all duration-150 rounded-md shadow-md bg-sky-700 text-slate-200 hover:translate-y-5">
                <p>{catFacts?.fact}</p>
              </div>
            )
          )}
        </Link>
      ))}
    </>
  );
};

export const Jokes = function () {
  const {
    data: joke,
    loading,
    error,
  } = useFetchData("https://v2.jokeapi.dev/joke/Any");
  return (
    <>
      {jokesLinks.map((jokeLink) => (
        <Link to={jokeLink.link} key={jokeLink.id}>
          {loading ? (
            <div className="custom-loader"></div>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            joke && (
              <div className="gap-2 p-4 transition-all duration-150 rounded-md shadow-md bg-sky-700 text-slate-200 hover:translate-y-5">
                <p>{joke?.joke || joke?.setup}</p>
              </div>
            )
          )}
        </Link>
      ))}
    </>
  );
};
