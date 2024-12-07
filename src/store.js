import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// Async action to fetch products from API
const productsSlice = createSlice({
  name: "products",
  initialState: {
    veg: [
      { name: "Tomato", price: 200.45 },
      { name: "Potato", price: 125.67 },
      { name: "Pumpkin", price: 245.97 },
      { name: "Brinjal", price: 90.23 },
      { name: "Onion", price: 123.32 },
      { name: "Carrot", price: 198.34 },
    ],
    nonVeg: [
      { name: "Chicken", price: 450.45 },
      { name: "Fish", price: 1200.43 },
      { name: "Rooster", price: 1500.42 },
      { name: "prawns", price: 2342.45 }, 
    ],
  },
  reducers: {},
});
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find(
        (item) => item.name === action.payload.name
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) =>
      state.filter((item) => item.name !== action.payload.name),
    clearCart: () => [],
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.name === action.payload.name);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.name === action.payload.name);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          return state.filter((cartItem) => cartItem.name !== item.name);
        }
      }
    },
  },
});


// Purchase History Slice
const purchaseHistorySlice = createSlice({
  name: 'purchaseHistory',
  initialState: [],
  reducers: {
    addPurchase: (state, action) => {
      state.push(action.payload);
    }
  }
});

// Configure store
const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    purchaseHistory: purchaseHistorySlice.reducer
  },
});

// Export actions
export const { 
  addToCart, 
  removeFromCart, 
  incrementQuantity, 
  decrementQuantity, 
  clearCart 
} = cartSlice.actions;

export const { addPurchase } = purchaseHistorySlice.actions;

// Export store
export default store;
