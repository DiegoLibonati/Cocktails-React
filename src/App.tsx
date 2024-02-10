import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { CocktailDetail } from "./pages/CocktailDetail";
import { Error } from "./pages/Error";
import { Navbar } from "./components/Navbar";
import "./General.css";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/cocktail/:id"
          element={<CocktailDetail></CocktailDetail>}
        ></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
