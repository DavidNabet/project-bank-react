import { Header, Accounts } from "./components";
import bank from "./seed.json";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Accounts accounts={bank} />
      </div>
    </>
  );
}

export default App;
