import data from './data'
import Product from './Product'

function ProductList() {
  return (
    <div className="ProductList">
      {data.map((_, i) => <Product id={i} />)}
    </div>
  )
}

export default ProductList