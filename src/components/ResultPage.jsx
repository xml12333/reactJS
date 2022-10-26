import React from "react";
import { useState, useEffect } from "react";
import useAxiosApi from "niktreacthook";
import Header from "./Header";
import Results from "./Results";
import Spinner from "./Spinner";
function ResultPage() {
  const [endpoint, setEndpoint] = useState("");
  const [searchInfo, setSearchInfo] = useState([]);
  const [results, setResults] = useState([]);
  const [isLoading, isError, response] = useAxiosApi(endpoint, [endpoint]);
  useEffect(() => {
    if (response) {
      setSearchInfo(response.data.query.searchinfo);
      setResults(response.data.query.search);
    }
  }, [response,endpoint]);

  if (isError) {
    throw Error(response.statusText);
  }
  return (
    <>
      <Header searchInfo={searchInfo} setEndpoint={setEndpoint} />
      {isLoading ? <Spinner /> : <Results results={results} />}
    </>
  );
}

export default ResultPage;
