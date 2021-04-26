import data from './data';

function ShoppingCartItem({id}) {
    const {name, price} = data[id]

    return (
        <li> 
        <strong>{name}</strong>
        {price}
        <button>Remove Item</button>
        </li>
    )
}
export default ShoppingCartItem