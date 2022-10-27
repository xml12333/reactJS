import "./App.css";
import { Table } from "./components";
import { users } from "./data/users";
function App() {
  return (
      <Table data={users} tableName="Студент" />
  );
}

export default App;
