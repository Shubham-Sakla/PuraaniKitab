import Card from '../UI/Card'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const Cart = (props) => {
  console.log("Hi I am in Cart");
  const cartItems = useSelector((state) => state.cart.items)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((state) => (
          <CartItem
            key={state.id}
            item={{
              id: state.id,
              title: state.title,
              quantity: state.quantity,
              total: state.totalAmount,
              price: state.price,
            }}
          />
        ))}
      </ul>
    </Card>
  )
}

export default Cart
