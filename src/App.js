import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import { useSelector } from 'react-redux'
import { useEffect, Fragment, useRef, useState } from 'react'
import Notification from './components/Notification/Notification'
import { useDispatch } from 'react-redux'
import { fetchCartData, sendCartData } from './store/cart-actions'
import imageJs from './Images/javascript-certificate.jpg'
import imageRt from './Images/ReactCertificate2.jpg'

let flag = true

function App() {
  const [images, setImages] = useState(imageJs)
  const showCart = useSelector((state) => state.ui.isCartVisible)
  const dispatch = useDispatch()

  const inputRef = useRef()
  const linked = useRef()
  console.log(inputRef)

  const showNotification = useSelector((state) => state.ui.notification)

  const newCart = useSelector((state) => state.cart)
  console.log(newCart)

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    if (flag) {
      flag = false
      return
    }

    if (newCart.changed) {
      dispatch(sendCartData(newCart))
    }
  }, [newCart, dispatch])

  // const clickHandler = () => {
  //   linked.current.textContent = 'Hi This is Shubham Sakla'
  //   linked.current.scrollIntoView({ behavior: 'smooth' })
  //   setImages(imageRt)
  // }

  return (
    <Fragment>
      {showNotification && (
        <Notification
          title={showNotification.title}
          message={showNotification.msg}
          status={showNotification.status}
        ></Notification>
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  )
}

export default App
