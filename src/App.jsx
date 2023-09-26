import { Routes, Route, useLocation } from "react-router-dom";
import Start from "./component/Start";
import Games from "./component/Games";
import Search from "./component/Search";
import ArticleGames from "./component/ArticleGames";
import { AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Start />} />
          <Route path="/games" element={<Games />} />
          <Route path="/articles" element={<ArticleGames />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
export default App;
