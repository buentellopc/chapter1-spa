import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="header__title">Rick and Morty</h1>
      </header>
      <List />
    </div>
  );
}

export default App;
