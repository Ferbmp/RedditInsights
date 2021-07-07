import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { TrendingContext } from "../../Context/TrendingContext";

import { useFetch } from "../../Hooks/useFetch.js";
import Loading from "../Animation/Loading";
import List from "../List/component";

function TrendingList() {
  const [trending, setTrending] = useContext(TrendingContext);

  const [limit, setLimit] = useState(5);
  const { topic } = useParams();

  useEffect(() => {
    setLimit(8);
  }, [topic]);

  const { data, error } = useFetch(`r/reactjs/${topic}.json`);

  if (!data && !error) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (data) {
    setTrending(data?.data?.children);
  }

  return (
    <>
      {data && !error ? (
        <List
          trending={trending}
          limit={limit}
          setLimit={setLimit}
          topic={topic}
        />
      ) : (
        <h1>Ocorreu um erro ao processar sua requisição, tente novamente</h1>
      )}
    </>
  );
}

export default TrendingList;
