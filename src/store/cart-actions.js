import { cartSliceActions } from './cart-slice'
import { uiSliceActions } from './ui-slice'

const url = 'https://redux-cart-f4aeb-default-rtdb.firebaseio.com/'

let check = true
export const sendCartData = (newCart) => {
  return async (dispatch) => {
    dispatch(
      uiSliceActions.showNotification({
        title: 'pending...',
        msg: 'Sending to the  cart',
        status: 'pending',
      }),
    )
    // Sending to Cart

    const cartData = async () => {
      const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(newCart),
      })

      console.log(newCart)
      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      console.log('hiiiii')

      dispatch(
        uiSliceActions.showNotification({
          title: 'success',
          msg: 'Data sent Successfully !',
          status: 'success',
        }),
      )
    }
    try {
      cartData()
    } catch (err) {
      dispatch(
        uiSliceActions.showNotification({
          title: 'error!',
          msg: 'something went wrong',
          status: 'error',
        }),
      )
    }
  }
}

// fetching logic

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      if (check) {
        check = false
      }
      const response = await fetch(url)

      console.log(response)

      if (!response.ok) {
        throw new Error('Cant fetch the data')
      }
      const data = await response.json()

      return data
    }
    try {
      const data = await fetchData()

      dispatch(
        cartSliceActions.replaceCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity,
        }),
      )
    } catch (error) {
      dispatch(
        uiSliceActions.showNotification({
          title: 'error!',
          msg: 'something went wrong',
          status: 'error',
        }),
      )
    }
  }
}
