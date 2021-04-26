import { useSelector } from 'react-redux'
import data from './data'
import TotalCost from './TotalCost'
import clearCart from './clearCart'
import ShoppingCartItem from './ShoppingCartItem'

function ShoppingCart() {
  const shoppingCart = useSelector(state => state.shoppingCart)

  return (
    <div className="ShoppingCart">
      <h1>Your Cart</h1>
        <ul>
          {shoppingCart.map(id => <ShoppingCartItem id={id} />)}
        </ul>
        <TotalCost/>
        <clearCart/>
      </div>
  )
}

export default ShoppingCart