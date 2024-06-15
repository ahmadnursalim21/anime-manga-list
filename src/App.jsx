import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PageAnime from "./Pages/PageAnime";
import PageManga from "./Pages/PageManga";
import Error from "./Pages/Error";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime" element={<PageAnime />} />
          <Route path="/manga" element={<PageManga />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
