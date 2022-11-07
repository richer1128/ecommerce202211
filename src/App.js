import { products } from "./config/productsData";

import "./App.css";

function App() {
  return (
    <div>
      <header>
        <a href="/">Bambi's Store</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {/* {products.map((products) => (
            <div className="product" key={products.day}>
              <img src={products.image} alt={products.name} />
              <div className="product-info">
                <span>{products.name}</span>
                <span>{products.category}</span>
                <span>{products.taste}</span>
                <span>{products.taste}</span>
                <span>{products.city}</span>
                <span>{products.price}</span>
                <span>{products.description}</span>
              </div>
            </div>
          ))} */}
          {products.map((product, index) => {
            return (
              <div className="product" key={product.day}>
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <span>{product.name}</span>
                  <span>{product.category}</span>
                  <span>{product.taste}</span>
                  <span>{product.taste}</span>
                  <span>{product.city}</span>
                  <span>{product.price}</span>
                  <span>{product.description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
