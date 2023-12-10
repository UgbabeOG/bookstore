import React from "react";

export default function Error() {
  return (
    <main className="min-h-[90vh] bg-zinc-400 font-bold flex flex-col gap-2 justify-center">
      <h2 className="text-xl md:text-2xl text-indigo-600 text-center">
        Houston, we have a problem!
      </h2>
      <p className="text-center">error loading page </p>
    </main>
  );
}
