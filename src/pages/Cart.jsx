import {useContext, userContext} from 'react'
import {CartContext} from '../Context/CartContext'

function Cart  () {
  const {cart, removeFromCart} = useContext(CartContext);
  const total =cart.reduce((sum, item) => sum + item.price*item.qty, 0);
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      {cart.map((item) => (
        <div key={itemm.id} className='flex justify-between p-3 border-b'>
          <div>
            <p>{item.title}</p>
            <p>Qty:{item.qty}</p>
          </div>
          <p>${item.price*item.qty}</p>
          <button onClick={() => removeFromCart(item.id)} className='text-red-500'>Remove</button>
        </div>
      ))}
      <h2 className='mt-4 font-bold'> Total:${total.toFixed}</h2>
    </div>
  )
}
{}
export default Cart