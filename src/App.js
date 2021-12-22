import "./scss/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";

// pages
import Home from "./pages/Home";
import All from "./pages/All";
import Recently from "./pages/Recently";
import TopGamesPc from "./pages/TopGamesPc";
import TopGamesBrowser from "./pages/TopGamesBrowser";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<All />} />
          <Route path="/recently" element={<Recently />} />
          <Route path="/topGamesPc" element={<TopGamesPc />} />
          <Route path="/topGamesBrowser" element={<TopGamesBrowser />} />
          <Route path="/details/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
