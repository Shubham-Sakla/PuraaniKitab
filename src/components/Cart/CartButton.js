import classes from './CartButton.module.css'
import { uiSliceActions } from '../../store/ui-slice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const CartButton = (props) => {
  const dispatch = useDispatch()

  const totalQuantity = useSelector((state) => state.cart.totalQuantity)

  const onClickHandler = () => {
    dispatch(uiSliceActions.toggle())
  }
  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  )
}

export default CartButton
