import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import Search from "./components/Search";
import ParentSearch from "./components/ParentSearch";
import { useState } from "react";

function App() {
  const [pattern, setPattern] = useState("");

  const patternHandler = (data) => {
    setPattern(data);
  };

  return (
    <div>
      <header className="header">
        <h1 className="header__title">Rick and Morty</h1>
        <Search pattern={pattern} patternHandler={patternHandler} />
      </header>
      <List pattern={pattern} />
    </div>
  );
}

export default App;
