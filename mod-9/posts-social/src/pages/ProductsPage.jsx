import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductsPage() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log(data);
      setProductsData(data.products);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products Page</h1>

      <div>
        {productsData.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <h2>{product.title}</h2>
            <h6>{product.description}</h6>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default ProductsPage;
