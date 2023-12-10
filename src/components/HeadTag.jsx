import React from "react";
import { Helmet } from "react-helmet";
import { image1 } from "../assets/images";

function HeadTag({ description, image, title }) {
  const pageDesc = description || "programming languages",
    pageTitle = title || "The Best BookStore",
    ogImage = image || image1;

  return (
    <Helmet>
      <meta charset="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={pageDesc} />
      <meta property="og:img" content={ogImage} />
      <meta name="twitter: card" content="summary_large" />
      <link rel="apple-touch-icon" href="/logo192.png" />

      <title>BookAve :: {pageTitle} </title>
    </Helmet>
  );
}

export default HeadTag;
