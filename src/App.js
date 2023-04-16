import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import Search from "./components/Search";
import { useState } from "react";
import InfiniteScroll from "./components/InfinetScroll";

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
