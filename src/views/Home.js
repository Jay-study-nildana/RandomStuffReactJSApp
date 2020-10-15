import React, { Fragment } from "react";

import Hero from "../components/Hero";
// import Content from "../components/Content";
import RandomQuote from "../components/HomeComponents/RandomQuote";

const Home = () => (
  <Fragment>
    <Hero />
    {/* <hr /> */}
    {/* dont want any content right now on landing page. */}
    {/* <Content /> */}
    <RandomQuote />
  </Fragment>
);

export default Home;
