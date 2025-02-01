import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  statusTab: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const indexProductId = (state.items).findIndex(item => item.productId === productId);
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
    },
    changeQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const indexProductId = (state.items).findIndex(item => item.productId === productId);
      if (quantity > 0) {
        state.items[indexProductId].quantity = quantity;
      } else {
        state.items = (state.items).filter(item => item.productId !== productId);
      }
    },
    toggleStatusTab(state) {
      if (state.statusTab === false) {
        state.statusTab = true;
      } else {
        state.statusTab = false;
      }
    }
  }
})

export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;