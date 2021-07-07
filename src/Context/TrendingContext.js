import React, { createContext, useState } from "react";

export const TrendingContext = createContext();

export const TrendingProvider = (props) => {
  const [trending, setTrending] = useState([]);

  return (
    <TrendingContext.Provider value={[trending, setTrending]}>
      {props.children}
    </TrendingContext.Provider>
  );
};
