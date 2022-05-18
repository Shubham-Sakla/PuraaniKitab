import { useDispatch } from 'react-redux'
import { cartSliceActions } from '../../store/cart-slice'
import Card from '../UI/Card'
import classes from './ProductItem.module.css'

const ProductItem = (props) => {
  console.log('i am in productItem')
  const dispatch = useDispatch()
  const addToCartHandler = () => {
    dispatch(cartSliceActions.addItemToCart({ id, title, price, description }))
  }

  const { title, price, description, id } = props

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler} on>
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  )
}

export default ProductItem
