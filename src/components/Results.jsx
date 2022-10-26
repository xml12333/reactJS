import React from "react";

const Results = ({results}) => {
  return (
    <div className="results">
      {results.map((result, i) => {
        const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
        return (
          <div className="result" key={i}>
            <h3>{result.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
            <a href={url} target="_blank" rel="noreferrer">
              Read more
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
