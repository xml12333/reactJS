import Header from "./components/Header";
import Questions from "./components/Questions";
import { data } from "./data/data";
function App() {
  return (
    <div className="App">
      <Header />
      {localStorage.getItem("data") ? (
        <Questions data={JSON.parse(localStorage.getItem("data"))} />
      ) : (
        <Questions data={data} />
      )}
    </div>
  );
}

export default App;
