import { Link } from "react-router-dom"

function ProductCard ({product, addToCart}) {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <Link to={`/product/${product.id}`}>
      <img src= {product.image} className="h-40 mx-auto object-contain"/>
      </Link>
      <h2 className="text-sm font-semibold mt-2">{product.title.slice(0, 50)}</h2>
      <p className="font-bold mt-2">${product.price}</p>
      <button onClick={() => addToCart(product)} className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard