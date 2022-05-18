import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items
      state.totalQuantity = action.payload.totalQuantity
    },
    addItemToCart(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      state.totalQuantity++
      state.changed = true
      if (existingItem) {
        existingItem.quantity++
        existingItem.totalAmount = existingItem.totalAmount + newItem.price
      } else {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalAmount: newItem.price,
          title: newItem.title,
        })
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload
      const existingItem = state.items.find((val) => val.id === id)
      state.totalQuantity--
      state.changed = true
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((val) => val.id !== id)
      } else {
        existingItem.quantity--
        existingItem.totalAmount = existingItem.totalAmount - existingItem.price
      }
    },
  },
})

export const cartSliceActions = cartSlice.actions
export default cartSlice
