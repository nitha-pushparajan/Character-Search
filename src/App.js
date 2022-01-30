import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import CharacterDetail from "./Pages/CharacterDetail";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="header">
        <a href="/">Character Search</a>
      </header>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/:characterId"
            element={<CharacterDetail />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
