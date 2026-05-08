import { useState, useEffect } from "react"
import axios from "axios"
import SearchBar from "../Components/SearchBar"
import ProductCard from "../Components/ProductCard"

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (product) => {
    console.log("Added:", product);
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  const filtered = products.filter((p) =>
    p?.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <SearchBar setSearch={setSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;