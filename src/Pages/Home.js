import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "../Components/Header/component";
import Navmenu from "../Components/NavMenu/component";
import AppRouter from "../Router";
import { TrendingProvider } from "../Context/TrendingContext";

function Home() {
  return (
    <>
      <Router>
        <TrendingProvider>
          <Header />
          <Navmenu />
          <AppRouter />
        </TrendingProvider>
      </Router>
    </>
  );
}

export default Home;
