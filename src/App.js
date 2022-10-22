import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ResultPage from "./components/ResultPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ResultPage />} >
          </Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
