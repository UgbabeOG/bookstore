import React from "react";

import {
  Dog,
  Colors,
  Quote,
  ChuckNorris,
  Jokes,
  CatFact,
  Advice,
} from "../components/Apis";

function Gallery() {
  return (
    <main className="bg-slate-200 flex flex-col">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 container mx-auto py-20 max-w-[960px] px-5">
        <Dog />
        <Colors />
        <ChuckNorris />
        <Quote />
        <Advice />
        <Jokes />
        <CatFact />
      </div>
    </main>
  );
}

export default Gallery;
