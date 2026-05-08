import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import {CartContext} from "../Context/CartContext"


function Product () {
  const {id} =useParams();
  const [product,setProduct] =useState(null);
  const {addToCart} =useContext (CartContext);

  useEffect (() => {
    axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => setProduct(res.data));
  }, [id]);
  if (!product) {
         return <p className="p-6">loading</p> 
        }
  return (
    <div className="p-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-6" >
      <img src={product.image} className="h-80 mx-auto object-contain" />
      <div>
        <h1 className="text-2xl font-bold">{product.title} </h1>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <p className="text-xl font-bold mt-4">${product.price}</p>
        <button onClick={() => addToCart(product)} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  )
}
export default Product