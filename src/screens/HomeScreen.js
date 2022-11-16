// import { products } from "../config/productsData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ECOMMERCE_URL } from "../config/apiURL";
// import { products } from "../config/productsData";
const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/products", {
        baseURL: ECOMMERCE_URL,
      });
      setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className="div">
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
              <Link to={`/product/${product.day}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="product-info">
                <Link to={`/product/${product.day}`}>
                  <span>{product.name}</span>
                </Link>
                <span>{product.category}</span>
                <span>{product.taste}</span>
                <span>{product.taste}</span>
                <span>{product.city}</span>
                <span>
                  <strong>${product.price}</strong>
                </span>
                <span>{product.description}</span>
                <button>add to cart </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeScreen;
