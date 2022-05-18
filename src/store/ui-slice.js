import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: { isCartVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.isCartVisible = !state.isCartVisible
    },
    showNotification(state, action) {
      state.notification = {
        title: action.payload.title,
        msg: action.payload.msg,
        status: action.payload.status,
      }
    },
  },
})

export const uiSliceActions = uiSlice.actions
export default uiSlice.reducer
