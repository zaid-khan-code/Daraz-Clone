import "./App.css";
import { ProductProvider } from "./context/ProductContext";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
