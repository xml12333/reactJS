import "./assets/css/App.css";
import { Header } from "./components";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
