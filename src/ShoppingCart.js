import { useSelector } from 'react-redux'
import data from './data'

function ShoppingCart() {
  const shoppingCart = useSelector(state => state.shoppingCart)

  return (
    <div className="ShoppingCart">
      <h1>Your Cart</h1>
        <ul>
          {shoppingCart.map(item => <li>{data[item].name}</li>)}
        </ul>
      </div>
  )
}

export default ShoppingCart