import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Bambi's Store</Link>
        </header>
        <main> 
          <Routes>
            <Route path="/product/:day" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
