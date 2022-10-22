import { useState, useEffect } from "react";
import Quote from "./components/Quote";


function App() {
  const [quote, setQuote] = useState({
    anime: null,
    charecter: null,
    quote: null,
  });

  const fetchQuote = async () => {
    return await fetch("https://animechan.vercel.app/api/random").then(
      (response) => response.json()
    );
  };
  const generate = async () => {
    console.log("in");
    setQuote(await fetchQuote());
  };
  useEffect(() => {
    generate();
  }, []);
  return (
    <div className="App">
      <Quote quote={quote} />
      <button onClick={generate}>Generate new quote</button>
    </div>
  );
}

export default App;
