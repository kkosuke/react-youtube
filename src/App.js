import { BrowserRouter , Route, Routes } from "react-router-dom";
import Top from "./pages/Top";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/search`} element={<Search />} />
        <Route path={`/watch`} element={<Watch />} />
        <Route path={`/`} element={<Top />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
